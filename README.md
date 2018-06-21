# iframe-script-container
A React component that can execute script tag normally and safely in React app.     
I came up with this component when working on a project that need to integrate linked insider plugin into a react app.
However, after I figured out that the script tag wil not execute in react app, I decided to make a container like thing that can execute script in react correctly. 

The idea of this component is to execute script inside a container like iframe, so that we can execute it without messing our react app.
See linkedin plugin example below.

*PS* : This component is tested not working on browser [brave](https://brave.com/).

- [Install](#install)
- [Example](#example)
- [Author](#author)
- [License](#license)


## Install

**Install with [npm](https://www.npmjs.com/)**:

```sh
npm i iframe-script-container
```

**Install with [yarn](https://yarnpkg.com/en/)**:

```sh
yarn add iframe-script-container
```

## Example

**Props:**

* docString: HTML in a string containing the script or anything that you want to execute in the iframe container. 
* width: width of the container
* height: height of the container
* scolling: if enables scrolling in the iframe

```js
import React, { Component } from 'react';
import IframeContainer from 'iframe-script-container';
 
class Demo extends Component {
   render() {
       const docString = "<body><h1>Add HTML to docString, Please!</h1></body>";
       return (
           <IframeContainer 
           docString={docString}
           />
       );
     }
}
```

### script example 
This is an example of running the linked insider plugin in the script container.


```js
import React, { Component } from 'react';
import IframeContainer from 'iframe-script-container';
 
class Demo extends Component {
    render() {
       const str = '<body><script src="//platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/CompanyInsider" data-id="1337"></script></body>';
       return (
         <div className="App">
           <IframeContainer 
           width="100%"
           height="300px"
           docString={str}
           />
         </div>
       );
    }
}
```

**result:*
![demo](img/linkedinPlugin.gif)

## Author

**[Leo weng](https://github.com/leowz)**

## License

Copyright © 2018 **[Leo weng](https://github.com/leowz)**
Released under the MIT license.
