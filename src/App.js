import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import ViewItem from './components/ViewItem';
import AddArticle from './components/AddArticle';

export const baseURL = "http://110.74.194.124:15011/";

function App() {
  return (
    <BrowserRouter>
      <div>
          <Menu/>
          <Route exact path="/" component={ArticleList}/>  
          <Route path="/detail/:id" component={ViewItem}/>  
          <Route exact path="/addUpdate" component={AddArticle}/>  
          <Route path="/addUpdate/:id" component={AddArticle}/> 
      </div>  
    </BrowserRouter>
  );
}

export default App;
