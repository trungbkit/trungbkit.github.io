# trungbkit.github.io

My personal page: **https://trungbkit.github.io**

The page is laid out like a `git log --graph`, with one commit for each project:

| Project | What it is |
| --- | --- |
| [Karen](https://github.com/trungbkit/git-karen) | A local-first desktop Git client (Tauri 2, Rust, React) |
| [Smart Commit](https://github.com/trungbkit/smart-commit) | One command from a dirty working tree to open pull requests, with AI-written commit messages |
| [VietNôm](https://viet-nom.vercel.app/) | Write Vietnamese in chữ Nôm, plus a Hán-Nôm dictionary and learning games |
| Resty | Coming soon |

## Running locally

There is no build step. It's plain HTML, CSS and a little JavaScript.

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

```
index.html         page content (English)
assets/style.css   design tokens, graph layout, light and dark themes
assets/main.js     theme toggle, EN/VI switch, latest Karen release tag
favicon.svg
```

To add a project, copy one of the `<article class="row project">` blocks in `index.html`, give it a lane colour with `style="--lane: …"`, and add its Vietnamese text to the `vi` dictionary in `assets/main.js` under the same `data-i18n` keys.
