import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { isUserLoggedIn, login } from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'





const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();


  
  const userLogin = (e) => {
    e.preventDefault();
    
    const user = {  
    email, password
  }

    dispatch(login(user));
  }

  if(auth.authenticate){
    return <Redirect to={'/'}/>
  }
  if(user.loading){

    return <p>Loading ..!</p>

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
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
  
              <Input

                label="Password"
                placeholder="Enter Passowrd"
                value={password}
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
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