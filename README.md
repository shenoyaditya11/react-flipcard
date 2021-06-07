# react-flipcard

> React lib to create flip cards, vertically or horizontally

[![NPM](https://img.shields.io/npm/v/react-flipcard.svg)](https://www.npmjs.com/package/react-flipcard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-flipcard
```

## Usage

```jsx
import React, { Component } from 'react'

import {FlipCard} from 'react-flipcard'


class Example extends Component {
  render() {
   return <FlipCard direction='vertical' front={<div><h1>Front face</h1></div>} back={<div><h1>Back face</h1></div>} />
  }
}
```

## License

MIT © [shenoyaditya11](https://github.com/shenoyaditya11)
