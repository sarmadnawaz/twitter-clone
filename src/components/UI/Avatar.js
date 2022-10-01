import React from 'react';

function Avatar({imageUrl, size = 'small'}){
    return <img className={`avatar avatar-${size}`} src={imageUrl} />
}

export default Avatar;