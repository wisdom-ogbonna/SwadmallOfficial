import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css'

function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Side Bar</Col>
          <Col md={10} style={{marginLeft: 'auto' }}>Container</Col>
        </Row>
      </Container>
      {/* <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
        <h1>Welcome to Admin Dashboard</h  1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </Jumbotron> */}
    </Layout>
  )
}

export default Home