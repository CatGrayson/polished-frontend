import React, { Component } from 'react'
import PolishCard from './PolishCard'
import PolishFavorites from './PolishFavorites'
import { Card } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import PolishLogin from './PolishLogin'
import { Switch, Route } from 'react-router-dom'


class PolishContainer extends Component {
    
    toggleCard = polish => {

    }

    render() {
        return(
            <div>





                <Grid celled>
                    <Grid.Row columns={2}>
                    <Grid.Column width={10}>   
                        <Card.Group itemsPerRow={3}>
                        {this.props.polishes.map(polish => <PolishCard polish={polish} /> )} 
                        </Card.Group>
                        </Grid.Column>

                        <Grid.Column floated='left' width={5}>
                        
                        <PolishFavorites />
                        
                        </Grid.Column>

                    </Grid.Row> 
                 </Grid>
            </div>
        )
    }

}



export default PolishContainer