import React from 'react';
import { Link } from 'react-router'

class Sidebar extends React.Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/photo'} className="nav-link" activeClassName="active"><i className="icon-user"></i> User </Link>
            </li>
            <li className="nav-item">
              <Link to={'/donut'} className="nav-link"><i className="icon-user"></i> Donut </Link>
            </li>
            <li className="nav-item">
              <Link to={'/weather'} className="nav-link"><i className="icon-user"></i> Weather </Link>
            </li>
            <li className="nav-item">
              <Link to={'/city'} className="nav-link"><i className="icon-user"></i> City </Link>
            </li>
            <li className="nav-item">
              <Link to={'/weather2'} className="nav-link"><i className="icon-graph"></i> Weather Forecast </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
