import React, { Component } from 'react'
import {Navbar,Nav,Button,Form,FormControl, Container,Jumbotron} from 'react-bootstrap'
import { connect } from 'react-redux'
import {searchArticle} from './../actions/articleAction'
import {Link} from 'react-router-dom'
import { strings } from "../localization/string"

class Menu extends Component {

    changeLanguage = (lang)=>{
        strings.setLanguage(lang);
        this.props.language(lang);
        this.setState({});
    }

    render() {
        return (
            <div>
                  <Navbar bg="dark" variant="dark">
                      <Container>
                        <Link to="/">
                        <Navbar.Brand>AMS</Navbar.Brand>
                        </Link> 
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" >{strings.home}</Nav.Link>
                        <Nav.Link as={Link} to="/Category" >{strings.category}</Nav.Link>
                        <Nav.Link as={Link} to="/About" >{strings.about}</Nav.Link>
                        <Nav.Link onClick={()=>{this.changeLanguage('kh')}} >{strings.khmer}</Nav.Link>
                        <Nav.Link onClick={()=>{this.changeLanguage('en')}} >{strings.english}</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder={strings.search}className="mr-sm-2" 
                            onChange={(e)=>{
                                this.props.searchArticle(e.target.value)
                            }}
                        />
                        <Button variant="outline-info">{strings.search}</Button>
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
