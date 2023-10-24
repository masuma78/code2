import React from 'react'

const PersonalInfo = (props) => {
  return (
    <div className="personal-info">
    <h1>Bio Data of {props.name}</h1>
      <p><strong>Name :</strong> {props.name} </p>
      <p><strong>Age :</strong> {props.age} </p>
      <p><strong>Gender :</strong> {props.gender} </p>
        <p><strong>Email :</strong> {props.email} </p>
        <p><strong>Phone :</strong> {props.phone} </p>
        <p><strong>Address :</strong> {props.address} </p>
      </div>
  )
}

export default PersonalInfo