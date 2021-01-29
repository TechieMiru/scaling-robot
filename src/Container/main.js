import React, { Component } from 'react'
import Sidebar from './sideBar/sidebar';
import Cursor from "../Component/Cursor";
import User from "../Container/UserComponent/user";


export class Main extends Component {
    render() {
        return (
            
            <div>
                <div class=" lg:flex lg:h-screen lg:justify-center lg:items-center">
                        <Cursor/>
                        <Sidebar/>
                        <User/>
                </div>
            </div>                
        )
    }
}

export default Main
