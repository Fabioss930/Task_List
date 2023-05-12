import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    < AuthProvider>
    <RoutesApp />
    <GlobalStyle />
    </ AuthProvider>
  )
}

export default App