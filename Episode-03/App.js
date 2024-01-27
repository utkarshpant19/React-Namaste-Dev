import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement(JS Object) => render => HTML Element
const heading = React.createElement (
  'h1',
  {id: 'heading'},
  'Hi my name is Utkarsh'
);

console.log (heading);
const root = ReactDOM.createRoot (document.getElementById ('root'));

// JSX => Babel transpiles JSX to React.createElement => ReactElement(JS Object) => render => HTML Element

const jsxHeading = <h1 id="heading">Hi my name is Utkarsh</h1>;

// React Component

const Title = () => <h1>React Title Component</h1>;

const Header = () => (
  <div id="container">
    <Title />
    <h2 className="heading">This is Header Component</h2>
    {jsxHeading} {/* Can write any JS inside {} */}
    
  </div>
);

console.log (jsxHeading);
console.log (Header);
root.render (<Header/>);
