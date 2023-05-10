const { useState } = React

export function NotePreview({ note }) {

  function DynamicCmp({ dynamicNote }) {
    switch (dynamicNote.type) {
      case "NoteTxt":
        return <TxtNote info={dynamicNote.info} />
      case "NoteImg":
        return <NoteImg info={dynamicNote.info} />
      case "NoteTodos":
        return <NoteTodos info={dynamicNote.info} />
    }
  }

  function TxtNote({ info }) {
    return (
      <article className="note-preview">
        <h1>Note Content:</h1>
        <p>{info.txt}</p>
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
    const [todosDoneState, setTodosDoneState] = useState(info.todos.map(() => false))

    function toggleDoUndo(idx) {
      const newTodosDoneState = [...todosDoneState]
      newTodosDoneState[idx] = !newTodosDoneState[idx]
      setTodosDoneState(newTodosDoneState)
    }

    return (
      <article className="note-preview">
        <h1>Welcome back</h1>
        <ul>
          {info.todos.map((todo, idx) => (
            <li key={idx} onClick={() => toggleDoUndo(todosDoneState)} className={todosDoneState ? 'todo-done' : ''}>{todo.txt}</li>
          ))}
        </ul>
      </article>
    )
  }

  return (
    <article className="note-preview">
      <DynamicCmp dynamicNote={note} />
    </article>
  )
}
