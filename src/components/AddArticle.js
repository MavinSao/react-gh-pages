import React, { Component } from 'react'
import {Form,Container,Button,Image} from 'react-bootstrap'
import Axios from 'axios';
import { baseURL } from '../App';
import { BoxLoading } from 'react-loadingg';

const initState = {
            id: '',
            title : '',
            description : '',
            imageFile : null,
            imageURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
            titleError: '',
            descriptionError: '',
            isLoading : false
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

    addUpdate(article){
        if (this.state.id !== undefined){
            Axios.put(`${baseURL}v1/api/articles/${this.state.id}`,article).then(res=>{
                this.setState({
                    isLoading : false
                })
                this.props.history.goBack()
                
            })
        }else{
            Axios.post(`${baseURL}v1/api/articles`,article).then(res=>{
                this.setState({
                    isLoading : false
                })
                this.props.history.goBack()
            })
        }
    }

    addUpdateArticle(){
        
        const isValid = this.validate()
        if (isValid){
        let file = new FormData()
        file.append('FILE',this.state.imageFile)
        this.setState({
            isLoading : true
        })

        Axios.post(`${baseURL}v1/api/uploadfile/single`,file).then(res=>{
            var Article = {
                TITLE : this.state.title,
                DESCRIPTION : this.state.description,
                IMAGE: res.data.DATA
            } 
            this.addUpdate(Article)
        }).catch(err=>{
            console.log(err);   
            var Article = {
                TITLE : this.state.title,
                DESCRIPTION : this.state.description,
                IMAGE : this.state.imageURL
            } 
            this.addUpdate(Article)        
        })

        }    
    }

    fetchOneArticle(id){
        Axios.get(`${baseURL}v1/api/articles/${id}`).then(res => {
            this.setState({
                title : res.data.DATA.TITLE,
                description : res.data.DATA.DESCRIPTION,
                imageURL : res.data.DATA.IMAGE
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

    handleFile = (e)=>{
        this.setState({
            imageFile : e.target.files[0]
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
                <div>{this.state.isLoading? <BoxLoading /> : null}</div>
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
                <Form>
                    <Form.Label>Image</Form.Label>
                    <Form.File 
                        id="custom-file"
                        label="Custom file input"
                        onChange = {this.handleFile.bind(this)}
                        custom
                    />
                </Form> <br/>
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
