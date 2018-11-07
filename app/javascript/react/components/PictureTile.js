import React from 'react';

const PictureTile = props => {
  return(
    <div>
      <img className="show-page-image" src={props.profile_photo} />
    </div>
  )
}

export default PictureTile
