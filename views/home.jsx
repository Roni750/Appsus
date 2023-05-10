const { NavLink, Link } = ReactRouterDOM
const { Fragment } = React
import { MenuModal } from "../cmps/menu-modal.jsx"

export function Home() {
    return (
        <section className="home">
            <h2>Welcome to Appsus!</h2>
            <p>Introducing our revolutionary new app that seamlessly integrates email and notes to streamline your daily productivity. With our app, you can easily switch between writing notes and composing emails without missing a beat. Say goodbye to jumping between multiple apps and hello to a more productive you. Try it out today and see the difference for yourself.</p>

            {/* <div className="apps-card">
                <Link to="/"><img className="books-logo" src="../assets/img/books-logo.png" /><p>Books</p></Link>
                <Link to="/mail"><img className="gmail-logo" src="../assets/img/gmail-logo.png" /><p>Mail</p></Link>
                <Link to="/note"><img className="keep-logo" src="../assets/img/keep-logo.png" /><p>Keep</p></Link>
            </div> */}
        </section>
    )
}