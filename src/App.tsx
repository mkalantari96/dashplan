import React from "react";
import logo from "./logo.svg";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { Store } from "./store/store";

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
