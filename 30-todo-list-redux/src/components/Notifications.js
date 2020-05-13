import React from 'react'
import {connect} from 'react-redux'

const Notifications = (props) => {
    return (
        <div style={{border: "1px solid red"}}>
            Notifications

            <ul>
                {
                    props.notifications.map(
                        i => <li>{i}</li>
                    )
                }
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    }
}

export default connect(mapStateToProps)(Notifications)
