import React, { Component } from 'react'
import PolishCardViews from './PolishCardViews'
import PolishFavorites from './PolishFavorites'
import { Card, Grid } from 'semantic-ui-react'
import PolishLogin from './PolishLogin'
import { Switch, Route } from 'react-router-dom'


class PolishContainer extends Component {
    
    constructor(props){
        super(props)
        console.log("props polish from constructor", props)
    }

    getPolishCards = () => {
       return this.props.polishes.map((polish) => <PolishCardViews polish={polish} handleLike={this.props.handleLike} handleAdd={this.props.handleAdd} /> )
    }
    render() {
        return(
            <div>
            
                <Grid celled>
                    <Grid.Row columns={2}>
                    <Grid.Column width={11}>   
                        <Card.Group itemsPerRow={3}>

                        {this.getPolishCards()}
 
                        </Card.Group>
                        </Grid.Column>

                        <Grid.Column floated='right' width={5}>
                       <PolishFavorites favorites={this.props.favorites} handleRemove={this.props.handleRemove} />
                       
                        
                        
                        </Grid.Column>

                    </Grid.Row> 
                 </Grid>
            </div>
    
        )
    }

}
export default PolishContainer