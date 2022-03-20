import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="JAVA - KOTLIN / ANDROID" rating="3" />
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="3" />
        <Skill title="NODE" rating="2" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Espagnol" rating="4" />
        <Skill title="Anglais" rating="3" />
      </div>
      <Interests />
    </>
  )
}

export default Skills
