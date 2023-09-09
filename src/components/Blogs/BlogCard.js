import axios from 'axios'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import '../../App.css'

function BlogCard({ props }) {
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState()
  const [textBody, setTextBody] = useState()
  const userData = JSON.parse(localStorage.getItem('user'))
  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/blog/deleteBlog/${props._id}`
      )
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => alert(err))
  }

  const handleSubmit = (blogId) => {
    const blogObj = {
      blogId,
      title,
      textBody,
    }
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

  return (
    <Card className="m-5">
      <Card.Body>
        <div className="blog_heading">
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>{props.username}</Card.Title>
        </div>
        <Card.Text>{props.textBody}</Card.Text>
        <Button
          className="m-2"
          variant="primary"
          onClick={() => setIsEdit(!isEdit)}
        >
          Edit
        </Button>
        <Button className="m-2" variant="danger" onClick={handleDelete}>
          Delete
        </Button>

        {isEdit ? (
          <Form
            className="register_form"
            onSubmit={() => handleSubmit(props._id)}
          >
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
            <Button type="submit">Edit Blog</Button>
          </Form>
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  )
}

export default BlogCard
