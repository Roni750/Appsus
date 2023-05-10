const { useEffect, Fragment } = React
const { NavLink } = ReactRouterDOM

export function MenuModal({ isClicked }) {

    return (
        <Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail"><img src="../assets/img/gmail-logo.png" /></NavLink>
            <NavLink to="/note">Note</NavLink>
        </Fragment>
    )
}