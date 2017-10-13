/**
 * Created by lee on 10/13/17.
 */

import React, { Component } from 'react';
import Placesitem from './places_item';

export default class PlacesIndex extends Component {

    constructor(props) {
        super(props);
        this.renderPlaces = this.renderPlaces.bind(this);
    }

    renderPlaces()  {
        return(
            this.props.places.map((place) => {
                return (
                        <li key={place.id}>
                            <Placesitem/>
                        </li>
                    )

            })
        )
    } // end of renderPlaces

    render() {
        return(
            <div>
                <ul className="list-group places-container">
                    render
                    {this.renderPlaces()}
                </ul>
            </div>
        )
    }
}