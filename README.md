# Thret Clothing Co.

![David](https://img.shields.io/david/thretclothing/home)
![GitHub issues](https://img.shields.io/github/issues/thretclothing/home)
![GitHub pull requests](https://img.shields.io/github/issues-pr/thretclothing/home)
![GitHub last commit](https://img.shields.io/github/last-commit/thretclothing/home)

Thret Clothing Co. (Also known as Thret or Thret Clothing), is a UK based skate and streetwear clothing brand on a mission to provide quality goods for an affordable price. 🛹 🏷

Welcome to the official Thret Clothing Co. website repository. The live site can be found on the `main` branch and our in-development features can be found in `develop`. The main contributors to this repository can be found here: [graphs/contributors](https://github.com/thretclothing/home/graphs/contributors). The lead developer and point-person for this repo is [@rossyman](https://github.com/rossyman).

Thanks for taking the time to check the code out and we hope you enjoy your experience with us! 😊❤️

## Table of Contents

- [Thret Clothing Co.](#thret-clothing-co)
- [Table of Contents](#table-of-contents)
- [Technical Information](#technical-information)
- [Firing It Up (🔥↑)](#firing-it-up-)
    - [Running The Site](#running-the-site)
    - [Building The Site](#building-the-site)
    - [Testing The Site](#testing-the-site)
- [Quality Checks and Automation](#quality-checks-and-automation)
- [Copyright & Disclaimers](#copyright--disclaimers)

## Technical Information

The website was written using TypeScript v4, Angular v10 and a whole host of other libraries for testing. GitHub Actions was used as part of the CI process to ensure code-hygiene, utilising Angular's built-in testing and linting tools.

## Firing It Up (🔥↑)

To run, test or build the website locally, you'll need to have a few things installed:
 - [x] Node.js (LTS - v12) - [Get it here](https://nodejs.org/)
 - [x] NPM (Bundled with Node.js)
 
Once you've installed Node.js, you'll need to checkout the repository:

```bash
git clone https://github.com/thretclothing/home.git
```

After checking out the `develop` branch (The working branch against which all tested, but pre-prod, commits are made against), you'll then be able to install the NPM dependencies needed for the project to run:

```bash
# 🚨 - Make sure that you've cd'd into the correct directory first
npm install
```

After the dependency installation has completed, you'll be able to use the NPM commands listed below. If you have any questions or issues relating to this process, feel free to [raise an issue here](https://github.com/thretclothing/home/issues).

### Running The Site

There are two ways in which you can launch the site:
- In dev mode, which is what is used when working on the site: `npm run start`
- In prod mode, which resembles the live site: `npm run start:prod`

### Building The Site

There are two ways in which you can build the site, similarly to points above:
- In dev mode, which should only be used in testing environments: `npm run build`
- In prod mode, which is ultimately what is packaged and delivered to web-clients: `npm run build:prod`

### Testing The Site

There are four ways in which you can test the site:
- In a chromium window, running the suite once: `npm run test`
- In a chromium window, running the suite until you exit: `npm run test:watch`
- In a headless chromium window, running the suite once: `npm run test:headless`
- In a headless chromium window, running the suite until you exit: `npm run test:headless:watch`

## Quality Checks and Automation

As part of an effort to ensure code-quality and hygiene, this repository has been equipped with some automating features:
- Each PR that is raised will automatically have `npm run lint` and `npm run test:headless` checked against the branch, to ensure nothing is broken and that the style guide has been adhered to.
- Dependabot has been enabled to ensure that NPM and GitHub Actions dependencies are never outdated within a given scope.
- Stale reviews/approvals on PRs will be removed to ensure no changes are made after-the-fact.

## Copyright & Disclaimers

All imagery, branding, code and intellectual-property relating to Thret Clothing Co. (Also known as Thret and Thret Clothing) has been reserved for the sole usage of Thret Clothing Co. and it's related services. &copy; 2020 - Thret Clothing Co., see `LICENSE` for more information.
