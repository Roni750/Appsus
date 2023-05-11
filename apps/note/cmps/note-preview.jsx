const { useState } = React

export function NotePreview({ note, onEditNote }) {

  const [isDone, setIsDone] = useState(false)

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
        <h1>Note Content:</h1>
        <div onBlur={handleContentBlur} contentEditable={true} dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    )
  }


  function NoteImg({ info }) {
    return (
      <article className="note-preview">
        <h1>{info.title}</h1>
        <img src={info.url} />
      </article>
    )
  }

  function NoteTodos({ info }) {
    function toggleDoUndo(isDone) {
      setIsDone(!isDone)
      console.log("isDone:", isDone)
    }

    return (
      <article className="note-preview">
        <h1>Welcome back</h1>
        <ul>
          {info.todos.map((todo, idx) => (
            <li key={idx}><p>{todo.txt}</p></li>
          ))}
        </ul>
        {/* {info.todos.map((todo, idx) => (
          <li key={idx} onClick={() => toggleDoUndo(isDone)} className={isDone ? 'todo-done' : ''}><p contenteditable="true">{todo.txt}</p></li>
        ))} */}
      </article>
    )
  }

  return (
    <article className="note-preview">
      <DynamicCmp dynamicNote={note} />
    </article>
  )
}
