import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./AllRoutes/AllRoutes";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
