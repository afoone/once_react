import React from 'react';
import Datasource from './Datasource';

class CommentList extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        // "DataSource" es alguna fuente de datos global
        comments: DataSource.getComments()
      };
    }
  
    componentDidMount() {
      // Suscribirse a los cambios
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      // Eliminar el manejador de eventos de cambios
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      // Actualizar el estado del componente cuando la fuente de datos cambie
      this.setState({
        comments: DataSource.getComments()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  }

  export default CommentList