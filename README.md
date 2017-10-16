<a href="https://github.com/odeum/odeum-ui">
  <img alt="ODEUM Code UI Primitives" src="./logotype.png" />
</a>

ODEUM UI are a React UI primitives component library build for [ODEUM Code](https://github.com/odeum/odeum-code). ODEUM UI can be utilized without ODEUM Code usage. Check the /examples folder for component demoes.

[![Build Status](https://travis-ci.org/odeum/odeum-ui.svg?branch=master)](https://travis-ci.org/odeum/odeum-ui)
[![npm](https://img.shields.io/npm/v/odeum-ui.svg)](https://www.npmjs.com/package/odeum-ui)
![NPM license](https://img.shields.io/npm/l/odeum-ui.svg?style=flat)

<!-- TOC -->

- [1. Components](#1-components)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)

<!-- /TOC -->

# 1. Components
ODEUM UI primitives (odeum-ui) are a collection of simple visual components build for ODEUM Code open source UI framework. All components are build with styled-components and ReactJS and the following components will be added:

- Button - Button component
- ButtonPanel - Button panel for wrapping and aligning multiple buttons in a row or a column (coming soon ...)
- Icon - Icon helper component, uses material-design icons from react-icons
- Modal - Styled modal window based upon react-modal
...

# 2. Installation
```sh
npm install odeum-ui
yarn add odeum-ui
```

# 3. Usage

```js
import React from 'react'
import { Button, ButtonPanel, Icon, Modal } from 'odeum-ui'

...

<Button
  label={'Open Modal'}
  icon='open_in_new'
  iconSize={18}
  color={'#3B97D3'}
  onClick={this.openModal}
/>

```

