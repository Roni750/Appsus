const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'
import { utilService } from '../../../services/util.service.js'
import { MailDetailsHeader } from '../cmps/mail-details-header.jsx'

export function MailDetails() {
  const [mail, setMail] = useState(null)
  const { mailId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadMail()
  }, [mailId])

  function loadMail() {
    mailService
      .get(mailId)
      .then(setMail)
      .catch((err) => {
        console.log('Had issues with this mail details', err)
        navigate('/mail')
      })
  }

  function onRemoveMail(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        navigate('/mail')
      })
      .catch((err) => {
        console.log('Had issues removing this mail', err)
      })
  }

  return (
    <section className="mail-details-main-container">
      {mail && (
        <div className="mail-details-container">
          <MailDetailsHeader mail={mail} onRemoveMail={onRemoveMail} />
          <h2>{mail.subject}</h2>
          <div className="flex space-between">
            <h5>
              from: {mail.from}{' '}
              <span className="details-email">{`<${mail.fromEmail}>`}</span>
            </h5>
            <h5 className="details-date">
              {utilService.getFormattedDate(mail.sentAt)}
            </h5>
          </div>
          <p className="mails-details-body">{mail.body}</p>
        </div>
      )}
    </section>
  )
}
