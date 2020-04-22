import React, { Component } from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'

export class ModalImage extends Component {


  
  render() {
    return (
      <Modal trigger={this.props.trigger} basic size='small'      closeIcon>
        <Header content={this.props.titulo} />
        <Modal.Content>
          <img alt={this.props.titulo} src={this.props.imageUrl} style={{width: "100%"}}></img>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalImage
