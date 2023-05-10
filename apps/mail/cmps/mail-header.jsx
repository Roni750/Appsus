const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'

export function MailHeader({ onSetFilter }) {
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    onSetFilter(filterBy)
  }, [filterBy])

  function handleChange(value) {
    setIsClicked(false)
    setFilterBy((prevFilter) => {
      return { ...prevFilter, isRead: value }
    })
  }

  return (
    <thead>
      <th className="mail-header">
        <div className="table-header-btn-container flex">
          <span
            onClick={() => setIsClicked(!isClicked)}
            className="symbols-pointer read-filter"
          >
            list
          </span>
          <span
            onClick={() => window.location.reload()}
            className="symbols-pointer refresh"
          >
            refresh
          </span>
        </div>
        {isClicked && (
          <div className="filter-modal">
            <p className="filter-option" onClick={() => handleChange(null)}>
              All
            </p>
            <p className="filter-option" onClick={() => handleChange(false)}>
              Read
            </p>
            <p className="filter-option" onClick={() => handleChange(true)}>
              Unread
            </p>
          </div>
        )}
      </th>
      <th></th>
    </thead>
  )
}
