import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'

function CreateEditBlog({ pageTitle, btnText }) {
  const [title, setTitle] = useState()
  const [textBody, setTextBody] = useState()
  const userData = JSON.parse(localStorage.getItem('user'))

  const handleSubmit = (e) => {
    e.preventDefault()
    const blogObj = {
      title,
      textBody,
    }

    if (pageTitle === 'Create Blog') {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/blog/createBlog/${userData.userId}`,
          blogObj
        )
        .then((res) => {
          alert('Blog created successfully!')
          window.location.href = '/myblogs'
        })
        .catch((err) => {
          alert(err)
        })
    } else {
      axios
        .put(
          `${process.env.REACT_APP_SERVER_URL}/blog/editBlog/${userData.userId}`,
          blogObj
        )
        .then((res) => {
          alert('Blog edited successfully!')
          window.location.href = '/myblogs'
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
  return (
    <div>
      <Header />
      <Form className="register_form" onSubmit={handleSubmit}>
        <h1 className="mb-5">{pageTitle}</h1>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textBody">
          <Form.Label>Text Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Enter text body"
            onChange={(e) => setTextBody(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">{btnText}</Button>
      </Form>
    </div>
  )
}
export default CreateEditBlog
