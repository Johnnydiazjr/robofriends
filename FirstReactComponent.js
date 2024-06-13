First React Component
First React Component

React is a view library 
It is the core of the project 

It can be used across various platforms

React lets you import css not just for one file but for 
each different component 

report service worker helps things run better 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

The above is the main thing that react does

We want the reactdom package to render whatever follows

If there is no .css or type after, react assumes it is javascript

App.js file 

import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.component {
  render() {
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  
  }
}

export default App;

We are importating something, and destructurting, 
Have a logo
And app.css that we importing 

Make sure we are using Javascript Babel format for syntax

Components have a rule that it must render at least something 
We are creating our own custom components we can add

One parent that has children, app has children, lets build our 
own components
 
One of the great things about Create React App it tells you 
what errors are without opening the console

To create a component...js

import React from 'react';

class Hello extends Component {
	render() {
		return <h1>Hello World</h1>
	}
}

If we want more files to use the component use export 

If we use default it will only export one thing 

Adding props in index.js to reflect in hello.js

ReactDOM.render(<Hello greeting ={'Hello ' + 'React Ninja'}/>, document.getElementById('root'));

<p>{this.props.greeting}</p>



