## Ep -07: Finding the Path

### Creating routes inside app

```javascript
npm i react-router-dom
```

- Create `routing configuration` in `App.js` by importing createBrowserRouter

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <ErrorComponent /> },
  { path: "/about", element: <AboutComponent /> },
]);

// Provide this appRouter to RouterProvider

root.render(<RouterProvider router={appRouter} />);
```

- `create-router-dom` provides a special hook for Handling error Components `useRouteError()` returns an `Error Object` which provides more information about the Error.

- To read route parameters from url, react-router-dom provides a hook `useParams()`
