import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FirebaseContext } from "../context/FireBaseContext"

const Login = () => {
  const navigate = useNavigate()

  const { setCurrentUser } = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()


    setCurrentUser({
      email:e.target[0].value,
      password:e.target[1].value
    })


    navigate(-1)

  }

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="pasword" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required

          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default Login
