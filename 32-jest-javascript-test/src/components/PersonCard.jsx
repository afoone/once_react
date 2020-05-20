import React from 'react'

const PersonCard = (props) => {


    const {persona}  = props;
    //const persona = props.persona;

    return (
        <div className="person-card">
            <div class="ui card">
                <div class="image">
                    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
                </div>
                <div class="content">
                    <a class="header">{persona.name}</a>
                    <div class="meta">
                        <span class="date">Miembro desde el año {persona.joined}</span>
                    </div>
                    <div>
                        Hola
                    </div>
                    <div class="description">
                        {persona.quote}
                    </div>
                </div>
                <div class="extra content">
                    <a>
                        <i class="user icon"></i>
                        {persona.friends} Amigos
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PersonCard
