import React, { Component } from 'react'
import axios from 'axios'
import './Fotos.css'

export class Fotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fotos: [],
            page: 1
        }
    }


    componentDidMount() {
        this.getPhotos();
        
    }

    getPhotos = () => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=20&page=${this.state.page}&query=mountain&client_id=ap9CjpGv1KQL1_NUBugcP7F1JuMxCSDt9SeyPL9hGSc&client_secret=wujp4hUZplKTxdMIeeCzj8r0IUtKWgKmfRY-QJIU7SU`)
        .then(
            res => this.setState(
                {
                    //fotos: this.state.fotos.concat(res.data.results),
                    fotos: [...this.state.fotos, ...res.data.results],
                    page: this.state.page + 1
                }
            )
        ).catch(console.log)

        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = e => {
        console.log(window.scrollY);
        console.log(document.body.scrollHeight-window.innerHeight);
        if (window.scrollY >= (document.body.scrollHeight-window.innerHeight-200)) {
            this.getPhotos();
        }
    }

    componentDidUpdate() {
        window.addEventListener("scroll", this.onWindowScroll);
    }

    onMasClick = e => {
        this.getPhotos();
    }


    render() {
        console.log(this.state.fotos)
        return (
            <>
                <div className="fotos" >
                    {
                        this.state.fotos.map(
                            e => {
                                const apaisada = e.height < e.width;
                                const estilo = {
                                    gridColumn: `span ${apaisada?2:1}`
                                }
                                return <img alt={e.alt_description} key={e.id} src={e.urls.small} style={estilo}></img>
                            }
                        )
                    }
                </div>
                {/* <div className="fotos-mas" onClick={this.onMasClick}>------ Más ------</div> */}
            </>
        )
    }
}

export default Fotos
