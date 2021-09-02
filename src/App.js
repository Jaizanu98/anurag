import Header from "./components/header";
import Login from "./components/login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from "./components/gallery";
import Chat from "./components/chat";
import Signup from "./components/signup";


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Route component={Login} path="/login"></Route>
        <Route component={Gallery} path="/gallery"></Route>
        <Route component={Chat} path="/chat"></Route>
        <Route component={Signup} path="/signup"></Route>

      </Router>
    </div>
  );
}

export default App;