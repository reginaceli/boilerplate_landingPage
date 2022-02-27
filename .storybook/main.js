module.exports = {
  "stories": [
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "staticDirs": ['../public', '../static'],
  "framework": "@storybook/react"
}