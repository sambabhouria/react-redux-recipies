import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button } from './../../elements/button';
import "./Navbar.css";

export default class extends Component {
  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
  };

  state = {
    collapseIn: false,
  };

  render() {
    const { name, url, children } = this.props;

    return (
      <nav
        className={classNames("navbar", "navbar-default")}
        style={{ borderRadius: 0 }}
      >
        <div className={"container-fluid"}>
          <div className={"navbar-header"}>
            <button
              type="button"
              className={classNames("navbar-toggle", "collapsed")}
              onClick={() => {
                this.setState({ collapseIn: !this.state.collapseIn });
              }}
            >
              <span className={"sr-only"}>Toggle navigation</span>
              <span className={"icon-bar"} />
              <span className={"icon-bar"} />
              <span className={"icon-bar"} />
            </button>
            <a href="#" className={"navbar-brand"}>
              {name}
            </a>
          </div>
          <div
            className={classNames("collapse", "navbar-collapse", {
              ["in"]: this.state.collapseIn,
            })}
          >
            {children}
            <Button
              className={classNames("navbar-btn", "navbar-right")}
              btnStyle="flat"
              onClick={() => {
                window.location = url;
              }}
            >
              <i className="fa fa-github" />
              GitHub
            </Button>
          </div>
        </div>
      </nav>
    );
  }
}
