import { useDispatch } from "react-redux";
import './App.css';
import { getAllPosts } from "./actions/posts";
import { useEffect } from "react";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Users from "./components/Users";
import Test from "./components/Test";
import NewPost from "./components/NewPost";
import 'materialize-css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch]);

  return (
    <div>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/users'>
                    <Users />
                </Route>
                <Route path='/posts'>
                    <Posts />
                </Route>
                <Route path='/test/:id'>
                    <Test />
                </Route>
                <Route path='/new-post'>
                    <NewPost />
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
