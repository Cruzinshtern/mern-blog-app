import { useDispatch } from "react-redux";
import './App.css';
import {getAllPosts} from "./actions/posts";
import {useEffect} from "react";
import Posts from "./components/Posts";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])


  return (
    <div>
      <Posts />
    </div>
  );
}

export default App;
