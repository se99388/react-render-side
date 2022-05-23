import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log('auth is:', auth);
  //use Link to navigate inside react app. Use <a/> to tell browser to navigate outside your app.
  const authBtn = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            {' '}
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li> {authBtn}</li>
        </ul>
      </div>
    </nav>
  );
};
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
