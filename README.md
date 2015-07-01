### Learning React.js - [Egghead.io](https://egghead.io)
tayght by [Tyler McGinnis](https://egghead.io/instructors/tyler-mcginnis)

**Step.1 - Set up webpack babel-loader first component**
```
npm init
npm install --save react
npm install --save-dev babel-loader
npm install webpack -g
```
- [React](http://facebook.github.io/react/index.html)
- [Babel](https://babeljs.io/)
- [Babel-Loader](https://github.com/babel/babel-loader)
- [Webpack](http://webpack.github.io/)

create `index.html`
create `webpack.config.js`
create first components `app/components/Main.js`

```
webpack -w
```

**Step.2 - home component, react-router**
create `Home.js`
```
npm install --save react-router
```
- [react-router](https://github.com/rackt/react-router)

create `config/routes.js` and `App.js` and edit `webpack.config.js`

**Step.3 - profile notes repos component**
- [mixins](https://facebook.github.io/react/docs/reusable-components.html#mixins)
- [props vs state](https://facebook.github.io/react/docs/thinking-in-react.html#a-brief-interlude-props-vs-state)
- [Does this go inside props or state?](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md#does-this-go-inside-props-or-state)

**Step.4 - propTypes**

- [propTypes - props validation](https://facebook.github.io/react/docs/reusable-components.html#prop-validation)

**Step.5 - firebase**
```
npm install --save reactfire firebase
```
- [reactfire](https://www.firebase.com/docs/web/libraries/react/?utm_source=reactfire)
- [.bindAsArray()](https://www.firebase.com/docs/web/libraries/react/api.html#section-bindAsArray)
- [.unbind()](https://www.firebase.com/docs/web/libraries/react/api.html#section-unbind)
- [.child()](https://www.firebase.com/docs/web/api/firebase/child.html)
- [componentDidMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount)
- [componentWillUnmount](https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount)

https://react-git-notetaker.firebaseio.com/

**Step.6 - child components, add a new note function**

-[.set()](https://www.firebase.com/docs/web/api/firebase/set.html)
Create `handleAddNote` function in Profile component (parent), it is passed down to Notes component (child), and to Add Note component.
Create `AddNote.js`

**Step.7 - transition with react router**

create `SearchGithub.js`
add the component `<SearchGithub />` to `Main.js`
- [Navigation .transitionTo()](http://rackt.github.io/react-router/#Navigation)

**Step.8 - Make server requests with Axios**

[https://github.com/mzabriskie/axios](https://github.com/mzabriskie/axios)
Promise based HTTP client for the browser and node.js
```
npm install --save axios
```
create `utils/helpers.js`


**Step.9 - Render Dynamic Data**

- [Commit - UI rendering for repos](https://github.com/yhagio/react-github-notetaker/commit/c28b6cbb19d121d41fc2c083fec8ca5d329b8ca0)
- [Commit - UI rendering for UserProfile](https://github.com/yhagio/react-github-notetaker/commit/bc4d8bf45ea37f55e8f1c73d18fd7e207c77033a)


**Step.10 - **
Fix for getting and rendering the new data on searching a new user, 
app does not listen to the route change event now.

- [componentWillReceiveProps](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops)

First,in `Profile.js` unbind from Firebase listener and then repeat the process in componentDidMount. However,
to avoid duplicating the code, create `init` function and move the necessary code there.
Then, call init function when it needs to receive and render new data.

**Step.11 - Refactor in ES6/2015 for Non-components**

Refactor `helpers.js`, `App.js`, `routes.js`, 


