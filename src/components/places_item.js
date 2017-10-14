/**
 * Created by lee on 10/13/17.
 */

import React, { Component } from 'react';

export default class Placesitem extends  Component {

    constructor(props) {
        super(props);
        this.config = this.config.bind(this);
        this.rateStars = this.rateStars.bind(this);
    }

    config() {
        return {
            itemPhotoSize : {
                maxWidth: 80,
                maxHeight: 91
            }
        }
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
        const  img = this.props.place.photos ? this.props.place.photos[0].getUrl(this.config().itemPhotoSize) : './assets/no_image.png';

        return(
            <div className="item-box">
                <div className="item-text">
                    <strong>{this.props.place.name}</strong>
                    {this.props.place.rating ?<p>{this.rateStars(this.props.place.rating)}<span>&nbsp;&nbsp;&nbsp;{'$'.repeat(this.props.place.price_level)}</span></p> : <p>{'$'.repeat(this.props.place.price_level)}</p>
                    }
                    <p>{this.props.place.formatted_address}</p>
                    <p>{this.props.place.opening_hours.open_now ? "Open" :"Closed"}</p>
                </div>
                <img className='item-image' src={img} />
            </div>
        )
    }
}