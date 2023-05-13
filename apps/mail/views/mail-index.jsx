const { useState, useEffect } = React

import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailSideList } from '../cmps/mail-side-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailDraggableCompose } from '../cmps/mail-draggable-compose.jsx'
import { mailService } from '../services/mail.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailIndex() {
  const [mails, setMails] = useState([])
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [isComposeClicked, setIsComposeClicked] = useState(false)

  useEffect(() => {
    loadMails()
  }, [filterBy, mails])

  function loadMails() {
    mailService.query(filterBy).then((mails) => {
      setMails(mails)
    })
  }

  function onSetFilter(filterByUser) {
    setFilterBy(filterByUser)
  }

  function addMail(newMail) {
    mailService.save(newMail).then((mail) => {
      mails.unshift(mail)
      setMails(mails)
    })
    showSuccessMsg('Your mail Sent ')
  }

  function onToggleCompose() {
    setIsComposeClicked(!isComposeClicked)
  }

  function setStared(mail) {
    mail.isStared = !mail.isStared
    mailService.save(mail)
  }

  function removeMail(mail) {
    if (mail.status === 'trash') {
      mailService.remove(mail.id).catch((err) => {
        console.log('Had issues removing the mail', err)
      })
    } else {
      mail.status = 'trash'
      mailService.save(mail)
    }
    showSuccessMsg('your mail deleted')
  }

  function setReadMail(mail) {
    mail.isRead = false
    mailService.save(mail)
  }

  function setToggleRead(mail) {
    mail.isRead = !mail.isRead
    mailService.save(mail)
  }

  function saveDraft(mail) {
    mailService.save(mail)
  }

  return (
    <main className="mail-index-container">
      <MailFilter onSetFilter={onSetFilter} />
      <section className="mail-container">
        <MailSideList
          mails={mails}
          onSetFilter={onSetFilter}
          onToggleCompose={onToggleCompose}
        />
        <MailList
          mails={mails}
          setStared={setStared}
          removeMail={removeMail}
          onSetFilter={onSetFilter}
          setReadMail={setReadMail}
          setToggleRead={setToggleRead}
        />
        {isComposeClicked && (
          <MailDraggableCompose
            addMail={addMail}
            onToggleCompose={onToggleCompose}
            saveDraft={saveDraft}
          />
        )}
      </section>
    </main>
  )
}
