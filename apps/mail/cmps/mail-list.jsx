import { MailPreview } from './mail-preview.jsx'
import { MailHeader } from './mail-header.jsx'

export function MailList({
  mails,
  setStared,
  removeMail,
  onSetFilter,
  setReadMail,
  setToggleRead,
}) {
  {
    console.log(mails)
  }
  return (
    <section>
      <table className="mail-table">
        <MailHeader onSetFilter={onSetFilter} />
        <tbody>
          {mails.map((mail) => (
            <MailPreview
              mail={mail}
              setStared={setStared}
              removeMail={removeMail}
              setReadMail={setReadMail}
              setToggleRead={setToggleRead}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
