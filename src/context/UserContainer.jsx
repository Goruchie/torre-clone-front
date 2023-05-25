import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import Technologies from '../components/Technologies'

const UserContainer = () => {
  const [userData, setUserData] = useState(null);

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`https://torre-clone-back.onrender.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log('Error fetching user:', error);
      setUserData(null);
    }
  };

  useEffect(() => {
    // Fetch the default user initially
    fetchUser('marcosgualtero43253');
  }, []);

  return (
    <main className='home-cont'>
      <NavBar onSearch={fetchUser} />
      {userData && <Header user={userData} />}
      {userData && <Technologies user={userData} />}      
    </main>
  );
};

export default UserContainer;
