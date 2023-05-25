import React from 'react';
import PropTypes from 'prop-types';

const Header = ({user}) => {
    
    return (
      <header>
        <div>
          <img className="polygon-image" src={`${user.person?.picture}`} alt={user.person?.name} />
        </div>
        <h2 className='user-title'>{user.person?.name}</h2>
      </header>
    );
  };
  
  Header.propTypes = {
    user: PropTypes.object.isRequired,
  }
  
  export default Header;