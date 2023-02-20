import React from 'react';
import { Layout } from 'antd';
import './dashboard.css';
import Navbar from 'components/navbar';
import { Outlet } from "react-router-dom";

const { Header } = Layout;

export function Dashboard() {

    return (
        <Layout>
            <Header className='Navbar' style={{width: '100%'}}>
                <div className="Logo" style={{ float: 'left', width: 64, height: 64 }}/>
                <Navbar />
            </Header>
            <Outlet  style={{ height: '100%' }}/>
        </Layout>
    )
}

export default Dashboard;