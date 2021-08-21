import React from 'react';

type DisplayTypes = {
  children: Object,
}

const Display = (props: DisplayTypes) => {
  return (
    <div className='kulso'>
      {props.children}
    </div>
  )
}

export default Display;