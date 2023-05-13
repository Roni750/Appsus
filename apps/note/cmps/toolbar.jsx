const { Link } = ReactRouterDOM

export function Toolbar({ note, onNoteDuplicate, onRemoveNote }) {

    return (
        <div className="toolbar">
            <i className="fa-solid fa-trash" title="Delete" onClick={() => onRemoveNote(note.id)}></i>
            <i className="fa-solid fa-copy" title="Duplicate" onClick={() => onNoteDuplicate(note.id)}></i>
            <Link to={`/note/${note.id}`}>
            <i className="fa-solid fa-expand" title="Expand"></i>
            </Link>
        </div>
    )
}