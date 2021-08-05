import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { register } from '../modules/register';

const RegisterContainer = () => {
    return (
        <Register onRegister={register}/>
    )
}

function stateToProps(state) {
    return {
        state: state
    }
}

export default connect(stateToProps)(RegisterContainer)
