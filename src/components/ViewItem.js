import React, { Component } from 'react'
import axios from 'axios'
import { baseURL } from '../App'
import {Container} from 'react-bootstrap'
export default class ViewItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            article : {}
        }
    }
    fetchOneArticle(id){
        axios.get(`${baseURL}v1/api/articles/${id}`).then(res => {
            this.setState({
                article : res.data.DATA
            })
        })     
    }

    formatDate(){
        const date = this.state.article.CREATED_DATE + '';
        const yy = date.substring(0,4)
        const mm = date.substring(4,6)
        const dd = date.substring(6,8)
        const Dates = [yy,mm,dd]
        return Dates.join('-')
    }

    componentWillMount(){
        
        this.fetchOneArticle(this.props.match.params.id);
        
    }
    render() {
        return (
            <Container>
                <h1>{this.state.article.TITLE}</h1>
                <h4>Date : {this.formatDate()}</h4>
                <img src={this.state.article.IMAGE} width="100%"/>
                <h3>Description : </h3>
                <p>{this.state.article.DESCRIPTION}</p>
            </Container>
        )
    }
}
