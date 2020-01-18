import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './NavTabs';

class PupsterContainer extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
}

export default PupsterContainer;

