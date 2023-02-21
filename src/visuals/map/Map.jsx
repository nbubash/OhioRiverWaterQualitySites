import { MapContainer, TileLayer, Marker, GeoJSON, Popup } from "react-leaflet";
import React, { Component } from 'react';
import "./styles.css";
import surveyPoints from 'data/Feb18SiteData.json';
import river from 'data/ohioriver.json';
import train from 'data/eastpalestinetrainderailment.json';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {}
}
  
  render() {
    console.log('SP',surveyPoints);
    const {data} = this.props;
    return (
      <div className="map">
        <MapContainer center={[14, -80]} zoom={4} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
          />
          {/* {data.map((item, index) => (
              <Marker key={index} position={[item.ITD_Y, item.ITD_X]}>
                <Popup>
                  OID: {item.OID_}<br/>
                  CaseID: {item.CASENUMBER}<br/>
                  Office: {item.Office}
                </Popup>
              </Marker>
          ))} */}
          <GeoJSON data={surveyPoints} />
          <GeoJSON data={river} />
          <GeoJSON data={train} />
        </MapContainer>
      </div>
    );
  }
}