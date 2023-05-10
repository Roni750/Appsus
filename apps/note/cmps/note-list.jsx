import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote, onEditNote }) {

    return (
        <ul className="note-list">
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note} />
                    <button className="remove-btn" onClick={() => onRemoveNote(note.id)}>X</button>
                    <button className="edit-btn" onClick={() => onEditNote(note.id)}>✏️</button>
                </li>
            )}
        </ul>
    )
}