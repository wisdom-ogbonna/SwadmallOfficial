import React from 'react'
import Layout from '../../components/Layout'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'




function Signin() {
  return (
    <Layout>
      <Container>

        <Row style={{ marginTop: "20px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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