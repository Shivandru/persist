import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./AllRoutes/AllRoutes";
const MY_API_KEY = `9e602d0e64bd4cdcada8b85c510f88e1`;
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
