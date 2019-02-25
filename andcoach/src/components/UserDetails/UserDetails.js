import React from 'react';

const UserDetails = (props) => {

  const uPicResized = props.uPic.replace("/s96-c", '');
  return (
    <div className='user-details'>
      <img src={uPicResized} alt='profile' />
      <div className="text-content">
        <p>Welcome {' ' + props.uName}!</p>
      </div>

    </div>
  );
}

export default UserDetails;
