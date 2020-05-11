import React, { Component } from 'react'
import Header from './Header'
import './Pomodoro.css'
import Mensaje from './Mensaje';
import Sound from 'react-sound'

export class Pomodoro extends Component {

    // 25 mt - 5md - 25mt - 5md - 25mt - 5m - 25mt - 15md

    configuracion = {
        descansoLargo: 900,
        descansoCorto: 300,
        trabajo: 1500,
        cortoPorCadaLargo: 3
    }

    constructor(props) {
        super(props);
        this.state = {
            tiempo: this.configuracion.trabajo,
            running: false,
            working: true,
            descansosCortos: 0,
            mensaje: null,
            timeRunning: this.configuracion.trabajo,
            play: false
        }
        this.interval = null;
    }

    _nextDescanso() {
        if (this.state.descansosCortos === this.configuracion.cortoPorCadaLargo - 1) {
            return {
                descansosCortos: 0,
                tiempo: this.configuracion.descansoLargo,
            }
        } else {
            return {
                descansosCortos: this.state.descansosCortos + 1,
                tiempo: this.configuracion.descansoCorto
            }
        }
    }

    timeFinished = () => {
        const descanso = this._nextDescanso();
        console.log(descanso);
        this.setState(
            {
                tiempo: this.state.working ?
                    descanso.tiempo : this.configuracion.trabajo,
                working: !this.state.working,
                descansosCortos: !this.state.working ? descanso.descansosCortos
                    : this.state.descansosCortos,
                running: false,
                mensaje: this.state.working ? "Descansando" : "Trabajando",
                timeRunning: this.state.working ?
                    this.configuracion.descansoCorto : this.configuracion.trabajo,
                play: true
            }
        )
    }

    onStart = () => {
        this.interval = setInterval(
            () => {
                if (this.state.tiempo === 0) {
                    //clearInterval(this.interval);
                    this.timeFinished();
                } else {
                    this.setState(
                        {
                            tiempo: this.state.tiempo - 1,
                            running: true
                        }
                    )
                }
            },
            1000
        )
    }

    onStop = () => {
        clearInterval(this.interval)
        this.setState(
            {
                running: false
            }
        )
    }

    onReset = () => {
        clearInterval(this.interval)
        this.setState(
            {
                tiempo: this.configuracion.trabajo,
                running: false,
                mensaje: null
            }
        )
    }

    handleSongFinishedPlaying = () => {
        this.setState(
            { play: false }
        )
        console.log("finish play")
    }

    render() {
        return (
            <div className="pomodoro" >
                <Header></Header>
                <Sound url="/ding.wav"
                    playStatus={Sound.status.PLAYING}

                ></Sound>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {Math.floor(this.state.tiempo / 60)}:
        {this.state.tiempo % 60 < 10 ? "0" : null}{this.state.tiempo % 60}
                            </div>

                            {/* <div>Descansos cortos: {this.state.descansosCortos}</div> */}

                            {this.state.mensaje ?
                                <>
                                    <Mensaje mensaje={this.state.mensaje}></Mensaje>
                                    <Sound url="/ding.wav"
                                        playStatus={this.state.play ? Sound.status.PLAYING : Sound.status.STOPPED}
                                        onFinishedPlaying={this.handleSongFinishedPlaying}
                                    ></Sound>
                                </>
                                : null}
                        </div>
                        <div className="ui red progress">
                            <div className="bar"
                                style={{ width: (100 - (Math.floor(this.state.tiempo * 100 / this.state.timeRunning))) + "%" }} >
                                <div className="progress" ></div>
                            </div>
                            {/* <div class="label">Uploading Files</div> */}
                        </div>
                        <div className="extra content">
                            <div className="ui three buttons">
                                <div className={`ui basic green button ${this.state.running ? "disabled" : ""}`}
                                    onClick={this.onStart}>
                                    Start</div>
                                <div className={`ui basic red button ${this.state.running ? "" : "disabled"}`} onClick={this.onStop}>
                                    Stop</div>
                                <div className="ui basic blue button" onClick={this.onReset}>
                                    Reset</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pomodoro