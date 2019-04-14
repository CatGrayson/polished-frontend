import React from 'react'
import { Card, Button, Icon, Label } from 'semantic-ui-react'

const PolishCard = (props, {polishes, toggleButton}) => {

    return (
        <div className="card">
        <Card.Group>
           <Card color="black">
               <Card.Content>
                   <Card.Header>{props.polish.brand}</Card.Header>
                   <Card.Meta classname="image_link">
                       <img src={props.polish.image_link} />
                   </Card.Meta>
                   <Card.Description classname="colour_name">{props.polish.name}</Card.Description>
               </Card.Content>
               <Button as='div' labelPosition='left'>
                    <Button color='pink'>
                        <Icon name='heart'>
                        </Icon>
                    </Button>
                    <Label as='a' basic color='pink' pointing='left'>
                        0
                    </Label>
               </Button>
               <Button onClick={() => toggleButton(polishes)} basic color='teal'>
                Click for Details
               </Button>
           </Card>
           </Card.Group>
            
        </div>
    )
}

export default PolishCard