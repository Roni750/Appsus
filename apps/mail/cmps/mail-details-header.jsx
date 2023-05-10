const { Link } = ReactRouterDOM

export function MailDetailsHeader({ mail, onRemoveMail }) {
  return (
    <section className="mail-details-header">
      <Link to={`/mail`}>
        <span class="symbols-pointer">arrow_back</span>
      </Link>
      <span className="symbols-pointer" onClick={() => onRemoveMail(mail.id)}>
        delete
      </span>
    </section>
  )
}
