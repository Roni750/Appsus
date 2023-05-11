const { useState } = React

import { MailCompose } from './mail-compose.jsx'

export function MailDraggableCompose({ addMail, onToggleCompose, saveDraft }) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 })

  const startDragging = (e) => {
    setIsDragging(true)
    setPrevPosition({ x: e.clientX, y: e.clientY })
  }

  const stopDragging = () => {
    setIsDragging(false)
  }

  const dragModal = (e) => {
    if (isDragging) {
      const diffX = e.clientX - prevPosition.x
      const diffY = e.clientY - prevPosition.y
      setPosition((prevPosition) => ({
        x: prevPosition.x + diffX,
        y: prevPosition.y + diffY,
      }))
      setPrevPosition({ x: e.clientX, y: e.clientY })
    }
  }

  return (
    <div
      className="compose-modal animate__animated animate__slideInUp"
      style={{ position: 'absolute', top: position.y, left: position.x }}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseMove={dragModal}
    >
      <MailCompose
        addMail={addMail}
        onToggleCompose={onToggleCompose}
        saveDraft={saveDraft}
      />
    </div>
  )
}
