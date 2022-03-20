import "./App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import Cursus from "./components/FormationsExperiences"
import DarkMode from "./components/DarkMode"

function App() {

  return (

    <div className="App">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />

          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <Cursus />
        </div>
      </div>
      {/* react, material ui, react-html2pdf */}
      {/* Installation, Nettoyage & paramétrage */}
      {/* Variables CSS */}
      {/* Colonne de gauche * /} 

      {/* Détails personnels - User */}
      {/* Compétences - skills */}
      {/* Langues - skills */}
      {/* Centres d'intérêts - interests */}
      {/* Colonne de droite * /} 

      {/* Profil - profil */}
      {/* Formation  - education */}
      {/* Expériences professionelles - experiences */}
      {/* Ligth & Dark mode */}
      {/* Export PDF (react-html2pdf) */}
    </div>

  )
}

export default App
