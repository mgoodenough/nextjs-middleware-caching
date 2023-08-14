

# Next.js Middleware does not run before cached content is loaded

## Description

When navigating from one page to another in the Next.js app via the `Link` component, middlware will run the first time that a page is loaded. When navigating back to a previously viewed page via the `Link` component, the middleware will not run.  

This behavor is contrary to the expected behavior in the [middleware description](https://nextjs.org/docs/app/building-your-application/routing/middleware) provided in the docs:

```
Middleware runs before cached content and routes are matched
```
## Setup & Reproduce

### 1. Clone the repository and install dependencies

```
git clone https://github.com/mgoodenough/nextjs-middleware-caching
cd nextjs-middleware-caching
npm install
```

### 2. Start the Dev Server:

```
npm run dev
```

### 3. Test the Bug:

#### Step 1: 
From the navigation menu on the `Home` page, click the `Dashboard` Link. Prior to page load, the middleware will log the following snippet to the console:
```
pathname => /dashboard
```
#### Step 2: 
From the navigation menu on the `Dashboard` page, click the `Home` Link. Prior to page load, the middleware will log the following snippet to the console:
```
pathname => /
```
#### Step 3: 
From the navigation menu on the `Home` page, click the `Dashboard` Link. Prior to page load, the middleware does not run.

## Notes
#### 1. `prefetch={false}` has been added to each Link, but the defect behaves the same regardless of this attribute being set.
#### 2. The above example focuses on the `Dashboard` Link, however, the same secario can be run against any of the Links on the page. 
