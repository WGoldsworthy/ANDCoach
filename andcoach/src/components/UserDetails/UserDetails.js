import React from 'react';

const UserDetails = (props) => {
  return (
    <div className='UserDetails'>
      Welcome {' ' + props.firstName}!
      <img src={props.profilePic} />
      {/* Welcome Krisz!
      <img src="https://via.placeholder.com/150" /> */}
    </div>
  );
}

export default UserDetails;
