const { NavLink, Link } = ReactRouterDOM
const { Fragment } = React
import { MenuModal } from '../cmps/menu-modal.jsx'

export function Home() {
  return (
    <section className="home">
      <h2>Welcome to Appsus!</h2>
      <p>
        Introducing our revolutionary new app that seamlessly integrates email
        and notes to streamline your daily productivity. With our app, you can
        easily switch between writing notes and composing emails without missing
        a beat. Say goodbye to jumping between multiple apps and hello to a more
        productive you. Try it out today and see the difference for yourself.
      </p>
    </section>
  )
}
