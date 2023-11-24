//scss
import "./index.css";

// importing dependecis
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// importing different components
import App from "./App";
import AuthContext from './Contex/AuthContext'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </AuthContext>

);
