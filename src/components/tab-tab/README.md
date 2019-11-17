## Features

- **Mobile supported** — Touch support. Easy to use on mobile device
- **Draggable tab** — Support drag and drop tab
- **Add & Delete** — Tab can be added and deleted
- **Async content** — Lazy load panel content
- **Customizable style** — Based on `styled-components`, super easy to customize tab style
- **API based** — All actions are controllable
- **ARIA accessible**

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Minimal setup](#minimal-setup)
  - [Draggable tab](#draggable-tab)
  - [Async Panel](#async-panel)
  - [Another Example](#another-example)
- [Components / Api](#components--api)
  - [&lt;Tabs /&gt;](#lttabs-gt)
  - [&lt;TabList /&gt;](#lttablist-gt)
  - [&lt;Tab /&gt;](#lttab-gt)
  - [&lt;DragTabList /&gt;](#ltdragtablist-gt)
  - [&lt;DragTab/ &gt;](#ltdragtab-gt)
  - [&lt;PanelList/ &gt;](#ltpanellist-gt)
  - [&lt;Panel /&gt;](#ltpanel-gt)
  - [&lt;AsyncPanel /&gt;](#ltasyncpanel-gt)
- [Customize style](#customize-style)
  - [Use current style](#use-current-style)
  - [Make your own style](#make-your-own-style)
- [Development](#development)
- [License](#license)

<!-- tocstop -->

## Installation

Install it with npm or yarn

Install `styled-components`. Because we put the `styled-components` to the peerDependencies, it suggests by [styled-components official blog](https://www.styled-components.com/docs/faqs#i-am-a-library-author-should-i-bundle-styledcomponents-with-my-library)

```js
$ npm install react-tabtab --save
$ npm install styled-components@^4.0.0 --save
```

Then, import the module by module bundler like `webpack`, `browserify`

```js
// es6
import {
  Tabs,
  DragTabList,
  DragTab,
  PanelList,
  Panel,
  ExtraButton,
} from "react-tabtab";

// not using es6
var Tabtab = require("react-tabtab");
var Tabs = Tabtab.Tabs;
var DragTabList = Tabtab.DragTabList;
var DragTab = Tabtab.DragTab;
var PanelList = Tabtab.PanelList;
var Panel = Tabtab.Panel;
var ExtraButton = Tabtab.ExtraButton;
```

UMD build is also available. If you do this, you'll need to include the dependencies:

For example:

```html
<script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
<script src="https://unpkg.com/classnames@2.2.5/index.js"></script>
<script
  src="https://unpkg.com/styled-components/dist/styled-components.min.js"
  type="text/javascript"
></script>
<script src="https://unpkg.com/react-sortable-hoc/dist/umd/react-sortable-hoc.js"></script>
<script src="https://unpkg.com/react-poppop/dist/react-poppop.min.js"></script>
<script src="https://unpkg.com/react-tabtab/dist/react-tabtab.min.js"></script>
```

You can reference [standalone.html](https://github.com/ctxhou/react-tabtab/blob/master/docs/standalone.html) example.

## Usage

React-tabtab is a tab component with highly customization. You can create a tab in simply setting. You also can create a tab system full with `draggable`, `async loading`, `close and create button`.
All the actions are api based. It means there is `no state` in the component. Developers have full control.

### Minimal setup

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tabs, TabList, Tab, PanelList, Panel } from "react-tabtab";

class Basic extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    );
  }
}

ReactDOM.render(<Basic />, document.getElementById("root"));
```

It's simple to use. Zero configuration!

### Async Panel

In some case, if the data is large or we want to save the bandwidth, lazy loading the content is possible solution. You can use `AsyncPanel` to laze load panel content.
Moreover, you can mix lazy load panel with normal panel!

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tabs, TabList, Tab, PanelList, AsyncPanel, Panel } from "react-tabtab";

function loadContentFunc(callback) {
  setTimeout(() => {
    callback(null, [{ product: "json" }, { product: "joseph" }]);
  }, 100);
}

// You also can provide promise as return function:
// function loadContentFunc() {
//   return fetch('/products')
//     .then(resp => resp.json())
//     .then(data => data);
// }

class AsyncTab extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <AsyncPanel
            loadContent={loadContentFunc}
            render={data => <div>{JSON.stringify(data)}</div>}
            renderLoading={() => <div>Loading...</div>}
            cache={true}
          />
        </PanelList>
      </Tabs>
    );
  }
}

ReactDOM.render(<AsyncTab />, document.getElementById("root"));
```

To implement lazy loading, use `AsyncPanel` to wrap your panel content. Remember to provide `loadContent`, `render`, `renderLoading` these 3 props.

In `loadContent` props, both `callback` and `promise` type are supported.

If you use `callback`, remember to call `callback` when finish async loading.

If you use `promise`, need to return promise action.

When data is loading, the panel content will show `renderLoading` component.

After finishing loading data, the panel content will show `render` component and react-tabtab will pass the `loadContent` result as first parameter. So you can customize the component of panel content.
