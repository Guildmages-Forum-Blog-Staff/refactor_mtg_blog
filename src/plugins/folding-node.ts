/**
 * mdast node type of a folding block's content (rendered as
 * `<div class="folding-body">`). Kept in a module of its own so plugins that
 * need the name, such as remark-notel, do not load the folding parser.
 */
export const FOLDING_BODY_TYPE = 'foldingBody';
