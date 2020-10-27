
import React from "react"
import './User.scss';


const User = (props) => {
  const { user } = props
  const {
    name,
    phone,
    website,
    address,
    company,
    email,
    username,
  } = user
  const { city } = address
  const { catchPhrase } = company
  return (
    <div key={user.id} className="user-card">
      <div className="user-card__header">
        <h3 className="user-card__title">{name}</h3>
        <h4>username: {username}</h4>
      </div>
      <div className="user-card__body">
        <h4 className="user-card__text">{phone}</h4>
        <p className="user-card__text--bold">{city}</p>
        <p className="user-card__text--italic">Catch Phrase: "{catchPhrase}"</p>
      </div>
      <div className="user-card__footer">
        <a className="user-card__text--link" href={website}>{website} || {email}</a>
      </div>
    </div >
  )
}

export default User
