import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

import { logout } from "../../redux/authActionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }

    render() {
        return (
            <Routes>
                <Route element={<Navigate to="/" />} />
            </Routes>
        );
    }
}

export default connect(null, mapDispatchToProps)(Logout);
