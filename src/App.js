
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Links from "./components/Links"
import NavLinks from './components/NavLinks'

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route path="/profile/:id" component = {Profile} />
        <Route path="/profile" exact component = {Profile} />
        <Route path="/about" component = {About} />
        <Route path="/" exact component = {Home} />
        <Route component = {NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
