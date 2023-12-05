import React, { useState } from 'react'
import "./style.scss"

function Header() {

  const [toggleState, setToggleState] = useState(false)

  function toggle() {
    document.body.classList.toggle("darkMode")
    setToggleState(!toggleState)
  }


  return (
    <header>
      <div className="headerCont">
        <h1>Where is the world?</h1>
        <div><button onClick={() => toggle()}>{toggleState ? <i class="fa-regular fa-sun"></i> : <i class="fa-regular fa-moon"></i>} Change Theme</button></div>

      </div>
    </header>
  )
}

export default Header