/**
 * Created by lee on 10/13/17.
 */

import React, { Component } from 'react';

export default class Placesitem extends  Component {

    constructor(props) {
        super(props);
        this.config = this.config.bind(this);
        this.rateStars = this.rateStars.bind(this);
        this.bounceMarker = this.bounceMarker.bind(this);
        this.stopBounce = this.stopBounce.bind(this);
    }

    config() {
        return {
            itemPhotoSize : {
                maxWidth: 80,
                maxHeight: 91
            }
        }
    }

    bounceMarker() {
        this.props.place.marker.setAnimation(google.maps.Animation.BOUNCE);
    }

    stopBounce() {
        this.props.place.marker.setAnimation(null);
    }

    rateStars(num) {
        let stars = [];
        for(let i = 0; i < num; i++) {
            stars.push(
                <span><img key={i} src='./assets/star.png' /></span>
            )
        }
        return stars
    }

    render() {
        const {place} = this.props.place;

        // const  img = this.props.place.place.photos ? this.props.place.place.photos[0].getUrl(this.config().itemPhotoSize) : './assets/no_image.png';
        const  img = place.photos ? place.photos[0].getUrl(this.config().itemPhotoSize) : './assets/no_image.png';

        // return(
        //     <div className="item-box" onMouseOver = {this.bounceMarker} onMouseOut={this.stopBounce}>
        //         <div className="item-text">
        //             <strong>{this.props.place.place.name}</strong>
        //             {this.props.place.place.rating ?<p>{this.rateStars(this.props.place.place.rating)}<span>&nbsp;&nbsp;&nbsp;{'$'.repeat(this.props.place.place.price_level)}</span></p> : <p>{'$'.repeat(this.props.place.place.price_level)}</p>
        //             }
        //             <p>{this.props.place.place.formatted_address}</p>
        //             <p>{this.props.place.place.opening_hours.open_now ? "Open" :"Closed"}</p>
        //         </div>
        //         <img className='item-image' src={img} />
        //     </div>
        // )

        return(
            <div className="item-box" onMouseOver = {this.bounceMarker} onMouseOut={this.stopBounce}>
                <div className="item-text">
                    <strong>{place.name}</strong>
                    { place.rating ?<p>{this.rateStars(place.rating)}<span>&nbsp;&nbsp;&nbsp;{'$'.repeat(place.price_level)}</span></p> : <p>{'$'.repeat(place.price_level)}</p>
                    }
                    <p>{place.formatted_address}</p>
                    <p>{place.opening_hours.open_now ? "Open" :"Closed"}</p>
                </div>
                <img className='item-image' src={img} />
            </div>
        )
    }
}