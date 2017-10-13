import React, { Component } from 'react';
import PlacesIndex from './places_index';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: {lat: 37.782703500000004, lng: -122.4194},
            places: [],
            allPlaces: [],
            getDetails: null,
            detailMarker: null,
            placeDetails: null,
            shouldUpdate: true
        };
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

        /**
         * loading map to div-id = map
         */
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: this.state.position
        });

        /**
         * input connect google-inner searchBox function
         */
        const input = document.getElementById('pac-input');
        const searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        /**
         * @type {google.maps.places.PlacesService}
         * Nearby Search Requests
         */
        const service = new google.maps.places.PlacesService(map);

        service.nearbySearch({
            location: this.state.position,
            radius: 500,
            type: ['store']
        }, serviceCallback);



        const serviceCallback = (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        const createMarker = (place) => {
            const placeLocation = place.geometry.location;
            const marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent(place.name);
                infoWindow.open(map, this);
            });
        };

        /**
         *  add EventListner part
         */

        map.addListener('bounds_changed', function() {
            console.log('bounds_changed');// 如果你把地图往下拉的时候会出现
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener('places_changed', () => {
            //get input search box 地址信息， 保存在places里面
            let places = searchBox.getPlaces();
            console.log('plcaes',places);
            let allPlaces = [];

            if (places.length == 0) return;

           // For each place, get the icon, name and location.
            let bounds = new google.maps.LatLngBounds();
            places.forEach(place =>{
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                console.log('plcae',place);

                const icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                const marker = new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                });

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }

                // allPlaces.push({
                //     place: place,
                //     marker: marker
                // });

            }); // end of places for each

            this.setState({
                places: places,
                });

            map.fitBounds(bounds);


        });// end of the searchBox add Event Listener
    }


    render() {
        return(
            <div>
                <div>
                    <input id="pac-input" className="search-box" type="text"/>
                    <div id='map' style={{width: "100%", height: "100%"}}></div>
                </div>
                <PlacesIndex
                    places = {this.state.places}
                />
            </div>
        );
    }
}

export default Map;
