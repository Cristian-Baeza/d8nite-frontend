import React from 'react'
import ProfileComponent from '../components/ProfileComponent'
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"



function ProfilePage({ user }) {


  return (
    <div>
              <NavbarComponent />
              <ProfileComponent user={user} />
              <FooterComponent />
    </div>
  )
}

export default ProfilePage