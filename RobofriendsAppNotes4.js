Lets make the app look more realistic 

In real life, we are not manually entering users

We would use something like an API

We want a request and grab the robots from a server 

JsonPlaceholder

They have a nice url we can use 

And it returns a name an ID and a username 

App.js is what is called a smart component 

Unlike searchbox or cardlist that are pure functions 

App.js contains state

A piece of data that describes our app

When we start out object, we start with assigning 

robots an empty array []

class App extends Component {
	constructor() {
		super()
		this.state = {
	robots: [],
	searchfield: ''
		}
	}

If we save this robots wouldnt display until the array
is filled 

There are things inside of components we can use 

They are called life cycle methods 

Methods that we can use that come with react 

They are called life cycle hooks, because we run the commands 
words they get loaded on the page we call it mounting

Mounting is the start of the app 

Checks if component has a constructor, if it does it returns

All in react documentation 

Has a mounting section 
and a updating section 
and a unmounting section 

For instance, if we change a page they get removed 

They are automatically loaded

The order in which things run...

constructor 
render 
componentDidMount
render

Why did render run again?

We created the constructor, ran render, then updated the state 
in componentDidMount 

Everytime the state changes it runs render again 

Because it goes from empty array to robot list 
The virtual dom gets input and repaints the app

Now lets go ahead and make things more realistic 

Lets comment out the robots file 

How to grab list from online file in App.js 

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users => this.setState({ robots: users }));
}

We can reduce this function smaller 

Fetch is a window object that makes a request to servers 

Returns for us when we use /users a list of users

What is this took a long time?

We can do the following 

render() {
			const filteredRobots = this.state.robots.filter(robots =>{
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
			if (this.state.robots.length === 0) {
				return <h1>Loading</h1>
			} else {
				return (
		  <div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots} />
		  </div>
		 );	
		}
	}
}

This is how you build real apps with react 
You have a loading bar you can just add 
Make requests on componentDidMount 
and interact with components





