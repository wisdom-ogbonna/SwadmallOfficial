import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header'

function Layout(props) {
    return (
        <>
            <Header />
            {
                props.sidebar ?
                <Container fluid>
                <Row>
                  <Col md={2} className="sidebar">
                    <ul>
                      <li><NavLink to={'/'}>Home</NavLink></li>
                      <li><NavLink to={'/products'}>products</NavLink></li>
                      <li><NavLink to={'/orders'}>orders</NavLink></li>
                      <li><NavLink to={'/category'}>Category</NavLink></li>
                    </ul>
                  </Col>
                 
                  <Col md={10} style={{marginLeft: 'auto' }}>
                  {props.children}
                  </Col>
                 
                </Row>
            
              </Container>
              :
              props.children
            }

           


        </>
    )
}

export default Layout