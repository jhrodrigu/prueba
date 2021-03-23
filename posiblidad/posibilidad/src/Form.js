import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            lname: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, lname } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Nombre</label>
                <input
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="job">Apellido</label>
                <input 
                    type="text" 
                    name="lname" 
                    id="lname"
                    value={lname} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Agregar
                </button>
            </form>
        );
    }
}

export default Form;