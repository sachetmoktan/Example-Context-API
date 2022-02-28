import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import UserCreation from "./components/users";
import PostsMain from "./components/posts";
// Context Provider
import UsersState from "./context/users/usersState";
import PostsState from "./context/posts/postsState";

function App() {
  return (
    <PostsState>
      <UsersState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/users" element={<UserCreation />} />
              <Route exact path="/posts" element={<PostsMain />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UsersState>
    </PostsState>
  );
}

export default App;
