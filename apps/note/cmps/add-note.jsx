const { useState } = React

import { noteService } from "../services/note.service.js"

export function NoteAdd({ saveNote }) {
    const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())


    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        setNoteToAdd((note) => ({ ...note, info: { ...note.info, [field]: value } }))

    }

    function onSaveNote() {
        const { title, txt } = noteToAdd.info
        if (title && txt) {
            saveNote(noteToAdd)
            setNoteToAdd(noteService.getEmptyNote())
        }
    }

    return (
        <div className="input-wrapper">
            <div className="inputs-container">
                <form onBlur={onSaveNote} >
                    <input className="input-field title" placeholder="Title" onChange={handleChange} type="text" name="title" id="title" />
                    <input className="input-field" placeholder="Take a note..." onChange={handleChange} type="text" name="txt" id="txt" />
                </form>
            </div>
        </div>
    )
}