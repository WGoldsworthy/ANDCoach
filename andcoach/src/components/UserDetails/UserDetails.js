import React from 'react';

const UserDetails = (props) => {

  const uPicResized = props.uPic.replace("/s96-c", '');
  console.log(uPicResized)
  return (
    <div className='user-details'>
      <img src={uPicResized} />
      <div className="text-content">
        <p>Welcome {' ' + props.uName}!</p>
      </div>
      
    </div>
  );
}

export default UserDetails;
