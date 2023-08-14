

# Next.js Middleware does not run before cached content

## Description

When navigating from page to page in the Next.js app, the middlware will run the first time page content is loaded.  The middleware will not run once page content is loaded.  This behavor is contrary to the description provided in the docs:

```
Middleware runs before cached content and routes are matched
```

### Setup

These steps have been implemented for this bug report:

- This bug report has been verified against the `next@canary` release.
- This bug report uses a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues) with the `app/` directory. 

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/nextauthjs/next-auth-example.git
cd next-auth-example
npm install
```

### 2. Start the Dev Server:

```
npm run dev
```