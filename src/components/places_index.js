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

    renderPlaces() {
        return(
            this.props.places.map((place) => {
                return (
                        <li className="list-group-item" key={place.id}>
                            <Placesitem place={place}/>
                        </li>
                    )
            })
        )
    } // end of renderPlaces

    render() {
        return(
            <div>
                <ul className="list-group places-container">
                    {this.renderPlaces()}
                </ul>
            </div>
        )
    }
}