## Ep -09: Optimizing our App

```javascript
const Grocery = lazy(()=> import('./Components/Grocery'));

const appRouter = createBrowserRouter([
  path: '/': element: <AppLayout />,
  chilren: [
    {path: '/grocery', element: <Suspense fallback={<h1>Loading...</h1>}>
    <Grocery/>
    </Suspense> }
  ]
]);

const root = ReactDOM.createRoot(document.getElementById('root));

root.render(<RouterProvider router={appRouter}/>)

```
