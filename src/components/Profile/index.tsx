import React from 'react'
import Card from '../../components/Card';

type User = {
  id: object,
  name: { title: string, first: string, last: string },
  email: string,
  phone: string,
  cell: string,
  picture: object, 
  location: { city: string },
  gender: string,
  dob: object,
  login: object,
  nat: string,
  registered: object,
}

type Props = {
  user?: User
}

function Profile({ user }: Props) {
  const {
    name,
    email,
    phone,
    cell,
    picture,
    location,
    gender,
  } = user || {};

  const isEmptyUser = (user && Object.keys(user).length === 0) || !user;
  if(isEmptyUser) {
    return null
  }

  return (
    <div>
      <Card>
        <ul>
          <li>
            <p>Name: {name && `${name?.title} ${name?.first} ${name?.last}`}</p>
          </li>
          <li>
            <p>Email: {email && email}</p>
          </li>
          <li>
            <p>Phone/Cell: {phone && phone}/{cell && cell}</p>
          </li>
          <li>
            <p>Location: {location && location?.city}</p>
          </li>
          <li>
            <p>Gender: {gender && gender}</p>
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default Profile
