import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

class FavoriteCard extends Component {
    render(){
        return(
            <div>
                <Card.Group centered>
                <Card>
                <Card.Content>
                <Image floated='left' size='mini' src={this.props.polish.image_link} />
                    <Card.Header>{this.props.polish.name}</Card.Header>
                    <Card.Meta>{this.props.polish.brand}</Card.Meta>
                    <Button onClick={() => this.props.handleRemove(this.props.polish)} size='mini' basic color='violet' content='Remove' />
                </Card.Content>
                </Card>
                </Card.Group>

            </div>
        )
    }


}

export default FavoriteCard;