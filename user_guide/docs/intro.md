---
sidebar_position: 4
slug: /
---

# Application Intro

Let's discover **HooT** in less than 5 minutes.

# Getting Started

Get started by **downloading the HooT application on your Android or IOS device**.

**or try HooT immediately** **[here](https://dev.hoot.mx/)**.

### What you'll need

- An android or an IOS device
- An access code provided by the system administrator

# Getting Started with API

- Login into the web-app.
- Copy your access-token `JWT` using the "Copy Access Token" button.
- Start using our API

```shell
JWT="<extract from web-app>"
curl -v -H "Authorization: $JWT" \
  --data @/tmp/create_conf.json \
  -X POST \
  https://devapi.hoot.mx/v1/create_conference/Kurosawa-Family
```

<!-- ## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus. -->

<!-- ## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/. -->

<!-- Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes. -->
