One more issue, when we scroll down we lose out search bar
Would be nice to scroll and still search 

React is so good because you can create components that
are reusable 

Instead of using CSS, 

Wouldnt it be cool if could create a scroll component?

A scroll component that wraps the cardlist 

<scroll>
<CardList robots={filteredRobots} />
</scroll>

//

using props.children you can wrap the children in a component 
of your liking

import React from 'react';

const Scroll = (props) => {
	return ( 
		<div>
		{props.children}
		</div>

	);
};

export default Scroll;

Now we can add stying by giving a style attribute 

with double curly brackets 

<div style={{}}>

returns an object with css styles 

such as overflowY

css: overflow-y
jsx: overflowY

you must camelCase for JSX

a propety overflowY, scroll a css attribute, border and 
height 

adding one final thing we have overlooked 

If we take a look at the project 

It is a lot of files 

Source file can get big 

Organize is important from projects 

Applications will be much bigger

How to clean up source code and make it more extensible 

First thing is we will create a few folders

components 
containers - smart components that have state and life cycle hooks

create these folder in the src file 
move files into corresponding folders
and modify the import statements, for example 

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';

destructuring 

clean up app.js from having to keep using this.state 
by adding:

const { robots, searchfield} = this.state;

render() {
			const { robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot =>{
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
			if (robots.length === 0) {
				return <h1>Loading</h1>
			} else {
				return (
		  <div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filteredRobots} />
				</Scroll>
		  </div>
		 );	
		}
	}

further cleaning up 

if (robots.length === 0) {

to 

if (!robots.length) {

change if and statement with a ternary operator 

from this 

render() {
			const { robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot =>{
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
			if (robots.length === 0) {
				return <h1>Loading</h1>
			} else {
				return (
		  <div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filteredRobots} />
				</Scroll>
		  </div>
		 );	
		}
	}
}

to 

render() {
			const { robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot =>{
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
				return !robots.length ?
				<h1>Loading</h1> : 
				(
			  	<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots={filteredRobots} />
					</Scroll>
			  </div>
		 );	
		}
	}

To optimize your files 

npm run build 

creates a build folder 
with optimized files 

If we go to static, js, everything is minified 
css is optimized 
everything that we need to deploy the website is in the folders
we can take that folder and bring it anywhere

goes through babel to get import statements 

create react app takes away pain of set up 




