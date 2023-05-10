const { useState, useEffect } = React
const { Link, NavLink } = ReactRouterDOM

import { MenuModal } from "./menu-modal.jsx"

export function AppHeader() {
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        <MenuModal />
    }, [isClicked])

    function openMenu() {
        return <h1>hello</h1>
    }

    console.log("isClicked:", isClicked)
    // function openMenu() {
    //     return (
    //     )
    // }

    return <header className="app-header">
        <Link to="/">
            <h3><i className="fa-solid fa-envelope"></i></h3>
        </Link>


        <nav>
            <svg onClick={() => setIsClicked(!isClicked)} className="gb_g header-menu" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
            {isClicked && <MenuModal/>}
        </nav>

    </header>
}
