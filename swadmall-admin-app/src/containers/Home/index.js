import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

function Home() {
  return (
   <Layout>
    <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
        <h1>Welcome to Admin Dashboard</h1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </Jumbotron>
   </Layout>
  )
}

export default Home