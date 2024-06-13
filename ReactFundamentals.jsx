React App Folder Structure 
React App Folder Structure 

React Scripts 

Where the magic happens 
Enables us to run commands such as Test 

Creativity 
Control
Impact 

Creativity 
Control 
Impact 

As we run react in the background it is constantly
linting and testing

Version numbers are locked in package-lock
To be able to work anywhere around the world 

Readme tells you what you can to do 

gitignore 

a dot file is a configuration file is

Tells whenever we run a git commands
Checks to see we wont commit, we will ignore anything under
dependencies written in the

Icon is the favicon, react logo 

DS Store 

is a common common mac specific thing that people
mistakenly upload to github 

Things we don't want to push 

Src are the libraries

Public 

holds favicon 
index.html - html page that renders

As programmers we will be working on src folder

React lives in src, it is where the logic is 

Index.js

Will  have document.getElementById('root')

Grab the script div 

How to stay on top of upgrading react app

How to stay on top of changes 

Two things 

One is what we saw in previous video with reactrender

First thing we do to build react app is to start with index.js file is
import reach from reach 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

The above are packages and below is the connector 

import reactdom from react-dom

Then imports the CSS

then import app from happens

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//
Dont worry about report web vitals 

We are focusing on index.js and app.js 

Which allow us to build components and react app

With react we are using html plus creating our own custom
html-like syntax with jsx

To be a good react developer is learning to work in the source
folder. Building good components 

USE JSX format for React
use JSX format for React

Read the documentation 

react.dev/learn 
Subscribe to the blog








