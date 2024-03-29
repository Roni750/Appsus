const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/app-header.jsx'
import { About } from './views/about.jsx'
import { Home } from './views/home.jsx'
import { MailIndex } from './apps/mail/views/mail-index.jsx'
import { MailDetails } from './apps/mail/views/mail-details.jsx'
import { NoteIndex } from './apps/note/views/note-index.jsx'
import { NoteDetails } from './apps/note/views/note-details.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { AppFooter } from './cmps/app-footer.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/mail/:mailId" element={<MailDetails />} />
          <Route path="/note" element={<NoteIndex />}>
            <Route path="/note/:noteId" element={<NoteDetails />} />
          </Route>
        </Routes>
        <UserMsg />
      </section>
      <footer>
        <AppFooter />
      </footer>
    </Router>
  )
}
