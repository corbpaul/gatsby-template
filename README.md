# Gatsby Template

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/corbpaul/gatsby-template/Deployment/main)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcorbpaul%2Fgatsby-template%main%2Fpackage.json)](https://github.com/corbpaul/gatsby-template)
[![CodeFactor](https://www.codefactor.io/repository/github/corbpaul/gatsby-template/badge)](https://www.codefactor.io/repository/github/corbpaul/gatsby-template)

Starter template to start any Gatsby project. Includes static, unit, integration and e2e testing.

## Prerequisites

You'll need Node to run this application and I suggest using [NVM](https://github.com/nvm-sh/nvm). Once installed run `nvm use` to use the default version.

## Installation

```
yarn
```

that's it :)

## Development

To run the main application in dev mode

```
yarn start
```

and you can also run storybook alongside to develop components

```
yarn storybook
```

## Testing

This template comes built with a variety of tests. To run the entire suite

```
yarn test
```

see package.json for individual test runners.

## Deployment

When pushing commits to Github, the workflows kick in. The PR workflow will ruin tests to check everything is ok, whilst merges to main will deploy to Github Pages.
