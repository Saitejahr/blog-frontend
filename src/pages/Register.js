import { useEffect } from 'react'
import InputForm from '../components/Register/InputForm'

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem('user')) {
      window.location.href = '/homepage'
    } else {
      window.location.href = '/login'
    }
  }, [])
  return (
    <div>
      <InputForm />
    </div>
  )
}
export default Register
