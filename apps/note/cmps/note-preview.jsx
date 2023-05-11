import { Toolbar } from "./toolbar.jsx"

export function NotePreview({ note, onEditNote, onRemoveNote }) {

  function DynamicCmp({ dynamicNote }) {
    switch (dynamicNote.type) {
      case "NoteTxt":
        return <TxtNote info={dynamicNote.info} note={dynamicNote} onEditNote={onEditNote} />
      case "NoteImg":
        return <NoteImg info={dynamicNote.info} />
      case "NoteTodos":
        return <NoteTodos info={dynamicNote.info} />
    }
  }

  function TxtNote({ info, note, onEditNote }) {
    const [content, setContent] = React.useState(info.txt)

    const handleContentBlur = (event) => {
      const newContent = event.currentTarget.innerHTML
      setContent(newContent)
      console.log("newContent:", newContent)
      onEditNote(newContent, note.id)
    }

    return (
      <article className="note-preview">
        <h4>{info.title}</h4>
        <div onBlur={handleContentBlur} contentEditable={true} dangerouslySetInnerHTML={{ __html: content }}>
        </div>
        {/* <button className="remove-btn" onClick={() => onRemoveNote(note.id)}>X</button> */}
        <Toolbar note={note} />
      </article>
    )
  }


  function NoteImg({ info }) {
    return (
      <article className="note-preview">
        <h1>{info.title}</h1>
        <img src={info.url} />
        {/* <button className="remove-btn" onClick={() => onRemoveNote(note.id)}>X</button> */}
        <Toolbar note={note} />

      </article>
    )
  }

  function NoteTodos({ info }) {

    return (
      <article className="note-preview">
        <h1>Todo's list:</h1>
        <ul>
          {info.todos.map((todo, idx) => (
            <li key={idx}><p>{todo.txt}</p></li>
          ))}
        </ul>
        {/* <button className="remove-btn" onClick={() => onRemoveNote(note.id)}>X</button> */}
        <Toolbar note={note} />
      </article>
    )
  }

  return (
    <DynamicCmp dynamicNote={note} />
  )
}
