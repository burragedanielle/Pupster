import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PupsterContainer extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    render() {
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={About} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/search" component={Search} />
            </div>
        </Router>
    }
}

