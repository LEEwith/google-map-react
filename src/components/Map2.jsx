/**
 * Created by lee on 10/12/17.
 */
import React, { Component } from 'react';
import Script from 'react-load-script';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scriptLoaded:false,
            center: null
        }
    }

    createMap() {
        // const {config} = this.props;
        const mapOptions = {
            zoom: 13,
            center: {lat: 37.782703500000004, lng: -122.4194},
        }
        return new google.maps.Map(this.refs.map, mapOptions)
    }

    handleScriptLoad() {
        this.setState({
            scriptLoaded: true
        });
        this.loadMap();
    }

    loadMap() {
        // const {config} = this.props;

            // create the map and markers after the component has
            // been rendered because we need to manipulate the DOM for Google =(
            this.map = this.createMap();
            const searchBox = new google.maps.places.SearchBox(this.refs.sinput);
    }



    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(pos);
                this.setState({position: pos});
            });
        }

    }


    render() {
        const Google_API_Key = "AIzaSyAb4MTeKj-xxGmt8YzydfgyR-w118abVYc";
        let url = "https://maps.googleapis.com/maps/api/js?key="+Google_API_Key+"&libraries=places";
        return(
            <div>
                <Script
                    url={url}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
                <input id="pac-input" ref = "sinput" className="search-box" type="text"/>
                <div ref='map' style={{width: "100%", height: "100%"}}></div>
            </div>
        );
    }
}

export default Map;
