import { useEffect, useState } from 'react'
import UserCard from '../components/Users/UserCard'
import axios from 'axios'
import '../App.css'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button'

function Users() {
  const [users, setUsers] = useState()
  const userData = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/user/getallusers/${userData.userId}`
      )
      .then((res1) => {
        axios
          .get(
            `${process.env.REACT_APP_SERVER_URL}/follow/followingList/${userData.userId}`
          )
          .then((res2) => {
            let followingMap = new Map()

            res2.data.data.forEach((user) => {
              followingMap.set(user.username, true)
            })

            let allUserDetails = []

            res1.data.data.forEach((user) => {
              if (followingMap.get(user.username)) {
                let userObj = {
                  _id: user._id,
                  username: user.username,
                  name: user.name,
                  email: user.email,
                  follow: true,
                }
                allUserDetails.push(userObj)
              } else {
                let userObj = {
                  _id: user._id,
                  username: user.username,
                  name: user.name,
                  email: user.email,
                  follow: false,
                }
                allUserDetails.push(userObj)
              }
            })

            setUsers(allUserDetails)
          })
          .catch((err) => alert(err))
      })
      .catch((err) => {
        alert(err)
      })
  }, [userData.userId])
  return (
    <>
      <Header />
      <div className="follow_list">
        <h1 className="m-5">Users</h1>
        <div className="follow_btns">
          <Button
            className="m-2"
            onClick={() => (window.location.href = '/followinglist')}
          >
            Following List
          </Button>
          <Button
            className="m-2"
            onClick={() => (window.location.href = '/followerlist')}
          >
            Follower List
          </Button>
        </div>
      </div>

      <div className="user_page">
        {users ? users.map((user) => <UserCard props={user} />) : <></>}
      </div>
    </>
  )
}
export default Users
