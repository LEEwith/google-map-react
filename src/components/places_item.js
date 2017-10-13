/**
 * Created by lee on 10/13/17.
 */

import React, { Component } from 'react';

export default class Placesitem extends  Component {

    constructor(props) {
        super(props);
    }

    // config() {
    //     return {
    //         itemPhotoSize : {
    //             Width: 100,
    //             height: 100
    //         }
    //     }
    // }

    render() {
        // const {place} = this.props;
        // const  img = place.photos ? place.photos[0].getUrl(config().itemPhotoSize) : './assets/img/no_image.png';
        return(
            <div>
                place-item
            </div>
        )
    }
}