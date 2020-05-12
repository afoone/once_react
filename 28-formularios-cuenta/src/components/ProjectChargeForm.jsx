import React, { useState } from 'react'
import { DateInput } from 'semantic-ui-calendar-react';
import './ProjectChargeForm.css'
import db from '../config/firebase'
import { CHARGE_TYPE_EXPENSE, CHARGE_TYPE_INCOME } from '../config/config';

const ProjectChargeForm = props => {

    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date())
    const [type, setType] = useState(CHARGE_TYPE_EXPENSE)



    const onImporteChange = e => {
        setAmount(e.target.value.replace(/[^0-9.,]/g, ''))
    }


    const handleDateChange = (event, { name, value }) => {
        setDate(value);
    }


    const onSubmit = e => {
        e.preventDefault();
        const newCharge = {
            subject,
            amount: parseFloat(amount),
            date,
            type
        }
        db.collection("projects").doc(props.projectId).collection("charges")
            .add(newCharge).then(() => {
                setSubject("");
                setAmount("");
                setDate("");
                setType("");
                props.addCharge(newCharge)
            }
            )
    }

    return (
        <div className="project-change-form">
            <div className="ui card">
                <div className="content">
                    <form class="ui form">
                        <div class="field">
                            <label>Concepto</label>
                            <input type="text" name="subject" placeholder="Concept"
                                value={subject} onChange={e => setSubject(e.target.value)} />
                        </div>
                        <div class="field">
                            <label>Importe</label>
                            <input type="text" name="amount" placeholder="Importe"
                                value={amount} onChange={onImporteChange} />
                        </div>
                        <div class="field">
                            <label>Fecha</label>
                            <DateInput
                                name="date"
                                placeholder="Fecha"
                                value={date}
                                iconPosition="left"
                                onChange={handleDateChange}
                            />
                        </div>
                        <div className="field">
                            <label>Tipo</label>
                            <select value={type} onChange={e => setType(e.target.value)}>
                                <option>{CHARGE_TYPE_INCOME}</option>
                                <option>{CHARGE_TYPE_EXPENSE}</option>
                            </select>
                        </div>
                        <button class="ui button primary" style={{ float: "right" }}
                            onClick={onSubmit}
                            type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectChargeForm
