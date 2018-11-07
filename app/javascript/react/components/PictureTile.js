import React from 'react';

const PictureTile = props => {

  let imgsrc = ""
  if (props.profile_photo) {
    imgsrc = props.profile_photo.url
  }

  return(
    <div>
      <img className="show-page-image" src={imgsrc} />
    </div>
  )
}

export default PictureTile
