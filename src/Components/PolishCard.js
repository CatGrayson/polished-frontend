import React from 'react'
import { Card } from 'semantic-ui-react'

const PolishCard = () => {

    return (
        <div className="card">
        <Card.Group>
           <Card color='pink'>
               {/* <Image src='' /> */}
               <Card.Content>
                   <Card.Header>Polish Name</Card.Header>
                   <Card.Meta>Other stuff</Card.Meta>
                   <Card.Description>Polish Info</Card.Description>
               </Card.Content>
           </Card>
           </Card.Group>
            {/* <h2>{props.polish.name}</h2> */}
            {/* <img className="polish-img" src{props.polish.image} /> */}

        </div>
    )
}

export default PolishCard