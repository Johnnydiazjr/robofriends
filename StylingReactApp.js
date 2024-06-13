Styling React App
// Styling React App

create css file 

start cracking 

for example:

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(to left, rgba(232,245,39,.8) to right, rgba(245,223,39,.8)100%);
}   

@font-face {
font-family: 'Blade Runner Movie Font';
font-style: normal;
font-weight: normal;
src: local('Blade Runner Movie Font'), url('blade_runner.woff') format('woff');
}

h1 {
    font-family: 'Blade Runner Movie Font';
}

Download font and css code 

https://www.cufonfonts.com/

Font should be in a .woff file, drag that into the project folder
put code into CSS like above. Should be in src folder 

Nothing changes on to the project page 

Link by doing the following

In order for it to work we must import it to our component file 
In this case App.js

now Import 

import './App.css';

Using tachyons we can make the font bigger 





