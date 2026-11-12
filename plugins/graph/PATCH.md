# Local fork of `@quartz-community/graph` 1.0.0

Copied from `node_modules/@quartz-community/graph` (source maps removed) and
loaded from `quartz.config.yaml` as `source: "./plugins/graph"`.

## Changes

In `dist/index.js` **and** `dist/components/index.js`, the node colour function

```js
function $e(i){var l=i.id===g;return l?Ie:K.has(i.id)||i.id.startsWith("tags/")?Qu:ue}
```

became

```js
function $e(i){var l=i.id===g,b=l?Ie:K.has(i.id)||i.id.startsWith("tags/")?Qu:ue;
  return typeof window.__graphNodeColor==="function"&&window.__graphNodeColor(i,{current:l,visited:K.has(i.id)})||b}
```

so the site can colour nodes (`window.__graphNodeColor` lives in
`quartz/static/site.js` §5). Returning a falsy value keeps the plugin's colour.

Second change, same two files: the global graph (depth -1) added every page of
contentIndex.json, including the tag pages (`tags/…`), even with
`showTags: false`. Now they are skipped unless `showTags` (`Re`) is on:

```js
Ju.forEach(function(i){tu.add(i)})
// became
Ju.forEach(function(i){i.startsWith("tags/")&&!Re||tu.add(i)})
```

## Upgrading

Copy the new version from npm into this folder, delete the `.map` files, and
re-apply the replacement above (the minified names `$e`, `Ie`, `Qu`, `ue`, `K`, `g`
may change: search for `startsWith("tags/")?` near `getPropertyValue("--secondary")`,
and for `Ju.forEach(function(i){tu.add(i)})` for the second change).
