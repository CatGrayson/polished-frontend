import React from 'react';
// import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react'
// import PolishLogin from './PolishLogin';
// import PolishSort from './PolishSort';


const PolishHeader = (props) => {
    return(
        <div className="header">
            <Segment>
                <Header as='h1' textAlign='center'>
                P O L I S H E D
                </Header>
            </Segment>
        {/* <PolishSort /> */}
        </div>
    )
}

export default PolishHeader