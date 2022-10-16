import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css'
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <Layout sidebar>
      Home
      {/* <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
        <h1>Welcome to Admin Dashboard</h  1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </Jumbotron> */}
    </Layout>
  )
}

export default Home