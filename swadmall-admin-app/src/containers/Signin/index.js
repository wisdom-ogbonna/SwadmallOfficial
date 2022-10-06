import React from 'react'
import Layout from '../../components/Layout'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch } from 'react-redux'



const Signin = (props) => {

  const dispatch = useDispatch()

  const userLogin = (e) => {
    e.preventDefault();
    
    const user = {
    email: 'wisdomogbonna777@gmail.com',
    password: '123456'
  }

    dispatch(login(user));
  }
  return (
    <Layout>
      <Container>

        <Row style={{ marginTop: "20px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input

                label="Email"
                placeholder="Enter Email"
                value=""
                type="email"
                onChange={() => { }}
              />

              <Input

                label="Password"
                placeholder="Enter Passowrd"
                value=""
                type="password"
                onChange={() => { }}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}

export default Signin