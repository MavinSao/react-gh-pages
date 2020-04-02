import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import { strings } from '../localization/string'
export default class About extends Component {
    render() {
        return (
            <Container className="App">
                <h1>{strings.about}</h1>
                <img src="https://ugc.futurelearn.com/uploads/images/d8/af/d8af6c2e-2762-407e-8914-e24e6d63e258.jpg" width="100%s"/>
                <p>Management is the brain of an enterprise. A manager keeps himself in touch with the current environment and supplies foresight to the enterprise. He helps in predicting what is going to happen in future which will influence the working of an enterprise.</p>
            </Container>
        )
    }
}
