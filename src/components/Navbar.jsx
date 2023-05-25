import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
    setShowSearch(!showSearch);
    setInputValue('');
  };

  return (
    <nav className="nav-main">
        
        <div className="nav-style">
            <div className="logo">
                <p className=" torre-logo">torre</p>
                <p className=" co-logo">.co</p>
            </div>
          
            {!showSearch ? (
          <button className="zoom" type="button" onClick={() => setShowSearch(true)}>
            <img className="searcher" src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" alt="" />
          </button>
            ) : (
            <form onSubmit={handleFormSubmit}>
                <input type="text" id="search" name="search" value={inputValue} onChange={handleInputChange} placeholder="Enter your username..."  className="bg-transparent outline-none border border-secondary rounded-xl p-2 placeholder:p-2"/>
                <button className="search-btn" type="submit">
                    
                </button>
            </form>
            )}
        
    
        </div>
    </nav>
  );
};

NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NavBar;
