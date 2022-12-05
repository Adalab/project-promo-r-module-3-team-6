import React from 'react';
/* import PropTypes from 'prop-types'; */
import defaultAvatar from '../images/default_image.jpg';
// import '../styles/components/Profile.scss';

function Profile(props) {
  const avatar = props.person.photo === '' ? defaultAvatar : props.person.photo;
  return (
    <div
      className="preview__box2 js_preview_picture js_cardPic"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

/* Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
}; */

export default Profile;
