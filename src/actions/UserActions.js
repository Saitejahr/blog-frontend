import axios from 'axios'
const registerUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/user/register`,
    data
  )
  return res
}

export default registerUser
