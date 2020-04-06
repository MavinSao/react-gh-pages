import React, { Component } from 'react'
import {Navbar,Nav,Button,Form,FormControl, Container,Jumbotron,NavDropdown} from 'react-bootstrap'
import { connect } from 'react-redux'
import {searchArticle} from './../actions/articleAction'
import {Link} from 'react-router-dom'
import { strings } from "../localization/string"
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Menu extends Component {

    changeLanguage = (lang)=>{
        strings.setLanguage(lang);
        this.props.language(lang);
        this.setState({});
    }

    componenpmntWillMount(){

    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/">
                        <Navbar.Brand>AMS</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" >{strings.home}</Nav.Link>
                            <Nav.Link as={Link} to="/Category" >{strings.category}</Nav.Link>
                            <Nav.Link as={Link} to="/About" >{strings.about}</Nav.Link>
                            <NavDropdown title="Language" id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={()=>{this.changeLanguage('kh')}}>{strings.khmer}</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{this.changeLanguage('en')}}>{strings.english}</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link >Logout</Nav.Link>
                            </Nav>
                            {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                logout
                            </Nav.Link>
                            </Nav> */}
                        </Navbar.Collapse>
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
