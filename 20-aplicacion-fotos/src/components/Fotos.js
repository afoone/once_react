import React, { Component } from 'react'
import axios from 'axios'
import './Fotos.css'
import { UNSPLASH_APPLICATION, UNSPLASH_SECRET } from '../config/Unsplash'
import ModalImage from './ModalImage';

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

    getPhotos = (reiniciar = false) => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=30&page=${this.state.page}&query=${this.props.filtro}&client_id=${UNSPLASH_APPLICATION}&client_secret=${UNSPLASH_SECRET}`)
            .then(
                res => this.setState(
                    {
                        //fotos: this.state.fotos.concat(res.data.results),
                        fotos: reiniciar ? res.data.results : [...this.state.fotos, ...res.data.results],
                        page: reiniciar ? 1 : this.state.page + 1
                    }
                )
            ).catch(console.log)

        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = e => {
        console.log(window.scrollY);
        console.log(document.body.scrollHeight - window.innerHeight);
        if (window.scrollY >= (document.body.scrollHeight - window.innerHeight - 200)) {
            this.getPhotos();
        }
    }



    componentDidUpdate(prevProps, prevState) {
        window.addEventListener("scroll", this.onWindowScroll);
        console.log("filtro actual", this.props.filtro);
        console.log("filtro anterior", prevProps.filtro);
        // if (window.scrollY >= (document.body.scrollHeight-window.innerHeight-200)) {
        //     this.getPhotos();
        // }
        if (this.props.filtro !== prevProps.filtro) { this.getPhotos(true); }
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
                                    gridColumn: "span 2",
                                    gridRow: `span ${apaisada ? 1 : 2}`,
                                    height: apaisada ? "auto" : "100%"
                                }
                                const imagen = <img alt={e.alt_description} key={e.id} src={e.urls.small} style={estilo}></img>
                                return <ModalImage trigger={imagen} titulo={e.alt_description} imageUrl={e.urls.regular}></ModalImage>
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
