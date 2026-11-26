# My Personal Website

A simple personal website made with plain HTML, CSS and JavaScript.
There is nothing to install and nothing to build. It works offline, and it
can be put online for free with GitHub and Netlify.

```
personal-website/
├── index.html      ← all the words on the site live here
├── styles.css      ← colors, fonts and layout
├── script.js       ← mobile menu, scroll animations, video player
├── videos/         ← UP Bike Share videos (MP4)
├── README.md       ← this guide
└── images/         ← your photo, project pictures, icon
    ├── profile.jpg
    ├── surevax.jpg
    ├── up-bike-share.jpg
    ├── marine-conservation.jpg
    ├── og-image.jpg  (preview picture shown when your link is shared)
    └── favicon.svg   (little icon in the browser tab)
```

---

## 1. Open the site on your computer

1. Open the `personal-website` folder in your file explorer
   (Finder on Mac, File Explorer on Windows).
2. Double-click **`index.html`**.
3. It opens in your web browser. That's it!

After you change a file, save it and press **Refresh** in the browser
(`Ctrl + R` on Windows, `Cmd + R` on Mac) to see the change.

> Tip: to edit files, use a free text editor such as
> [Visual Studio Code](https://code.visualstudio.com/). Avoid Word or
> TextEdit's "rich text" mode, which can break the code.

---

## 2. Put the project on GitHub

You only need to do this once. Pick **Option A** (no command line) or
**Option B** (command line).

### Option A: using the GitHub website (easiest)

1. Sign in at [github.com](https://github.com).
2. Click the **+** in the top-right corner, then **New repository**.
3. Give it a name, for example `personal-website`. Leave it **Public**
   (Netlify works with private repos too). Do **not** tick "Add a README"
   since you already have one. Click **Create repository**.
4. On the next page, click the link **"uploading an existing file"**.
5. Open your `personal-website` folder, select **everything inside it**
   (`index.html`, `styles.css`, `script.js`, `README.md` and the `images`
   folder) and drag it onto the GitHub page.
   Make sure `index.html` ends up at the top level, not inside another folder.
6. Click **Commit changes**.

To update the site later: open the repository on GitHub, click
**Add file → Upload files**, drag in the changed files, and click
**Commit changes**. GitHub replaces the old versions.

### Option B: using Git on the command line

1. Install Git from [git-scm.com](https://git-scm.com/downloads) if you
   don't have it.
2. Create an empty repository on GitHub (steps 1–3 of Option A).
3. Open a terminal **inside the `personal-website` folder** and run these
   lines one at a time (replace `YOUR-USERNAME`):

   ```bash
   git init
   git add .
   git commit -m "First version of my website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/personal-website.git
   git push -u origin main
   ```

To update the site later:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 3. Put the site online with Netlify

Netlify will publish your GitHub repository as a real website, and will
update it automatically every time you push a change to GitHub.

1. Go to [netlify.com](https://www.netlify.com) and click **Sign up**.
   Choosing **Sign up with GitHub** is easiest.
2. In your Netlify dashboard, click **Add new project**, then
   **Import an existing project**.
3. Choose **GitHub**. If asked, authorize Netlify and allow it to see your
   `personal-website` repository.
4. Pick the `personal-website` repository.
5. On the settings screen:
   - **Branch to deploy:** `main`
   - **Base directory:** leave empty
   - **Build command:** leave **empty**
   - **Publish directory:** leave empty (or type `.`), which means the
     project root, where `index.html` is
6. Click **Deploy**. After a few seconds you get an address like
   `https://random-name-123.netlify.app`. Your site is live!
7. Optional: under **Project configuration → Change project name** (or
   **Domain management**) you can pick a nicer name or connect your own domain.

From now on, **every push to GitHub redeploys the site automatically**.
No extra steps.

### One last step after your first deploy

Open `index.html` and replace every `https://your-site.netlify.app` (near
the top, in the `<head>`) with your real Netlify address. Sites like
LinkedIn and Slack need these full addresses to show your preview picture
when someone shares your link. Then push the change.

---

## 4. Add your own text and images

### Text

Everything you see on the page is in **`index.html`**. Open it and look for
comments that say **`EDIT ME`**. They look like this:

```html
<!-- EDIT ME: your name -->
```

Change the text right below each one. The sections are, in order:

| What | Where to look in `index.html` |
|---|---|
| Browser tab title, search & sharing description | `EDIT ME: SEO & SOCIAL SHARING` at the top |
| Initials in the top-left | `EDIT ME: your initials` |
| Name and tagline | `HERO` section |
| Bio and skills | `ABOUT` section |
| Project cards | `PROJECTS` section. Copy a whole `<article> … </article>` block to add a project, delete one to remove it |
| Jobs and education | `EXPERIENCE` section. Each `<li> … </li>` is one entry |
| Email and social links | `CONTACT` section. Change the email in **both** places on the `mailto:` line |
| Name in the footer | `EDIT ME: your name` at the bottom |

Only change the words **between** the tags, for example the
`Your Name` in `<h1 id="hero-title">Your Name</h1>`. Keep the `<` `>` parts.

### Images

Look for comments that say **`SWAP IMAGE`** in `index.html`.

1. Copy your picture into the `images` folder. Use simple file names with
   no spaces, like `me.jpg` or `weather-app.png`.
2. In `index.html`, change the `src="images/…"` to your file name.
3. Update the `alt="…"` text to describe the picture for people using
   screen readers, e.g. `alt="Miguel smiling in front of a bookshelf"`.

| Image | Suggested size |
|---|---|
| Profile photo (`profile.jpg`) | Square, at least 600 × 600 px. It is shown as a circle. Already your photo; replace the file to change it |
| Project images (`surevax.jpg`, `up-bike-share.jpg`, `marine-conservation.jpg`) | 16:10 shape, e.g. 1200 × 750 px |
| Sharing preview (`og-image.jpg`) | Exactly 1200 × 630 px, PNG or JPG |
| Tab icon (`favicon.svg`) | Square. Edit the letters in the file, or swap in your own `.svg`/`.png` and update the `<link rel="icon">` line |

Keep photos under about 500 KB so the site loads fast. Free tools like
[Squoosh](https://squoosh.app) can shrink them.

### Videos

Videos live in the `videos` folder and are listed under **Watch** on the
UP Bike Share card in `index.html` (look for `EDIT ME: videos`). To add
one, put the `.mp4` in `videos`, a still image for it in `images`, and
copy one of the `<li> … </li>` lines. Keep each video under 100 MB, since
GitHub refuses larger files.

### Colors and fonts

Open **`styles.css`**. The colors are at the very top under `COLORS`: the
first block is the light theme and the second block is used automatically
when the visitor's device is in dark mode. Change the `#` color codes to
re-theme the whole site.

The site uses fonts already built into every computer and phone, so it
works offline and loads instantly. If you'd like a custom font, put the
`.woff2` file in a new `fonts` folder and ask for help adding it.

---

## Features included

- Works by double-clicking `index.html`, offline, with no build step
- Mobile-first, responsive layout with a mobile menu
- Automatic light and dark mode
- Accessible: skip link, keyboard navigation, focus outlines, alt text,
  good color contrast, and reduced motion for people who prefer it
- Smooth scrolling, gentle fade-in animations, project cards
- Search engine and social sharing tags (title, description, Open Graph)
