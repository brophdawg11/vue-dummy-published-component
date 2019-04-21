## vue-dummy-published-component

This is a sample boilerplate repo for a Vue component that you intend to publish to the NPM registry.  It is based on the [Packaging Vue Components for npm](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html) entry in the Vue Cookbook, and the associated [vue-sfc-rollup GitHub repo](https://github.com/team-innovation/vue-sfc-rollup). 

### What's Different About this Boilerplate?

This adds a few new features that you mind useful when creating a robust open-source Vue component (all of which you are welcome to change once your fork for your own purposes): 

* Code linting via [`eslint`](https://eslint.org/)
  * Leverages the [AirBnb ESLint Config](https://github.com/airbnb/javascript) via the [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) plugin
  * Adds [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) plugin with the "recommended" settings
  * Configured via [`.eslintrc.js`](./.eslintrc.js)
* Unit testing via [`jest`](https://jestjs.io/) and [`@vue/test-utils`](https://vue-test-utils.vuejs.org)
  * Configured via [`jest.config.js`](./jest.config.js)
  * Tests located in the [`test/unit`](./test/unit) directory
* [Storybook](https://storybook.js.org/) Generation
  * Configured via [`.storybook`](./.storybook)
  * Stories located in the [`stories`](./stories) directory
* End-to-End tests with [`cypress`](https://www.cypress.io/) that run on top of your generated Storybook  
  * This is a pattern I haven't seen before that makes a lot of sense to me.  Storybook is intended to show off the various usages of your components - so why not write integration tests to ensure those usages are working as expected?
  * Configured in [`cypress.json`](./cypress.json)
  * Tests located in the [`tests/e2e`](./test/e2e) directory
* Precommit hook using [`husky`](https://github.com/typicode/husky) to lint and test the component


### Getting Started

To get started with your own publishable component, I would start by copying it to your own new repo and then there's a few changes to make as well as some things to add that have been intentionally left out.

#### Things to Change

* Update all relevant `package.json` fields (`name`, `author`, `repository`, etc.)
* Modify the exported component name in [`rollup.config.js`](./rollup.config.js)
* Write your component, Unit tests, Stories, and E2E Tests!
* Update the [LICENSE.md](./LICENSE.md`) with the proper license and attribution

#### Things to Add

* Add some docs for how users can file issues and contribute back to your open-source components.  Check out the [Mozilla Science Lab Post](https://mozillascience.github.io/working-open-workshop/contributing/) for ideas and examples
* Don't forget to host your Storybook somewhere so users can access it.  [GitHub Pages](https://pages.github.com/) is one potential solution.

### Usage

```bash
# Build the component into dist/
npm run build

# Run unit tests
npm run test:unit

# Run Storybook
npm run storybook

# Build storybook into storybook-static/
npm run storybook:build

# Run E2E Tests against built Storybook
npm run test:unit
```

