const { useState } = React

import { noteService } from "../services/note.service.js"

export function NoteAdd() {
    const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())

    function handleChange({ target }) {

        const field = target.name
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
        console.log("note:", noteToAdd)
        noteService.addNote(noteToAdd)
    }

    return (
        <form onSubmit={onSaveNote} >
            <label htmlFor="txt">Add a note:</label>
            <input onChange={handleChange} type="text" name="txt" id="txt" />
            <button>Add</button>
        </form>
    )
}