import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MyBlogs from './pages/MyBlogs'
import CreateEditBlog from './pages/CreateEditBlog'
import Users from './pages/Users'
import FollowingList from './pages/FollowingList'
import FollowerList from './pages/FollowerList'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/myblogs" element={<MyBlogs />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route
          path="/createblog"
          element={
            <CreateEditBlog pageTitle={'Create Blog'} btnText={'Create Blog'} />
          }
        ></Route>
        <Route
          path="/editblog"
          element={
            <CreateEditBlog pageTitle={'Edit Blog'} btnText={'Edit Blog'} />
          }
        ></Route>
        <Route path="/followinglist" element={<FollowingList />}></Route>
        <Route path="/followerlist" element={<FollowerList />}></Route>
      </Routes>
    </Router>
  )
}

export default App
