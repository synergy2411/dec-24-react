# Sumit Khandelwal

## synergy2411@outlook.com

# Break Timings

- Tea : 11:00 (15 mins)
- Lunch : 1:00 (45 mins)
- Tea : 3:30 (15 mins)

# JavaScript

- let / const variables (Block scoping - ES6)
- Event Driven
- Client-side validation
- Callbacks (functions)
- List handling
- Dynamic Page (HTML / CSS)
- ECMA Standards / ECAM Script 2015
- Ease of use
- Light-weight
- Scripting language
- Browser Environment / Server Environment (Node Runtime Environment)
- Single threaded
- Non blocking
- Asynchronous Programming

  - Callbacks
  - Promises (ES6)
  - Observables

- Asynchronous Tasks

  - XHR Calls
  - Socker Programming
  - Read / write
  - Timers

- MEAN Stack : Mongo Express Angular Node
- MERN Stack : Mongo Express React Node
- Open Source
- JavaScript

# NodeJS Installer

- Node Package Manager (npm)
- Node Runtime Environment (REPL)
- Node Native Modules (fs, http, events, utils, path etc)

# JavaScript Libraries/Frameworks

- GRAPHQL : latest data - subscription

- jQuery : DOM Manipulation, Animation, AJAX

- \*Angular : Shadow DOM, Components, XHR, SPA, Templates, 2 way data binding, State Management, Custom Mark-ups, Form Validation;
  RxJS - Observable : PubSub Pattern

- React (35kb): Reusable Components, Render the UI quickly and efficiently, VDOM, State, Props, Redux - State Management, SPA - react-router-dom, Form Validation - react-form-hook, formik etc. View Part of M'V'C.

- Backbone : Client side MVC
- \*Vue : Progressive, Emerging, "Evan You"
- Knockout: MVVM Pattern, 2 way data binding
- Stencil: VDOM, Components
- Polymer: Custom Components
- \*ExtJS : Pre-built components
- \*EmberJS: Frequent changes in API in initial days
- React Native : Native Application
- \*Ionic Framework: Hybrid and Native Apps using Vue, Angular, React

# Atomic Design in Web Programming

- Atom : single unit; eg. Button, Input field
- Molecules : combo of atoms eg. SearchBar -> one input field + one Button
- Organism : combo of molecules eg. Navigation Bar -> Various Links + SearchBar
- Template : combo of organism eg. Form -> personal, professional, extra info
- Page : complete HTML page

# Thinking in React way

- Reusable -> create a component

# Actual DOM - hierarchical representation of HTML elements

# Virtual DOM - in-memory JavaScript representation of DOM

component -> JSX Code -> JavaSCript -> VDOM Elements -> Actual DOM -> UI

# Create React App

- npx create-react-app first-app
- cd first-app
- npm start

# to install bootstrap

> npm install bootstrap

# Side Effect - React is NOT meant for.

- Remote Server Call
- Changing the State

# Class based Component - Life Cycle Methods

- contructor
- render
- componentDidMount
- shouldComponentUpdate
- componentDidUpdate
- componentWillUnmount

# useEffect Flavors

- useEffect(cb) : cb fires everytime whenever the component render
- useEffect(cb, []) - (componentDidMount) : cb fires only (one time) at the time of initial rendering of component
- useEffect(cb, [Deps]) - (componentDidUpdate): cb fires at the time of initial rendrering of component as well as cb fires everytime whenever the dependency value changes.
- useEffect(cb => cleanUpFn, [Deps]) - (componentWillUnmount)
  > cb will fire at the initial rendering of component
  > Dependency will change
  > CleanUp will fire before the callback function
  > cb will fire again
  > cleanUpFn will fire just before the compoent destroy

# To install json-server

- create db.json
- sudo npm install -g json-server@0.17.4
- json-server --watch db.json --port=3030

---

# React Hooks

- useState
- useEffect
- useContext : consume Context API
- useReducer : complex state management; multiple sub-state values
- useCallback : memoized callbacks; optimizing apps
- useMemo: memoized values; optimizinf the apps

# Routing and Navigation

- Single Page Apps
- npm install react-router-dom@6

# Context API

- When top level component is not enough for hold model
- Siblings and Parent component can not acces context data
- should hold model that do not frequently change e.g. App Theme, JWT Token
- Provider / Consumer

# Memo - Memoized Value

prevProp === currProp

- true : does not allow to re-render child component

- false : re-renders the child component

# JSON SERVER -(GET, POST, PATCH, DELETE)

# SPA - /courses Pages

- /courses : list of courses
- /courses/courseId : a particular course based on supplied courseId
- /courses/courseId/edit : edit a particular course
- /courses/new : Add new Course

# Routing Terminologies

- BrowserRouter : Configure pages with URL
- NavLink : Creates links without submiting page to server
- Loaders : loads the route data before page is rendered; Make component clean
- useLoaderData() : consume the data available in route
- useNavigate() : programmatically navigates the user
- useSubmit() : programmatically submits the form
- useRouteLoaderData() : access data available at parent route
- Actions : submits the form at client side
- Outlet : space to load the child page template
- Error Page
- Not Found Page

# Redux

- useState : component level state
- useReducer : complex state management in a component
- Context API : Not optimized for frequently data change
- Redux : App-wide state, optimized for data change, unidirectional data flow pattern

- npm install @reduxjs/toolkit react-redux

- useSelector() : access the store

# Testing

---

- Controlled : Input element state is controlled by React state variable

  > immediate feedback
  > Validation
  > Auto-completion
  > Registration Form

- Uncontrolled (useRef): Input element state is controlled by Browser itself
  > simply fetch the data from user
  > Login Page
