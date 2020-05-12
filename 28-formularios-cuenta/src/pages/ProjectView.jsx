import React, { Component } from 'react'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import db from '../config/firebase';
import './ProjectView.css';
import ProjectChargeForm from '../components/ProjectChargeForm';
import ProjectChargeTable from '../components/ProjectChargeTable';
import { CHARGE_TYPE_EXPENSE, CHARGE_TYPE_INCOME } from '../config/config'
import DashBoard from '../components/DashBoard';

export class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            showChargeForm: false,
            charges: []
        }
    }


    componentDidMount() {
        const project = {};
        db.collection("projects").doc(this.props.match.params.id).get().then(
            res => {
                Object.assign(project, res.data());
                return db.collection("clients").doc(res.data().client).get()
            }
        ).then(
            res => {
                project.client = res.data().description;
                return db.collection("projects").doc(this.props.match.params.id).collection("charges").get()
            }
        ).then(
            res => {
                this.setState(
                    {
                        charges: res.docs.map(
                            item => {
                                return {
                                    ...item.data(),
                                    id: item.id
                                }
                            }
                        ),
                        project
                    }
                );
            }
        )
            .catch(
                console.error
            )
    }

    showChargeForm = () => {
        this.setState(
            {
                showChargeForm: !this.state.showChargeForm
            }
        )
    }

    addCharge = charge => {
        this.setState({
            charges: [...this.state.charges, charge],
            showChargeForm: false
        })

    }

    toggleCharge = idCharge => {
        console.log(idCharge, this.state.charges);

        const newCharge =
            this.state.charges.filter(
                i => i.id === idCharge
            )[0]
        newCharge.type = newCharge.type === CHARGE_TYPE_EXPENSE ? CHARGE_TYPE_INCOME : CHARGE_TYPE_EXPENSE;

        db.collection("projects").doc(this.props.match.params.id)
            .collection("charges").doc(idCharge).update(newCharge).then(
                this.setState({
                    charges: [...this.state.charges.filter(
                        i => i.id !== idCharge
                    ), newCharge],
                })
            )


    }

    render() {
        return (
            <div className="project-view">
                <Header>
                    <i aria-hidden="true" className="list icon"></i>
                    Proyecto
                </Header>
                <div className="project-container">
                    <div>
                        <ProjectCard item={this.state.project}></ProjectCard>
                        <Link to="/projects" className="ui button">Volver</Link>
                        {this.state.showChargeForm ? null :
                            <button
                                className="ui button primary show-form"
                                onClick={this.showChargeForm}
                            >
                                Nueva imputación</button>}
                    </div>
                    <div className="charge-form-container">
                        {this.state.showChargeForm ?
                            <ProjectChargeForm projectId={this.props.match.params.id}
                                addCharge={this.addCharge} />
                            : null}
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                        <ProjectChargeTable
                            projectId={this.props.match.params.id}
                            items={this.state.charges}
                            toggleCharge={this.toggleCharge}
                        />
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                        <DashBoard items={this.state.charges}></DashBoard>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectView
