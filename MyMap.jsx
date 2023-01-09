import React, { Component } from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from './../Data/countries.json';
import "leaflet/dist/leaflet.css";
import './MyMap.css';
import Strip from './Strip.jsx';


class MyMap extends Component {
    state= {};

componentDidMount(){
    console.log(mapData);
}
    countryStyle={
        fillColor:"#000080",
        fillOpacity: 1,
        color: "black",
        weight: 2,
        
    };


    onEachCountry = (country, layer) => {
        const countryName= country.properties.ADMIN
        const rUsers= country.properties.Users
        console.log(rUsers);
        console.log(countryName);
        layer.bindPopup(countryName+" React Users:"+rUsers);

        const a=rUsers;
        if(rUsers>250000){
            layer.options.fillOpacity = 1;
        }
        else if(rUsers>200000 && rUsers<250000)
        {layer.options.fillOpacity = 0.95}
        else if(rUsers>150000 && rUsers<200000)
        {layer.options.fillOpacity = 0.75}
        else if(rUsers>100000 && rUsers<150000)
        {layer.options.fillOpacity = 0.6}
        else if(rUsers>50000 && rUsers<100000)
        {layer.options.fillOpacity = 0.5}
        else if(rUsers>20000 && rUsers<50000)
        {layer.options.fillOpacity = 0.4}
        else{layer.options.fillOpacity = 0.15}

        // layer.options.fillOpacity = a;
    }
    render(){
        return(<div>
        <h1 style={{textAlign:"center", height:"10vh"}}>React Js Users</h1>
        <MapContainer style={{height:"80vh"}} zoom={2} center={[20,100]}>
            <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry}></GeoJSON>


        </MapContainer>
        <Strip />
        </div>)
    }
}
export default MyMap;
