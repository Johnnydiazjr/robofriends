RobofriendsAppNotes3
// RobofriendsAppNotes3

Making our react app interactive with a search bar and title

If we go to index.js

Instead of Cardlist component, lets have one big one
called 'app'

App will be the father of all of our components

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
            <App />
, document.getElementById('root'));

Now, lets build the App component, app.js, import react, 
and make the app return the cardlist component in Javascript
Babel format

import React from 'react';

const App = () => {
	return (
	<CardList robots={robots}/>
	);	
}

We want to import the CardList component 
We want to have our robots imported as well 
to have access to it 
and export:

import React from 'react';
import CardList from './CardList';
import { robots } from './robots'

const App = () => {
	return (
	<CardList robots={robots}/>
 );	
}

export default App; 

Note: file names are case sensitive

Add a header to CardList

const App = () => {
	return (
		<h1>RoboFreinds</h1>
	<CardList robots={robots}/>
 );	
}

Since we need to return one single parent, wrap in div,
a distinctive classname and padding of 2 abbreviated by
tachyons

const App = () => {
	return (
	  <div className='pa2'>
		<h1>RoboFreinds</h1>
	<CardList robots={robots}/>
	  </div>

 );	
}

Create searchbox component for the App, <SearchBox />

const App = () => {
	return (
		<h1>RoboFreinds</h1>
	<SearchBox />
	<CardList robots={robots}/>
	  </div>

 );	
}

and import 

import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots'

Create file in src folder for the new component 

Now lets create the Search box function 

import React from 'react';

Create a function to return a search with the placeholder 
search robots 

const SearchBox = () => {
	return (
		<input type='search' placeholder='search robots' />
		);
}

always remember to export your components 

export default SearchBox;

Create a classname for input and add styling with tachyons

const SearchBox = () => {
	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots' 
		/>
		</div>
	);
}

Now we have the search bar 

Note: always a good idea to wrap everything in a div

Lets place the placeholder in the center in App.js

<div className='tc'>

Now, how can we make this interactive?

Search box needs to go through card cardlist 
and cardlist needs to know what is in the searchbox 

In react one way data flow, child sends information
to parent that tells the child what to do 

React has something called STATE

We learned about PROPS, or properties that we pass down 

React reads the props, and renders. Cardlist for example
is a pure function that recieves an imput and always
returns the same output 

These components are called pure components. 

State simply means the description of your app
An object that describes your application 

Which in this case are the robots and retrieving them 

Props are simply things that come out of state 
A parent feeds state into a child component 
As soon as the child component recieves a state 
Its a property 
The child cannot change the property 

Now it is time to use state

const state = {
	robots: robots, 
	searchfield: ''
}

Now, in order to create a state, must create a class

We do that by saying 

export dafault 

or export App extends React.Component {

}

It extends the component class

We can use shorthand by adding component to above import 

export App extends Component {
	render() {

	}

This always has a render function that returns 
in this case

	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots' 
		/>
		</div>
	);
}

In full 

class App extends Component {
	render() {
	return (
	  <div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox />
		<CardList robots={robots}/>
	  </div>
	 );	
	}
    }

Terminal warns that state is assigned a value but never 
used 

How do we define a state?

constructor() {
	this.state = {

	}
}

Inside of the above we place in whatever we want to have 

We get an error that this is not allowed before super...

In order to use this we have to call super() 
which calls the constructor of component 

class App extends Component {
	constructor() {
		super()
		this.state = {
	robots: robots, 
	searchfield: ''
		}
	}

Now we have our state, which is robots and searchfield 

This state is what describes our app

These are the things that can change and effect our app

Usually live in our parent component 

They pass the state to different components 

Now we can access robots not from searchbox by 

this.state.robots 

	return (
	  <div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox />
		<CardList robots={this.state.robots}/>
	  </div>
	 );	
	}

//
Our state which is robots, is now passed down as props

Even though in app.js it is state

Now to add functionality to search box we can add

onSearchChange

which is a function we will make up 

onSearchChange() {

}

Now we create a function which executes when 
text is written into the search bar 

onSearchChange(event) {
	console.log(event);
}

Creating a function that anytime this input changes
to trigger console.log 

Add to render function 

render() {
return (
  <div className='tc'>
	<h1>RoboFriends</h1>
	<SearchBox searchChange={onSearchChange}/>
	<CardList robots={this.state.robots}/>
  </div>
 );	
}
}

the above is incorrect since it is an object, 
we have to iterate this.

render() {
return (
  <div className='tc'>
	<h1>RoboFriends</h1>
	<SearchBox searchChange={this.onSearchChange}/>
	<CardList robots={this.state.robots}/>
  </div>
 );	
}
}

Now in search box we now have searchChange as a function
in searchbox 

const SearchBox = ({ searchfield, searchChange})

we are using destructuring here...({...})

allows us to grab the props object and grab its 
properties 

**searchfield is actually not used and will be removed 

Just like in HTML 

we can do onchange on html 

we can say 

onChange={searchChange}

in search box 

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots' 
		onChange={searchChange}
		/>
		</div>
	);
}

Now when we look at console on the page we get the event 

With an event we always have event.target.value 

Which should give us the value of the search 

onSearchChange(event) {
	console.log(event.target.value);
}

Now we call onChange function in search box 

onChange={searchChange()}

 We define the function, and every time the event happens
 we call it 

 Any time the event is triggered, call the search change function
 The search change function which is a prop,
 is the onSearchFunction which is defined in the App

 Parent says run this function once triggered 

Now we can directly communicate the search input to 
the robots list 

Now lets create a variable 

const filteredRobots = this.state.robots.filter(robots => {
	return robots.name.toLowerCase()
})

If the name of the robots in lower case includes 

lowercase then only return the robots that returns true to this 

const filteredRobots = this.state.robots.filter(robots => {
	return robots.name.toLowerCase().includes(searchfield.toLowerCase()):

We get a runtime error

The value of 'this' is not referring to the App

Because the event happened in the input 

The value of this is the input which doesn't have state.robots 

Keep this in mind as a rule of thumb

Anything that comes from React, constructor and render, are prebuilt 

When you make your own methods, make sure to use the following syntax 

Arrow functions, this will ensure that value will go where it was created 

onSearchChange = (event) => {
	const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
	})
	console.log(filteredRobots);
}

Now to go over everythihg 

We have our app component that has two states 

robots and searchfield 

and because app owns the state any component that has state uses 
the class syntax 
such as the constucter function
to create this.state 

and the state is what changes in the app 

We manage the state in render 









