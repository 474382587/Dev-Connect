import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
    const onLogout = e => {
        e.preventDefault();
        logout();
    };

    const authLinks = (
        <ul>
            <li>
                <Link to="/dashboard">
                    {' '}
                    <i className="fas fa-user" /> Dashboard
                </Link>
            </li>
            <li>
                <a href="#" onClick={onLogout}>
                    <i className="fas fa-sign-out-alt" /> <span>Logout</span>
                </a>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li>
                <a href="profiles.html">Developers</a>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">
                    <i className="fas fa-code" /> DevConnector
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};
Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {
    logout
})(Navbar);