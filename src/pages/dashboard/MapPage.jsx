import React, { Component } from 'react';
import { Layout } from 'antd';
import Map from 'visuals/map/Map';
import './MapPage.css';


const { Content } = Layout;


export default class MapPage extends Component {
    
    render() {
        return (
            <Layout >
                <Content className='Map'>
                    <Map data = {this.state.data} />
                </Content>
            </Layout>
        )
    }
}