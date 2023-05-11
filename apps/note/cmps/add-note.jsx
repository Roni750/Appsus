const { useState } = React

import { noteService } from "../services/note.service.js"

export function NoteAdd({ setNotes, saveNote }) {
    const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())

    function handleChange({ target }) {
        // const field = target.name
        const value = target.value

        if (value.includes(',')) {
            // * If text input is an array (todo list) separated by commas
            if (value.includes(',')) {
                const todosToAdd = value.split(',').map(todo => {
                    return { txt: todo.trim(), doneAt: null }
                })
                setNoteToAdd(note => ({
                    ...note,
                    type: 'NoteTodos',
                    info: {
                        ...note.info,
                        todos: todosToAdd
                    }
                }))
            }
        } else {
            // * If txt input is a regular note
            const { info: { txt } } = noteToAdd
            setNoteToAdd(note => ({
                ...note,
                info: {
                    ...note.info,
                    txt: value
                }
            }))
        }
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        saveNote(noteToAdd)
        console.log("note:", noteToAdd)
    }

    return (
        <form onSubmit={onSaveNote}>
            <div className="input-wrapper">
                <label htmlFor="txt">Add a note:</label>
                <div className="input-container">
                    <div className="icon-wrapper">
                        <i className="fa-solid fa-font icon"></i>
                        <i className="fa-solid fa-image icon"></i>
                        <i className="fa-brands fa-youtube icon"></i>
                        <i className="fa-solid fa-microphone icon"></i>
                        <i className="fa-solid fa-list-ul icon"></i>
                    </div>
                    <input className="input-field" onChange={handleChange} type="text" name="txt" id="txt" />
                </div>
                <button className="add-btn">Add</button>
            </div>
        </form>
    )
}