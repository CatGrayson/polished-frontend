import React, { Component } from 'react'
import { Card, Button, Icon, Label } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'

class PolishCardViews extends Component {
    
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
            <div>
            
                <Card color="pink">
                <Card.Content>
                    <Card.Header>{this.props.polish.brand}</Card.Header>
                        <Card.Meta className="image_link">
                           <img src={this.props.polish.api_featured_image} />
                        </Card.Meta>
                    <Card.Description className="colour_name">{this.props.polish.name}</Card.Description>
                    <Card.Description className="colour_name">${this.props.polish.price}</Card.Description>
                    
                    <Button as='div' labelPosition='left' onClick={()=> this.props.handleLike(this.props.polish)} >
                    
                    <Button color='pink' size='mini'><Icon name='heart'></Icon></Button>
                            <Label as='a' basic color='pink' pointing='left'>
                            {props.polish.rating === null ? 0 : props.polish.rating}
                            </Label>
                            </Button>
                            <Button onClick={this.handleClick} basic color='teal'>
                                Click for Details
                            </Button>
                            </Card.Content>
            </Card>
          
            </div>
            )
        }

        const PolishCardBack = props => {
            return (
                <div>
                    {/* <Card.Group> */}
                    <Card color="pink">
                    <Card.Content>
                        <Card.Header>Polish Details</Card.Header>
                        <br/>
                        <Card.Description className="description">
                            {this.props.polish.description}
                        </Card.Description>
                   
                     <Button onClick={() => this.props.handleAdd(this.props.polish) && this.handleClick} basic color='purple'>Add to Favorites</Button>
                     </Card.Content>
                </Card>
                {/* </Card.Group> */}
                </div>
            )
        }
      
        return (
            <div>
           
        
                  
                <ReactCardFlip isFlipped={this.state.isFlipped}>
               
                
                   <PolishCardFront key="front"polish= {this.props.polish}>
                       
                   </PolishCardFront>
                    <PolishCardBack key="back">
                        
                    </PolishCardBack>
                    
                    
                 </ReactCardFlip>
           
               
                
            </div>
        )
    }    
}

export default PolishCardViews