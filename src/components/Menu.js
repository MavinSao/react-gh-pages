import React, { Component } from 'react'
import {Navbar,Nav,Button,Form,FormControl, Container,Jumbotron} from 'react-bootstrap'
import { connect } from 'react-redux'
import {searchArticle} from './../actions/articleAction'
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                  <Navbar bg="dark" variant="dark">
                      <Container>
                        <Link to="/">
                        <Navbar.Brand>AMS</Navbar.Brand>
                        </Link> 
                        <Nav className="mr-auto">
                        <Link to="/">
                        <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Nav.Link href="#features">Category</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                            onChange={(e)=>{
                                this.props.searchArticle(e.target.value)
                            }}
                        />
                        <Button variant="outline-info">Search</Button>
                        </Form>
                        </Container>
                   </Navbar>
            </div>
        )
    }
}

const mtp = (store)=>{
    return {
        articles: store.articleR.articles
    }
}

export default connect(mtp, {searchArticle})(Menu)
