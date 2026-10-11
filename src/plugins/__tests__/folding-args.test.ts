import { describe, expect, it } from 'vitest';
import { lexFoldingArgs, parseFoldingArgs, type LexResult } from '../folding-args';

// Lex the arguments of `{% folding<args>%}` written as one tag.
const lex = (args: string): LexResult => lexFoldingArgs(`{% folding${args}%}`, '{% folding'.length);
const parse = (args: string) => {
  const result = lex(args);
  if (result.type === 'Err') throw new Error(result.error);
  return parseFoldingArgs(result.params);
};
const texts = (args: string) => {
  const result = lex(args);
  if (result.type === 'Err') throw new Error(result.error);
  return result.params.map((param) => param.map((f) => f.text).join(''));
};

describe('lexFoldingArgs', () => {
  it('returns the index just past %}', () => {
    const src = '{% folding blue :: t %}rest';
    const result = lexFoldingArgs(src, '{% folding'.length);
    expect(result).toMatchObject({ type: 'Ok', end: src.indexOf('rest') });
  });

  it('collapses runs of ASCII space, tab, newline, CR and NBSP into one separator', () => {
    expect(texts(' a \t\r\n\u00a0 b ')).toEqual(['a', 'b']);
  });

  it('keeps U+3000 inside parameters but trims it at both ends', () => {
    expect(texts(' \u3000a\u3000b\u3000 ')).toEqual(['a\u3000b']);
  });

  it('opens a quote only at the start of a parameter or after an opener character', () => {
    expect(texts(' "a b" ')).toEqual(['a b']);
    expect(texts(' x:"a b" ')).toEqual(['x:a b']);
    expect(texts(' x="a b" ')).toEqual(['x=a b']);
    expect(texts(' 他說"好" ')).toEqual(['他說"好"']);
  });

  it('treats single quotes and curly quotes as literal text', () => {
    expect(texts(" 'a b' ")).toEqual(["'a", "b'"]);
    expect(texts(' “a b” ')).toEqual(['“a', 'b”']);
  });

  it('keeps separators, =, whitespace and %} literal inside quotes', () => {
    expect(texts(' "a :: b, c=d %} e" ')).toEqual(['a :: b, c=d %} e']);
  });

  it('keeps backslashes literal outside quotes', () => {
    expect(texts(' a\\"b \\n ')).toEqual(['a\\"b', '\\n']);
  });

  it('decodes backslash escapes inside quotes', () => {
    expect(texts(' "a\\nb\\tc\\rd\\"e\\\\f\\xg" ')).toEqual(['a\nb\tc\rd"e\\fxg']);
  });

  it('drops the single - glued to -%}', () => {
    expect(texts(' blue :: t -')).toEqual(['blue', '::', 't']);
    expect(texts(' blue :: t-')).toEqual(['blue', '::', 't']);
    expect(texts(' blue :: t--')).toEqual(['blue', '::', 't-']);
  });

  it('keeps words starting with r/ as-is', () => {
    expect(texts(' :: r/abc/ r/x ')).toEqual(['::', 'r/abc/', 'r/x']);
  });

  it('reports a quote opened at a parameter start that never closes', () => {
    expect(lexFoldingArgs('{% folding "blue :: t %}\nbody', 10)).toEqual({
      type: 'Err',
      error: 'unterminated-quote',
    });
  });

  it('reports a tag without %}', () => {
    expect(lexFoldingArgs('{% folding blue :: t', 10)).toEqual({
      type: 'Err',
      error: 'unterminated-tag',
    });
  });
});

describe('parseFoldingArgs — legacy syntax', () => {
  it('splits on :: into color and title', () => {
    expect(parse(' blue :: 折疊區塊標題 ')).toEqual({
      color: 'blue',
      title: '折疊區塊標題',
      open: false,
      warnings: [],
    });
  });

  it('accepts ::title without a space', () => {
    expect(parse(' red ::標題 ')).toMatchObject({ color: 'red', title: '標題' });
  });

  it('keeps commas in the title when :: is present', () => {
    expect(parse(' blue :: 練習一解答, 含補充說明 ')).toMatchObject({
      title: '練習一解答, 含補充說明',
    });
  });

  it('falls back to , when there is no :: outside quotes', () => {
    expect(parse(' blue, 標題 ')).toMatchObject({ color: 'blue', title: '標題', warnings: [] });
    expect(parse(' blue, "a :: b" ')).toMatchObject({ color: 'blue', title: 'a :: b' });
  });

  it('discards the third segment onwards with a warning', () => {
    expect(parse(' blue, a, b, c ')).toMatchObject({
      title: 'a',
      warnings: ['extra segments discarded: b,c'],
    });
    expect(parse(' blue :: a :: b ')).toMatchObject({
      title: 'a',
      warnings: ['extra segments discarded: b'],
    });
  });

  it('protects separators inside quotes', () => {
    expect(parse(' blue, "a, b" ')).toMatchObject({ title: 'a, b', warnings: [] });
  });

  it('puts everything in the color field when no separator exists', () => {
    expect(parse(' blue ')).toEqual({
      color: 'blue',
      title: '',
      open: false,
      warnings: ['missing separator ("::" or ","); title is empty'],
    });
  });

  it('treats ":: title" as no color', () => {
    expect(parse(' :: 標題 ')).toMatchObject({ color: 'default', title: '標題', warnings: [] });
  });

  it('joins unquoted words with one space and keeps quoted spacing', () => {
    expect(parse(' :: a   b ')).toMatchObject({ title: 'a b' });
    expect(parse(' :: "a   b" ')).toMatchObject({ title: 'a   b' });
    expect(parse(' :: " a " ')).toMatchObject({ title: 'a' });
  });

  it('treats U+3000 as content at segment ends and between color words', () => {
    expect(parse(' blue\u3000:: t ')).toEqual({
      color: 'default',
      title: 't',
      open: false,
      warnings: ['unknown color: blue\u3000'],
    });
    expect(parse(' :: \u3000標題 ')).toMatchObject({ title: '\u3000標題', warnings: [] });
  });

  it('does not support open: it is just an unknown color word', () => {
    expect(parse(' blue open :: t ')).toEqual({
      color: 'blue',
      title: 't',
      open: false,
      warnings: ['unknown color: open'],
    });
  });

  it('keeps quoted title= literal and stays in legacy mode', () => {
    expect(parse(' blue :: "title=x" ')).toMatchObject({ color: 'blue', title: 'title=x' });
  });

  it('outputs title HTML untouched', () => {
    expect(parse(' :: <b>粗</b> & <i>x</i> ')).toMatchObject({ title: '<b>粗</b> & <i>x</i>' });
  });

  it('warns on an empty title', () => {
    expect(parse(' blue :: ')).toMatchObject({ title: '', warnings: ['empty title'] });
  });
});

describe('parseFoldingArgs — named syntax', () => {
  it('reads title, class and open', () => {
    expect(parse(' title="多個 字詞 標題" class="blue" open=true ')).toEqual({
      color: 'blue',
      title: '多個 字詞 標題',
      open: true,
      warnings: [],
    });
  });

  it('reads colors from class, classes and style', () => {
    expect(parse(' title=t classes="green" ')).toMatchObject({ color: 'green' });
    expect(parse(' title=t style=red ')).toMatchObject({ color: 'red' });
  });

  it('accepts open values 1/true/yes/on in any case and nothing else', () => {
    for (const value of ['1', 'true', 'YES', 'On']) {
      expect(parse(` title=t open=${value} `).open).toBe(true);
    }
    for (const value of ['0', 'false', 'no', 'off', 'open']) {
      expect(parse(` title=t open=${value} `).open).toBe(false);
    }
  });

  it('falls back to positional parameters joined by one space when title is empty', () => {
    expect(parse(' class=blue 位置 參數 ')).toMatchObject({ title: '位置 參數', warnings: [] });
  });

  it('ignores positional parameters with a warning when title is set', () => {
    expect(parse(' title=t extra words ')).toMatchObject({
      title: 't',
      warnings: ['positional arguments ignored because title= is set: extra words'],
    });
  });

  it('ignores unknown keys and keeps the last duplicate, with warnings', () => {
    expect(parse(' title=a foo=bar title=b ')).toMatchObject({
      title: 'b',
      warnings: ['unknown key ignored: foo', 'duplicate key, last one wins: title'],
    });
  });

  it('protects = inside quotes', () => {
    expect(parse(' "title=x" :: y ')).toMatchObject({ color: 'default', title: 'y' });
  });
});

describe('parseFoldingArgs — colors', () => {
  it.each([
    'yellow',
    'blue',
    'green',
    'red',
    'orange',
    'pink',
    'cyan',
    'white',
    'black',
    'gray',
    'purple',
  ])('accepts %s', (color) => {
    expect(parse(` ${color} :: t `)).toMatchObject({ color, warnings: [] });
  });

  it('uses default and warns on unknown words', () => {
    expect(parse(' teal :: t ')).toMatchObject({
      color: 'default',
      warnings: ['unknown color: teal'],
    });
    expect(parse(' Blue :: t ')).toMatchObject({ color: 'default' });
  });

  it('picks the later color in the palette order when several are given', () => {
    expect(parse(' purple yellow :: t ')).toMatchObject({
      color: 'purple',
      warnings: ['multiple colors (purple, yellow); using purple'],
    });
  });
});
