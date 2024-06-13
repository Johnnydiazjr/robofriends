RobofriendsAppNotes2
// RobofriendsAppNotes2

Making each component small and reusable 

Now that we have robot.js 
We can list all ten users 

The way to do that we
Lets create a card list component

So if we list a 'cardlist' component 
So that if we list a cardlist component 
Which is a parent of card, then we can render that
Instead of listing each card one by one 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

To 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

Create CardList.js file 
Use Javascript (Babel) file format 

Now import 

import React from 'react';React

const CardList = () {
	return (




	);
}

What should it import? The cards...

import React from 'react';React

const CardList = () {
	return (
     <div>
        <Card id={robots[0].id} name ={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name ={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name ={robots[2].name} email={robots[2].email}/>
     </div>
	);
}

Now cardlist will be the one that returns these cards 

and index.html will render cardlist component

Now we can delate these items from index.js, as well as the card line

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

ReactDOM.render(
            <CardList robots={robots}/>
, document.getElementById('root'));

We removed card and are passing robots (prop) array into Cardlist for rendering

We get an error from react because we did not export

Now we get more errors because we have to import them into the CardList file

import React from 'react';
import Card from './Card';

const CardList = () => {
	return (
     <div>
        <Card id={robots[0].id} name ={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name ={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name ={robots[2].name} email={robots[2].email}/>
     </div>
	);
}

export default CardList; 

Now just robots is not defined 

We know that cardlist recieves cardlist now, and we have access to it
with props, we can pass it into into Cardlist:

import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
     <div>
        <Card id={robots[0].id} name ={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name ={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name ={robots[2].name} email={robots[2].email}/>
     </div>
	);
}

export default CardList; 

Everything is now back the way things were
...but only the three in the array 

How can we do this better?

It looks like we want to do some kind of loop

Loop over robots array and create a card for each one with ReactDOM

Lets add another variable

const cardComponent = robots.map()

we can use for each but map is recommended (map returns a new array)

So within each Map, the function runs through each property

We get a user every time we map through it 

const cardComponent = robots.map(user => {
	return
})

What do we want to return? A card component

<Card id={robots[0].id} name ={robots[0].name} email={robots[0].email}/>

Add into the loop, swap i in the second parameter for index, const
as well as in each iteration in the expression.js

Finally, add cardComponent function in div

const CardList = ({robots}) => {
  const cardComponent = robots.map((user, i) => {
	return <Card id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>
})
return (
  <div>
  {cardComponent}
  </div>
);
}

export default CardList; 

This is the power of Javascript. To return multiple components

This is why react is so popular. 

Lets make this better by adding key prop (error in console)

error states "each child in an array or iterator should
have a unique key prop"

When working with react, the way the virtual dom works 
Is it keeps track of what all the cards another
But without a key prop, if some cards get deleted
React wont know which one is which 

Add key prop

Whenever you do a loop, give it a unique key, key={i}

const CardList = ({robots}) => {
  const cardComponent = robots.map((user, i) => {
	return <Card key={i} id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>
 })

Key prop should have something that doesn't change. For 
example, index (of i in our case) could change if array 
items get moves. So a better key in this case would be something
unique like id 

Can make more more readable 

const CardList = ({robots}) => {
  const cardComponent = robots.map((user, i) => {
	return (
	<Card 
	key={i} 
	id={robots[i].id} 
	name ={robots[i].name} 
	email={robots[i].email}
	/>
  );
 })

For multiple lines wrap in round brackets

Because this is javascript, we can add everything in curly brackets
We can refactor by removing the constant and adding our loop
into the curly brackets

const CardList = ({robots}) => {
return (
  <div>
   {
	robots.map((user, i) => {
	return (
	<Card 
	key={i} 
	id={robots[i].id} 
	name ={robots[i].name} 
	email={robots[i].email}
	/>
 	);
 	}) 
    }
  </div>
 );
}

export default CardList; 

React makes you a very good javascript developer
Since it is written in Javascript

We're able to create a cardless component that lists cards
and all we have to do is pass it a prop of robots and made it cleaner








