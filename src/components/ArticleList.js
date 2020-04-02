import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArticle, searchArticle, deleteArticle } from './../actions/articleAction'
import {Container, Table, Button, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BoxLoading } from 'react-loadingg';
import { strings } from "../localization/string";

class ArticleList extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false
        }
    }
    componentWillMount(){ 
        console.log("Article Loading");    
        this.props.fetchArticle()
    } 
    componentDidMount(){



    }

    render() {
        return (
            <div>
            <div>{this.state.isLoading? <BoxLoading /> : null}</div>
            <Jumbotron className="App">
                    <h1>{strings.titleApp}</h1>
                    <p>
                    MOST POPULAR LEADERSHIP AND MANAGEMENT ARTICLES 
                    </p>
                    <p>
                        <Link to="/addUpdate">
                        <Button variant="primary">{strings.addNew}</Button>
                        </Link>
                    </p>
            </Jumbotron>
            <Container>  
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th style={{width:"20%"}}>{strings.title}</th>
                        <th style={{width:"40%"}}>{strings.description}</th>
                        <th>{strings.thumbnail}</th>
                        <th>{strings.action}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.articles.map(article =>     
                            <tr key={article.ID}>
                                <td>{article.ID}</td>
                                <td>{article.TITLE}</td>
                                <td>{article.DESCRIPTION}</td>
                                <td> 
                                    <img src={article.IMAGE === null? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' : article.IMAGE} width="80px" height="80px"/>
                                 </td>
                                <td>
                                    <Link to={`/detail/${article.ID}`}>
                                        <Button variant="secondary" size="sm">{strings.view}</Button>
                                    </Link>
                                    <Link to={`/addUpdate/${article.ID}`}>
                                    <Button variant="info" size="sm" className="mx-2">{strings.update}</Button>
                                    </Link>
                                    <Button variant="danger" size="sm" 
                                        onClick = {()=>{
                                            this.props.deleteArticle(article.ID)
                                        }}
                                    >{strings.delete}</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    </Table>
            </Container>
            </div>
        )
    }
}

//Sub to Store
const mtp = (store) => {       
    return {
        articles: store.articleR.articles
    }
}
//Connect 
export default connect (mtp, { fetchArticle, searchArticle, deleteArticle })(ArticleList)
