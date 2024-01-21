const root = ReactDOM.createRoot (document.getElementById ('root'));

// const heading = React.createElement('h1', {'id': 'heading', 'abc': 'xyz'}, 'Hello World From React');

/*

    <div class="parent">
        <div class="child1">
            <h1>I am an H1 tag</h1>
            <h2>I am an H2 tag</h2>
        </div> 
        <div class="child2">
            <h1>I am an H1 tag</h1>
            <h2>I am an H2 tag</h2>
        </div> 
    </div>

*/

const parent = React.createElement ('div', {id: 'parent'}, [
  React.createElement ('div', {id: 'child1'}, [
    React.createElement ('h1', {}, 'I am an h1 tag'),
    React.createElement ('h2', {}, 'I am an h2 tag'),
  ]),
  React.createElement ('div', {id: 'child1'}, [
    React.createElement ('h1', {}, 'I am an h1 tag'),
    React.createElement ('h2', {}, 'I am an h2 tag'),
  ]),
]);

console.log(parent);

root.render(parent);
