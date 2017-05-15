import React from 'react';

/**
 * The footer of the site
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <a href="http://www.republic.capital">Republic</a> &copy; 2017 creativeLabs.
        <span className="float-right">Powered by <a href="http://www.republic.capital">Oscar</a></span>
      </footer>
    )
  }
}

export default Footer;
