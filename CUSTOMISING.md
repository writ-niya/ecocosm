# Editing Understory

Everything you write lives in `content/`. Everything about how it looks
lives in the config blocks at the top of the script in `index.html`.

---

## Where each thing lives

| What | File |
|---|---|
| An entry (a leaf) | `content/notes/<name>.md` |
| A region's own page | `content/regions/<region-id>.md` |
| Title screen text | `content/pages/home.md` |
| The Keeper | `content/pages/about.md` |
| Now / Colophon | `content/pages/now.md`, `content/pages/colophon.md` |
| Published work | `content/writing/<name>.md` |
| Which entries exist | `content/manifest.json` |

---

## Adding an entry

1. Copy any file in `content/notes/` and rename it.
2. Change the block at the top — title, stage, collection, tags.
3. Write below it.
4. Add the filename (no `.md`) to the `notes` list in `content/manifest.json`.

```
---
title: The Nutmeg Argument
stage: budding          # seedling · budding · evergreen
collection: fracture    # must match a region id
tags: [ghosh, extraction]
updated: 2026-08-18
---

Your writing starts here.
```

## Adding a region

Regions are defined in `index.html`, in `CONFIG.collections`. Copy a block:

```js
{ id:'archive', name:'The Archive', color:'#7C8FA8', num:'V',
  desc:'One line describing it.' },
```

Then, optionally, give it a page of its own at
`content/regions/archive.md`. No file means the region still works —
it just shows its description and its entries.

---

## Blocks — the same in entries and regions

Anywhere you can write, you can drop a block. They work identically in
an entry, in a region page, on the title screen, and on About.

**Picture beside text**, alternating sides automatically:

```
::: spread | assets/art/river.jpg | a caption
# A Heading
^ a small label above the heading
The words that sit beside the picture.
:::
```

Use `spread` again and the picture moves to the other side. `spread-left`
or `spread-right` forces a side.

**Two pictures with words between them**

```
::: arch | assets/art/left.jpg | assets/art/right.jpg
# A Heading
The words in the middle.
:::
```

**A run of small numbered plates**

```
::: cluster | assets/art/a.jpg | assets/art/b.jpg | assets/art/c.jpg
# A Heading
An optional line underneath.
:::
```

**A wide picture with the words over it**

```
::: band | assets/art/wide.jpg
# A Heading
The words over the picture.
:::
```

**A bordered box with a header bar** — add `accent` to colour the bar

```
::: entry accent | Property
The words inside the box.
:::
```

**A two-column table** — one row per line, split with `::`

```
::: table | Term | Meaning
seedling :: a thought not yet sat with
budding :: taking a shape, still moving
:::
```

**A numbered list that numbers itself**

```
::: omens
# Omens
- The first thing.
- The second thing.
:::
```

### Moving and adding blocks

- **Move** a block by cutting everything from `:::` to `:::` and pasting
  it elsewhere.
- **Add** one by copying an existing block and changing it.
- **Leave a picture path out** and you get a marked empty slot, so you can
  lay a page out before you have the pictures.

Inside a block, `# Something` on the first line becomes the heading and
`^ Something` on the next becomes the small label above it. Everything
after is ordinary writing.

---

## Ordinary marks, anywhere

```
# A major heading          **bold**        *italic*
## A softer heading        `code`          [[Another Entry]]
- a bullet                 > a pulled quote
- [x] a finished thing     ---  a divider
- [ ] a waiting thing      ![caption](url)  a picture
```

---

## Art

Put images in `assets/art/`, then list them in the `ART` block at the top
of the script:

```js
var ART = {
  title:'assets/art/title.jpg',
  regions:{ 'myth-land':'assets/art/grove.jpg' },
  sigils:{ 'myth-land':'assets/art/grove-sigil.png' },
  portraits:{ 'territory-map':'assets/art/territory.jpg' },
  keeper:'assets/art/me.jpg'
};
```

Sizes are in `assets/art/README.txt`. Anything left empty keeps its
drawn fallback.

---

## Colours and fonts

In the `THEME` block. Copy a palette, give it a new `id`, change the
colours — it appears as a new dot in the top bar. Fonts are three names
from Google Fonts.

---

## Publishing and editing afterwards

The site is plain files, so hosting is free on GitHub Pages or Netlify.
After it is live you can edit in three ways:

1. **GitHub's web editor** — open a file in the browser, click the pencil,
   type, save. The site rebuilds itself. No setup.
2. **On your computer** — edit the files in any editor (Obsidian
   understands the `[[links]]` already), then push.
3. **Decap CMS** — adds a login and a writing interface at `/admin`.
   Needs Netlify and some setup; only worth it if editing files bothers you.
