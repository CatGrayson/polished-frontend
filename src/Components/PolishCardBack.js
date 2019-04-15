import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const PolishCardBack = props => {

   
        return(
            <div classname="card">
            <Card.Group>
                <Card color="black">
                    <Card.Content>
                        <Card.Header>Polish Details</Card.Header>
                        <br/>
                        <Card.Description classname="polish_description">
                            {props.polish.description}
                        </Card.Description>
                    </Card.Content>
                     <Button color='red'>Add to Favs</Button>
                </Card>
            </Card.Group>
            </div>
        )
    }


export default PolishCardBack