module.exports = {
    "hooks": {
        "pre-commit": "npm run lint && npm run storybook:build && npm run test"
    }
};
