const { Link } = ReactRouterDOM
const {  useNavigate } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"
import { noteService } from "../services/note.service.js"

export function NoteList({ notes, onRemoveNote, onSelectNote }) {

    function onEditNote(newContent, noteId) {
        const note = noteService.get(noteId)
            .then(editedNote => {
                editedNote.info.txt = newContent
                noteService.save(editedNote)
            })
        console.log("note:", note)
    }

    return (
        <ul className="note-list">
            {console.log("notes:", notes)}
            {notes.map(note =>
                <li key={note.id} onClick={() => onSelectNote(note)}>
                {/* <li key={note.id} onBlur={() => onSelectNote(null)} onClick={() => onSelectNote(note)}> */}
                    <Link to={`/note/${note.id}`}>
                        <NotePreview onEditNote={onEditNote} note={note} onRemoveNote={onRemoveNote} />
                    </Link>
                    {/* <button className="remove-btn" onClick={() => onRemoveNote(note.id)}>X</button> */}
                </li>
            )}
        </ul>
    )
}