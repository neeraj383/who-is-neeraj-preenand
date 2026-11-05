# Who is Neeraj Preenand?

A personal resume website for Neeraj Preenand, built with HTML and CSS (plus a tiny bit of JavaScript for the search box).

## Files

- `index.html` – the page content
- `style.css` – all the styling (fonts, colours, layout, animations)
- `script.js` – makes the "Neeraj Search" box jump to the section you type
- `*.jpg`, `zoomies.mp4` – photos and the video

## How the Neeraj Search works

Each "version" of Neeraj is a section with its own ID: `#fun`, `#neeraj`, `#lockedin` and `#physical`.
The CSS rule `.result:target` only shows the section whose ID is in the URL, so clicking a chip (or searching) reveals that section.

## Updating the site

- **Add a photo:** upload the image to the repo, then copy one of the `<figure class="polaroid">` blocks in `index.html` and change the `src` and caption.
- **Add an award or project:** add a new `<li>` inside the right card in the "serious stuff" section.
- **Change colours:** edit the variables at the top of `style.css` (`--blue`, `--purple`, `--green`, `--black`).
