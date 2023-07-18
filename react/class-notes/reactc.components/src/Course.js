import React from 'react'

const Course = ({title ,description}) => {
    // props üstteki gibi tanımlanacağı gibi alttaki gibi de tanımlanabilir
    // const {title , description} = props;

  return (
    <div>
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default Course