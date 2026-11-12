# Local fork of `@quartz-community/explorer` 1.0.0

Copied from `node_modules/@quartz-community/explorer` (source maps removed) and
loaded from `quartz.config.yaml` as `source: "./plugins/explorer"`.

## Change

The explorer reads `contentIndex.json` as `e.content || e` (to accept a
`{content: {...}}` wrapper). This site has a page whose slug is `content`
(`site-pages/content.md`), so `e.content` was that page's entry: the explorer
built its tree from the 6 fields of one page, failed with
`Error building file trie: TypeError: … e.slug is undefined`, and rendered
nothing (empty ☰ menu on phones, where the explorer is shown).

In `dist/index.js` **and** `dist/components/index.js`:

```js
let D=e.content||e,
// became
let D=e.content&&typeof e.content.slug!="string"?e.content:e,
```

(a page entry has a string `slug`; a wrapper doesn't).

## Upgrading

If a new version still has `e.content||e`, copy it from npm into this folder,
delete the `.map` files and re-apply the change; otherwise go back to
`source: "@quartz-community/explorer"` in `quartz.config.yaml`.
