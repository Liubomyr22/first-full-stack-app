import Home from "./pages/home/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import TopBar from "./containers/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/" component={user ? Home : Register} />
        <Route path="/register" component={user ? Home : Register} />
        <Route path="/login" component={user ? Home : Login} />
        <Route path="/write" component={user ? Write : Register} />
        <Route path="/settings" component={user ? Settings : Register} />
        <Route path="/post/:postId" component={Single} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
