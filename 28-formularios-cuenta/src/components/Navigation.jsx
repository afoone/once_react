import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <div className="ui menu">
                <Link to="/projects" className="item active">
                    <i class="list icon"></i> Proyectos
                    </Link>
                <Link to="/clients" className="item">
                    <i class="user icon"></i> Clientes
                    </Link>
                {/* <div class="right menu">
                    <div class="item">
                        <div class="ui transparent icon input">
                            <input type="text" placeholder="Search..." />
                            <i class="search link icon"></i>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Navigation
