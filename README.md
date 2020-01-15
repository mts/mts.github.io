<p align="center">
  <img width="250px" height="250px" src=".docs/image/logo.jpg">
</p>

<h1 align="center">MTS</h1>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/mts-client">
    <img alt="" src="https://img.shields.io/npm/v/mts-client.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/mts/mts">
    <img alt="" src="https://img.shields.io/travis/mts/mts.svg?logo=travis">
  </a>

  <a href="https://codecov.io/gh/mts/mts">
    <img src="https://codecov.io/gh/mts/mts/branch/master/graph/badge.svg" />
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=mts-client&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/mts-client.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/mts/mts/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/mts/mts.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/mts/mts/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mts/mts.svg">
  </a>

  <a aria-label="license" href="https://github.com/mts/mts/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mts/mts.svg" alt="">
  </a>
</p>

## Client

- ReactJS, ReduxJS Client
  - deployed to and running at https://mts.github.io/mts/

## Server

- NodeJS & ExpressJS Server
  - deployed to https://dashboard.heroku.com/apps/mts-http-server
  - running at https://mts-http-server.herokuapp.com/

## Heroku Setup, Deployment and Monitoring

- `Login`: `heroku login`
- `Create app`: `heroku create mts-http-server`
- `Add remote`: `git remote add origin https://git.heroku.com/mts-http-server.git`
- `Set build pack 1`: `heroku buildpacks:set -a mts-http-server https://github.com/Pagedraw/heroku-buildpack-select-subdir`
- `Set build pack 2`: `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v133 -a mts-http-server`
- `Configure build pack`: `heroku config:add BUILDPACK='packages/server=https://github.com/heroku/heroku-buildpack-nodejs#v133' -a mts-http-server`
- `Add environment variable(s)`: `heroku config:add PORT='3001' -a mts-http-server`
- `Deploy`: `git push heroku master`
- `Monitor`: `heroku logs --tail`
- `Check app`: `https://mts-http-server.herokuapp.com/`
- `Help`: `https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error`

## Github Pages

- rm -rf node_modules/gh-pages/.cache
- change `https://github.com/mts/mts.git` to `git@github.com:mts/mts.git` in `.git/config`
