import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Chat from "./pages/chats/Chat";

// components
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/chats">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
