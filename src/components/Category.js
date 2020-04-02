import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCategory} from './../actions/categoryAction'
import {Container,Table,Jumbotron} from 'react-bootstrap'
import { strings } from '../localization/string'
class Category extends Component {
    componentWillMount(){
      this.props.fetchCategory()
    }
    render() {
        return (
            <div>
                <Jumbotron className="App">
                    <h1>{strings.category}</h1>
                </Jumbotron>
                <Container>  
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>{strings.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories.map(category => 
                            <tr>
                                <td>{category.ID}</td>
                                <td>{category.NAME}</td>
                            </tr>
                        ) 
                        }
                    </tbody>    
                </Table>
                </Container>               
            </div>
        )
    }
}

const mapStateToProps = (store)=>{
    return{
        categories : store.categoryR.categories
    }
}

export default connect(mapStateToProps, {fetchCategory})(Category)

