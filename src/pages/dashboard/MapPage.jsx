import React, { Component } from 'react';
import { Layout } from 'antd';
import Map from 'visuals/map/Map';
import './MapPage.css';


const { Content } = Layout;


export default class MapPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {
        return (
            <Layout >
                <Content className='Map'>
                    <Map data = {[]} />
                </Content>
            </Layout>
        )
    }
}