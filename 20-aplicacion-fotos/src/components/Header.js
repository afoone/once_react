import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div className="ui two item menu inverted">
                {/* <a className="active item">Posts</a> */}
                <Link to="/posts" className="item">Posts</Link>
                <Link to="/fotos" className="item">Fotos</Link>
            </div>
        )
    }
}

export default Header
