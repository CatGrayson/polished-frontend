import React, { Component } from 'react'
import { Card, Button, Icon, Label } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'

class PolishCardViews extends React.Component {
    
    constructor(props){
        super(props)
    }
    state = {
        isFlipped: false
    }
    handleClick = this.handleClick.bind(this)

    handleClick(e) {
        e.preventDefault()
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    render() {

        const PolishCardFront = props => {
            return (
            <div classname="card">
            <Card color="black">
                <Card.Content>
                    <Card.Header>{this.props.polish.brand}</Card.Header>
                        <Card.Meta classname="image_link">
                           <img src={this.props.polish.image_link} />
                        </Card.Meta>
                            <br/>
                    <Card.Description classname="colour_name">{this.props.polish.name}</Card.Description>
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
                            <Button onClick={this.handleClick} basic color='teal'>
                                Click for Details
                            </Button>
            </Card>
            </div>
            )
        }

        const PolishCardBack = props => {
            return (
                <div classname="card">
            <Card color="black">
                    <Card.Content>
                        <Card.Header>Polish Details</Card.Header>
                        <br/>
                        <Card.Description classname="description">
                            {this.props.polish.description}
                        </Card.Description>
                    </Card.Content>
                     <Button color='red'>Add to Favs</Button>
                </Card>
                </div>
            )
        }
        // console.log("what is the props?",this.props)
        return (
            <div className="card">
            <Card.Group>
                   <br/>
                <ReactCardFlip isFlipped={this.state.isFlipped}>
                   <PolishCardFront key="front"polish= {this.props.polish}>
                        <Button onClick={this.handleClick} basic color='teal'>
                    Click for Details
                        </Button>
                   </PolishCardFront>
                    <PolishCardBack key="back">
                        <Button onClick={this.handleClick}>Click to Close</Button>
                    </PolishCardBack>
                </ReactCardFlip>
               </Card.Group>
                
            </div>
        )
    }    
}

export default PolishCardViews