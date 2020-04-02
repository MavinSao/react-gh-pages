import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import ViewItem from './components/ViewItem';
import AddArticle from './components/AddArticle';
import Category from './components/Category';
import About from './components/About';
import {strings} from './localization/string'

export const baseURL = "http://110.74.194.124:15011/";

export default class App extends Component {

  constructor(props){
    super(props)
    this.changeLanguage.bind(this)
  }

  changeLanguage = (lang)=>{
    strings.setLanguage(lang);
    this.setState({});
  }

  render() {
    return (
        <BrowserRouter>
        <div>
            <Menu language={this.changeLanguage}/>
            <Route exact path="/" component={ArticleList}/>  
            <Route path="/detail/:id" component={ViewItem}/>  
            <Route exact path="/addUpdate" component={AddArticle}/>  
            <Route path="/addUpdate/:id" component={AddArticle}/> 
            <Route path="/Category" component={Category}/> 
            <Route path="/About" component={About}/> 
        </div>  
      </BrowserRouter>
    )
  }
}



