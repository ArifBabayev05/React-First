import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps = {
        name: "Unknown",
        surname: "Unknown",
        age: "Unknown",
    }

    constructor(props){
        super(props)
        this.state={
            test: 'Our Student'
        }
    }

    render() {
        //Destructing
        const { name, surname, age } = this.props;

        return (
            <div className='col-md-8 mb-4'>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className='d-inline'>{name}</h4>
                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                    </div>

                    <div className='card-body'>
                        <p className='card-text'>Surname: {surname}</p>
                        <p className='card-text'>Age: {age}</p>
                        <p>{this.state.test} </p>
                    </div>

                </div>


            </div>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}

export default User;
