import React from 'react';

const UserDetails = (props) => {

  const uPicResized = props.uPic.replace("/s96-c", '');
  return (
    <section className="profile-section">
      <div className='user-details'>
        <img src={uPicResized} alt='profile' />
        <div className="text-content">
          <p>Welcome <span>{' ' + props.uName + '!'}</span></p>
        </div>
      </div> 
    </section>
  );
}

export default UserDetails;
