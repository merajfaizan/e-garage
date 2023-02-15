import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Routes/Router/Router";

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
