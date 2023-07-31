import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Chat from "./pages/chats/Chat";

// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  // states
  const [mobileMenu, setMobileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="App">
      {mobileMenu && (
        <div
          onClick={() => {
            setMobileMenu(false);
          }}
          className="overlay"
        />
      )}
      <Router>
        <Sidebar
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          screenWidth={screenWidth}
        />
        <div className="container">
          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            screenWidth={screenWidth}
          />
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
