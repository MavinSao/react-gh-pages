import React, { Component } from 'react'
import {Form,Container,Button} from 'react-bootstrap'
import Axios from 'axios';
import { baseURL } from '../App';

const initState = {
            id: '',
            title : '',
            description : '',
            titleError: '',
            descriptionError: ''
}
export default class AddArticle extends Component {
    constructor(props){
        super(props);
        this.state = initState
    }

    validate = () => {
       let titleError= '';
       let descriptionError= '';
       if (!this.state.title){
           titleError = "Title can not be blank";
       }
       if (!this.state.description){
        descriptionError = "Description can not be blank";
       }
       if (titleError || descriptionError){
           this.setState({
               titleError,
               descriptionError
           })
           return false;
       }
       return true;
    }

    addUpdateArticle(){
        const isValid = this.validate()
        if (isValid){
        let Article = {
            TITLE : this.state.title,
            DESCRIPTION : this.state.description,
            IMAGE : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiXKwrfWSgPKeIIm04C2wrx28cgV-brGlI4PQDR6K_fhCnkRCu&usqp=CAU'
        }
        console.log(Article);
        if (this.state.id !== undefined){
            Axios.put(`${baseURL}v1/api/articles/${this.state.id}`,Article).then(res=>{
                console.log("work");
                this.props.history.goBack()
            })
        }else{
            Axios.post(`${baseURL}v1/api/articles`,Article).then(res=>{
                this.props.history.goBack()
            })
        }

        }
        
    }

    fetchOneArticle(id){
        Axios.get(`${baseURL}v1/api/articles/${id}`).then(res => {
            this.setState({
                title : res.data.DATA.TITLE,
                description : res.data.DATA.DESCRIPTION
            })
        })     
    }

    handler(e){
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        })
         
    }
    componentWillMount(){
        this.setState({
            id : this.props.match.params.id
        })
        if (this.props.match.params.id !== undefined){
            this.fetchOneArticle(this.props.match.params.id)
        }
    }
    
    render() {
        return (
            <Container>
                <h1 className="App my-4">{ this.state.id === undefined? "Add Article" : "Update Article"}</h1>
                <Form>
                <Form.Group controlId="title">
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter Title" value={this.state.title}
                    onChange = {this.handler.bind(this)}
                    />
                    <div style={{color:"red"}}>{this.state.titleError}</div>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>DESCRIPTION</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Enter Description" value={this.state.description}
                    onChange = {this.handler.bind(this)}
                    />
                    <div style={{color:"red"}}>{this.state.descriptionError}</div>
                </Form.Group>
                <Button variant="secondary" size="lg" 
                   onClick = {()=>{
                       this.addUpdateArticle()
                   }}
                >Submit</Button>{' '}
                </Form>
            </Container>
        )
    }
}
