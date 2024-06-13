To begin creating React components

Refer to new js file in index then create file and begin import

1

import React from 'react';

2

add script, example

const Card = () => {
	return (
		<div>
		<img src='' />
		<div>
		<h2>Jane Doe</h2>
		<p>jane.doe@gmail.com</p>
		</div>
		</div>
		);
}

3

add export to the end 

export default Card;

3.1

The following exports a warning that says we must have an 
alt for images, which is better 

add:

const Card = () => {
	return (
		<div>
		<img alt='robots' src='' />
		<div>
		<h2>Jane Doe</h2>
		<p>jane.doe@gmail.com</p>
		</div>
		</div>
		);
}

Note

We are writing in JSX, for this we need to have react imported 
We are writing in JSX, for this we need to have react imported 

robot hash API

https://robohash.org/

3.2 

Add API to img source to generate robot 

<img alt='robots' src='https://robohash.org/test' />

3.3

To change width and height 

Add '?' + width x height 

<img alt='robots' src='https://robohash.org/test?200x200' />

3.4 

Add a title

Note 

Cannot return multiple items, just one 
Cannot return multiple items, just one 

4

Replicating, adding multiple cards

In index.js

ReactDOM.render(
                <div>
                <Card />
                <Card />
                <Card /> 
                </div>
, document.getElementById('root'));

replicates the card, or component generated 

Note

Cannot use class, use ClassName (class is a reserved word)

5

Manipulating component with div using abbreviated tachyon package

In card.js

<div className="bg-light-green dib br3 pa3 ma2 grow">

for background light green 
dib 
border
padding 
margin
grow (animation)

add two more 

bw2 
shadow-5

<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

6 

Adding Properties

create a new file, example, robots.js
Import in index.JSX

Note - For files you're importing,
The ones set to default can just be there name written as is 
For files with multiple expots, use destructuring, {}

in index.js

import { robots } from '/robots'

7

Now we can give create properties in index.js div

                <div>
                <Card id={robots[0].id} name ={robots[0].name} email={robots[0].email}/>
                <Card id={robots[1].id} name ={robots[1].name} email={robots[1].email}/>
                <Card id={robots[2].id} name ={robots[2].name} email={robots[2].email}/>
                </div>

/
7.1 

Nothing has changed when adding these because we need to

go to our component and accept parameters, props 
props.name 
and props.email 

from this 

const Card = () => {
	return (
		<div>
		<img alt='robots' src='' />
		<div>
		<h2>Jane Doe</h2>
		<p>jane.doe@gmail.com</p>
		</div>
		</div>
		);
}

to:

const Card = (props) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='robots' src='https://robohash.org/test?200x200' />
		<div>
		<h2>{props.name}</h2>
		<p>{props.email}</p>
		</div>
		</div>
		);
}

7.2

add text center:

const Card = (props) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='robots' src='https://robohash.org/test?200x200' />
		<div>
		<h2>{props.name}</h2>
		<p>{props.email}</p>
		</div>
		</div>
		);
}

8 

We lets add id's to randomize robot hash 

const Card = (props) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='robots' src={'https://robohash.org/${props.id}?200x200'} />
		<div>
		<h2>{props.name}</h2>
		<p>{props.email}</p>
		</div>
		</div>
		);
}

9 

We can use destructuring

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={'https://robohash.org/${id}?200x200'} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

and further 

use bat ticks for syntax inside of javascript function, made that mistake
and fixed in index.js file




