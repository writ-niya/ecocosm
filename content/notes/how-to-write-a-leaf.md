---
title: How to Write a Leaf
stage: evergreen
collection: field
tags: [guide, formatting]
updated: 2026-08-18
banner:
bannercaption: a caption sits beneath the picture, in script
---

Every note is a plain text file in `content/notes/`. The block at the very top — between the two lines of dashes — is the frontmatter, where the title, stage, folder, and tags live. Everything after it is what you see here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

The first letter of the first paragraph becomes an illuminated capital automatically.

# Ordinary Writing

Type one hash for a major heading, two for the flowing script heading below. Write **bold** with two asterisks, *italic* with one, and link to another note with double brackets like [[Territory Map]].

## A flourish heading

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

- Begin a line with a dash for a botanical bullet
- Excepteur sint occaecat cupidatat non proident
- [x] a finished thing, which strikes itself through
- [ ] a thing still waiting

> A line beginning with a bracket becomes a pulled quote

---

::: spread | assets/one.jpg | a caption for the picture
# A Spread
^ picture on the left
This is a spread block. The picture sits on one side and the words on the other. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

Write as many paragraphs as you like inside it — they all stay beside the picture.
:::

::: spread | assets/two.jpg | another caption
# It Alternates
^ picture on the right
Use `spread` again and the picture automatically moves to the other side. Keep adding them and they keep alternating down the page, the way the reference designs do.

If you want to force a side instead, write `spread-left` or `spread-right`.
:::

::: arch | assets/left.jpg | assets/right.jpg
# Between Two Arches
^ the almanac arrangement
Two arched pictures with the words held between them. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
:::

::: cluster | assets/a.jpg | assets/b.jpg | assets/c.jpg | assets/d.jpg
# A Scattered Cluster
Small plates sitting at slightly different heights, each numbered. Good for fragments, references, or a run of images that belong together.
:::

::: band dark | assets/wide.jpg
# Words Over a Picture
^ a full width band
The picture runs the full width and the words lay over it. Add `dark` to any block to invert it onto a dark panel, like the lower half of the almanac design.
:::

::: spread
# An Empty Slot
Leave the picture path out entirely and the block shows a marked empty frame, so you can build a page before you have the pictures for it.
:::

## Bestiary blocks

Three more blocks, for when a note needs the density of a reference page.

::: entry accent | Property
# Property
A bordered box with a solid header bar. Write `::: entry | Header name` and the
words inside become the body. Add the word `accent` to colour the bar.
:::

::: table | Term | Meaning
# A Small Table
seedling :: a thought not yet sat with
budding :: taking a shape, still moving
evergreen :: settled enough to build on
:::

Write each row as `left :: right`. The two words after the pipe become column headings.

::: omens
# Omens
- Begin each line with a dash. They number themselves, in the manner of a field guide.
- Add the word `two` after `omens` to set them in two columns.
- Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
:::

## Adding your own

Copy any block above, change the picture paths and the words, and move the whole block up or down by cutting and pasting it. Add as many as you want — there is no limit to how many picture slots a page can hold.

Leave a picture path empty and you get a marked empty slot, so you can lay out a page before you have the pictures.
