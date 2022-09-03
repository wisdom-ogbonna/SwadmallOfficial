import React from 'react'
import Layout from '../../components/Layout'
import { Jumbotron } from 'react-bootstrap'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'




function Signup(props) {
  return (
    <Layout>
      <Container>

        <Row style={{ marginTop: "20px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="first Name"
                    placeholder="first Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
                <Col md={6}>
                  <Input

                    label="first Name"
                    placeholder="first Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
              </Row>
              <Input

                label="Email"
                placeholder="Enter Email"
                value=""
                type="email"
                onChange={() => { }}
              />

              <Input

                label="Password"
                placeholder="Enter password"
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

export default Signup