import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import AccessibilityIcon from '@material-ui/icons/Accessibility';

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="Stéphane Da Silveira" width="50%" />
      <h1 className="user__name">Stéphane Da Silveira</h1>
      <p className="user__profession">Développeur d'application</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 2 la garouillasse 33920 Civrac-de-Blaye
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33698851544">0698851544</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:stephanedasil@gmail.com">stephanedasil@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 25 Août 1976
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Tarbes
        </p>
        <p className="user__rqth">
          <AccessibilityIcon /> RQTH sans aménagement de poste
        </p>
      </div>
    </div>
  )
}

export default User
