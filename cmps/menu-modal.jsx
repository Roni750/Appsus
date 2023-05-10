const { NavLink } = ReactRouterDOM

export function MenuModal() {

    return (
            <div className="apps-menu">
                <div className="apps-container">
                <NavLink to="/"><img className="books-logo" src="../assets/img/books-logo.png" /><p>Books</p></NavLink>
                <NavLink to="/about"><img className="about-logo" src="../assets/img/about-logo.png" /><p>About</p></NavLink>
                <NavLink to="/mail"><img className="gmail-logo" src="../assets/img/gmail-logo.png" /><p>Mail</p></NavLink>
                <NavLink to="/note"><img className="keep-logo" src="../assets/img/keep-logo.png" /><p>Keep</p></NavLink>
                </div>
            </div>
        
    )
}