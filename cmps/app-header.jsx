const { useState, useEffect } = React
const { Link, NavLink } = ReactRouterDOM

import { MenuModal } from './menu-modal.jsx'

export function AppHeader() {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    ;<MenuModal />
  }, [isClicked])

  console.log('isClicked:', isClicked)

  return (
    <header>
      <section className="main-header">
        <Link to="/">
          <div className="logo-container flex align-center">
            <img className="horse-logo" src="assets/img/horse-logo.png" />
            <h3 className="brand-name">Appsus</h3>
          </div>
        </Link>
        <nav>
          <svg
            onClick={() => setIsClicked(!isClicked)}
            className={isClicked ? 'active gb_g hamburger' : 'gb_g hamburger'}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </nav>
      </section>

      {isClicked && <MenuModal />}
    </header>
  )
}
