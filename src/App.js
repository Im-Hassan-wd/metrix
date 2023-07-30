import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Chat from "./pages/chats/Chat";

// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/chats">
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
