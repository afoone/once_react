import React from 'react'

const ClientCard = props => {

    console.log("project card", props)
    return (
        <div class="ui card">
            <div class="content">
                <a class="header" href="./#">{props.item.id}</a>
                <div class="description">
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}

export default ClientCard
