import './App.css';
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Users from "./components/Users";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import 'materialize-css';
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
// import {useEffect, useState} from "react";
import {useAuth} from "./hooks/useAuth.hook";

function App() {

    // const {isAuth} = useAuth();
    // console.log(isAuth)

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
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/new-post'>
                    <NewPost />
                </Route>
                <Route path='/registration'>
                    <RegistrationForm />
                </Route>
                <Route path='/login'>
                    <LoginForm />
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
