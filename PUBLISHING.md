# Publishing Understory — start to finish

## First: which route?

Three ways to get this online. Pick one, ignore the others.

| | **A · GitHub only** | **B · GitHub + Netlify** | **C · Netlify only** |
|---|---|---|---|
| Who hosts it | GitHub Pages | Netlify | Netlify |
| Accounts needed | GitHub, DecapBridge | GitHub, Netlify, DecapBridge | Netlify |
| Time | ~35 min | ~45 min | **2 min** |
| `/admin` writing interface | ✓ | ✓ | ✗ |
| Updating | edit, republishes itself | edit, republishes itself | re-drag the folder |
| Address | `you.github.io/understory` | `understory.netlify.app` | `random-name.netlify.app` |
| Custom domain | ✓ free | ✓ free | ✓ free |

**Route C is the two-minute one.** Go to netlify.com, sign up, drag your
`understory-site` folder onto the dashboard. Live. No repository, no build,
no CMS. Do this today regardless — seeing it at a real address is worth the
two minutes, and it does not stop you doing A or B afterwards.

**Route A removes Netlify entirely.** GitHub hosts the site, GitHub Actions
rebuilds the note list, DecapBridge handles the login. Everything in one
account. This is the answer if you would rather not juggle two services.

**Route B is what I originally wrote.** Netlify's deploy previews and instant
rollbacks are genuinely nicer, and its build logs are easier to read when
something goes wrong. But it is one more account.

**My suggestion:** do C now. Then A when you want the writing interface,
unless you specifically want Netlify's conveniences.

Parts 1 and 2 below are shared by A and B. Then follow **either** Part 3A
(GitHub Pages) **or** Part 3B (Netlify), not both.

---

Everything below assumes you have never used GitHub or Netlify. Follow it in
order. Total time: about an hour, most of it waiting for things to load.

**What you end up with**

- Your site live at a real address, free forever
- A writing interface at `yoursite.com/admin` — log in, type, publish
- The ability to nudge the design visually and tell me what to bake in

**What it costs.** Nothing. GitHub, Netlify, DecapBridge and the browser
extension all have free tiers that comfortably cover a personal site. Only a
custom domain costs money (about €10–15 a year), and that step is optional.

---

# Part 1 · Get the files ready (10 minutes)

### 1.1 Unzip the site

Download `understory-site.zip` and unzip it. You should have a folder
containing:

```
understory-site/
├── index.html          the site itself
├── build.js            keeps the note list up to date
├── netlify.toml        tells Netlify what to run
├── admin/              the writing interface
│   ├── index.html
│   └── config.yml
├── assets/art/         your pictures go here
├── content/            everything you write
└── CUSTOMISING.md      reference for later
```

### 1.2 Decide your site name

Pick something short and lowercase — this becomes part of your web address
and your repository name. For example `understory`. Write it down; you will
type it a few times.

---

# Part 2 · GitHub (15 minutes)

GitHub stores your files. Netlify watches GitHub and publishes whatever is
there. You never have to learn Git commands.

### 2.1 Make an account

Go to **github.com** → *Sign up*. Use an email you check. Verify it.

### 2.2 Create the repository

1. Click the **+** in the top right → **New repository**
2. **Repository name:** `understory`
3. **Description:** optional
4. Choose **Public**
   *(Private also works on Netlify's free tier, but public is simpler and
   means the site is properly indexed.)*
5. Do **not** tick "Add a README" or any other file — you want it empty
6. Click **Create repository**

### 2.3 Upload the site

On the empty repository page, click **uploading an existing file**.

Now the important bit: **open your `understory-site` folder, select
everything inside it, and drag those files in — not the folder itself.**
GitHub should end up showing `index.html`, `build.js`, `netlify.toml`,
`admin`, `assets`, `content`, `CUSTOMISING.md` at the top level.

If you accidentally drag the folder, you will see `understory-site/` as a
single entry. Delete it and try again — the site will not work nested.

Scroll down, type `first upload` in the message box, click **Commit changes**.

### 2.4 Check it looks right

Your repository page should now list `index.html` at the top level. Click
into `content/notes/` and confirm you see the `.md` files. Good.

---

# Part 3A · GitHub Pages — no Netlify (10 minutes)

*Use this **or** Part 3B, not both.*

Your repository already contains `.github/workflows/publish.yml`, which tells
GitHub to rebuild the note list and publish the site every time anything
changes.

### 3A.1 Turn Pages on

1. In your repository, click **Settings** (top row)
2. In the left sidebar, click **Pages**
3. Under **Source**, choose **GitHub Actions** from the dropdown
   *(not "Deploy from a branch" — that skips the build step and your note
   list will go stale)*

That is the whole setup. There is nothing to save; the dropdown applies
immediately.

### 3A.2 Run it

Click the **Actions** tab. You should see a run called **Publish** either in
progress or already finished. If nothing is listed, click **Publish** in the
left sidebar → **Run workflow** → **Run workflow**.

A green tick means it worked. Click the run, open the **deploy** job, and the
address is printed there — `https://yourname.github.io/understory/`.

### 3A.3 Look at it

Open that address. Title screen, region panels, click one — same checks as
always.

**From now on**, every change to the repository republishes the site
automatically, in about a minute.

### 3A.4 One thing to delete

You have both `netlify.toml` and the GitHub workflow in the folder. Harmless,
but tidier to delete the one you are not using. In GitHub, open
`netlify.toml` → bin icon → **Commit changes**.

---

# Part 3B · Netlify (10 minutes)

*Use this **or** Part 3A, not both.*


### 3B.1 Make an account

Go to **netlify.com** → *Sign up* → **Sign up with GitHub**. Authorise it.
Signing up with GitHub saves a linking step later.

### 3B.2 Connect the repository

1. In the Netlify dashboard, click **Add new site** → **Import an existing
   project**
2. Choose **GitHub**. Authorise Netlify if it asks
3. Find and click `understory` in the list
   *(If it is not listed, click "Configure the Netlify app on GitHub" and
   grant access to the repository, then come back.)*

### 3B.3 Build settings

Netlify will show a settings screen. Because `netlify.toml` is in your
repository, it should already have filled in:

- **Build command:** `node build.js`
- **Publish directory:** `.`

If those boxes are empty, type them in yourself. Leave everything else alone.

Click **Deploy**.

### 3B.4 Wait, then look

The deploy takes 20–60 seconds. When it says **Published**, click the address
at the top — something like `resonant-parfait-8a3f21.netlify.app`.

**Your site is live.** Check the title screen loads, the region panels appear,
and clicking one opens it. If it works, the hardest part is done.

### 3B.5 Give it a decent name

Site configuration → **Change site name** → type `understory` (or whatever is
free). Your address becomes `understory.netlify.app`.

---

# Part 4 · The writing interface (20 minutes)

This is where the setup guides online will mislead you, so read this bit
carefully.

**The situation as of 2026:** Decap CMS used to authenticate through Netlify
Identity and Git Gateway. Netlify Identity still exists, but **Git Gateway is
deprecated** — which is the half Decap actually needs. Setting it up today
means building on something being retired.

**DecapBridge** is a free service built specifically to replace it. It is what
you should use. It also means you can log in with Google rather than managing
another password.

### 4.1 Register the site with DecapBridge

1. Go to **decapbridge.com** and sign up (Google or email)
2. Click **Create site**
3. **Site name:** Understory
4. **CMS URL:** your live address with `/admin/` on the end —
   `https://yourname.github.io/understory/admin/` for Route A, or
   `https://understory.netlify.app/admin/` for Route B.
   *Keep the trailing slash.*
5. **Link your Git repository** — connect GitHub and pick `understory`
6. Click **Create site**

DecapBridge now shows you a generated **`backend:` block**. Copy it — that is
the piece you need.

### 4.2 Paste it into the config

1. In GitHub, open your repository → `admin` → `config.yml`
2. Click the **pencil** icon to edit
3. At the very top you will see:

```yaml
backend:
  name: git-gateway            # CHANGE ME — DecapBridge will give you this block
  repo: your-name/understory   # CHANGE ME — your GitHub user / repo name
  branch: main
```

4. Delete those four lines and paste the DecapBridge block in their place
5. Scroll down, click **Commit changes**

The site republishes automatically — Netlify on Route B, GitHub Actions on
Route A. Give it a minute.

### 4.3 Log in and try it

Go to your site's address with `/admin/` on the end, and log in with your
DecapBridge account.

You should see four sections in the sidebar: **Entries**, **Region pages**,
**Chronicles**, **Pages**.

Test it properly:

1. Click **Entries** → **New Entry**
2. Fill in a title, pick a stage and a region
3. Write a couple of sentences
4. Click **Publish**

Wait about a minute, then reload your live site. Your new entry should appear
on the title screen and in the codex.

**Why this works without you touching anything:** the CMS commits a new `.md`
file to GitHub → your host notices the commit → it runs `build.js` → that
rebuilds `content/manifest.json` from whatever files are in the folder → the
site reads the new manifest. You never edit the manifest by hand. This is the
same on both routes; only the thing running the script differs.

### 4.4 Using blocks in the CMS

The markdown editor has a **rich text** and a **markdown** tab. For blocks,
switch to the **markdown** tab and type them as normal:

```
::: spread | /assets/art/river.jpg | a caption
# A Heading
^ a small label
The words beside the picture.
:::
```

Pictures uploaded through the CMS land in `assets/art/` and get a path
starting with `/assets/art/` — paste that path into the block.

---

# Part 5 · Visual CSS editor (10 minutes)

This is for adjusting the *design* — spacing, sizes, colours — which lives in
`index.html`, not in the CMS.

### 5.1 Install it

Chrome or Edge → Chrome Web Store → search **Visual CSS Editor** → *Add to
Chrome*. (**Inspecta** is a good alternative and is actively developed;
**VisBug** is the classic but has not had a release since 2020.)

### 5.2 Use it

1. Open your live site
2. Click the extension icon
3. Click any element — a panel opens with its colours, spacing, size, font
4. Change things and watch the page update

### 5.3 The important caveat

**These edits are not saved.** They live in your browser and vanish on
reload. The extension changes how the page *looks right now*, not the file.

So the workflow is:

1. Push things around until it looks right
2. Either **export the CSS** the extension offers, or simply write down what
   you changed — "region panels 20% shorter, more space above the title,
   paper slightly warmer"
3. Send it to me and I will put it into `index.html` properly so it persists

That is genuinely the fastest route. Guessing at numbers in code is slow;
dragging them and reporting back is quick.

---

# Part 6 · A custom domain (optional, 15 minutes)

Skip this if `understory.netlify.app` is fine for now. You can add it later
without redoing anything.

1. Buy a domain at **porkbun.com** or **namecheap.com** (~€10–15/year)
2. In Netlify: Domain management → **Add a domain** → type it
3. Netlify shows you either nameservers or DNS records
4. In your registrar's dashboard, enter what Netlify showed you
5. Wait — anywhere from 10 minutes to a few hours
6. Netlify issues an HTTPS certificate automatically once DNS resolves

**Then update DecapBridge:** change your CMS URL to the new domain, or the
login will fail.

---

# Part 7 · Living with it

### Adding an entry
`yoursite.com/admin` → Entries → New Entry → Publish. Live in a minute.

### Adding a region
Regions carry a colour and a numeral, so they live in code. In GitHub, edit
`index.html`, find `CONFIG.collections`, copy a block:

```js
{ id:'archive', name:'The Archive', color:'#7C8FA8', num:'V',
  desc:'One line describing it.' },
```

Then add it to the **Region** dropdown in `admin/config.yml` so the CMS knows
about it. Or ask me and I will do both.

### Adding pictures
Either upload through the CMS, or drag files into `assets/art/` in GitHub and
reference them in the `ART` block at the top of `index.html`.

### Changing colours or fonts
The `THEME` block at the top of `index.html`. See `CUSTOMISING.md`.

### If something breaks
**Route B:** Netlify keeps every previous version. Deploys → click an older
one that worked → **Publish deploy**. Back in seconds.

**Route A:** GitHub keeps every version too. Open the file, click **History**,
find the version that worked, and restore it. Or Actions → an older successful
run → **Re-run all jobs**.

Either way, nothing you do here is unrecoverable.

---

# The order, in one glance

**Today, two minutes:** netlify.com → sign up → drag the folder on. Live.

**Route A — GitHub only:**
1. Unzip the folder
2. GitHub account → empty repository → drag the **contents** in
3. Settings → Pages → Source: **GitHub Actions**
4. DecapBridge → create site → link repo → copy the `backend:` block
5. Paste it into `admin/config.yml` in GitHub → commit
6. Log in at `/admin` → publish a test entry → confirm it appears
7. Delete `netlify.toml`
8. CSS extension, custom domain — whenever

**Route B — with Netlify:** same, but step 3 becomes *Netlify → import the
repository → deploy → rename the site*, and step 7 becomes *delete
`.github/workflows/publish.yml`*.

Stop after step 3 either way and you already have a live site you can edit
through GitHub. Steps 4–6 buy you the writing interface. The rest is polish.
