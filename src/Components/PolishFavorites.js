import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard';

class PolishFavorites extends Component {
    render(){
        return(
            <div>
                <h2>Faves</h2>
                {this.props.favorites.map(polish => <FavoriteCard polish={polish} handleRemove={this.props.handleRemove} />)}
            </div>
        )
    }


}
export default PolishFavorites