import React from 'react'
import { Card } from 'semantic-ui-react'

const PolishCard = (props) => {

    return (
        <div className="card">
        <Card.Group>
           <Card color="pink">
               <Card.Content>
                   <Card.Header>{props.polish.brand}</Card.Header>
                   <Card.Meta classname="image_link">
                       <img src={props.polish.image_link} />
                   </Card.Meta>
                   <Card.Description classname="colour_name">{props.polish.name}</Card.Description>
               </Card.Content>
           </Card>
           </Card.Group>
            
        </div>
    )
}

export default PolishCard