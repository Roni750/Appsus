const { useState } = React

export function NotePreview({ note, onRemoveNote, onNoteDuplicate, onEditNote, isFocused }) {

  function TxtNote({ info, note, onEditNote, isFocused }) {
    const [content, setContent] = useState(info.txt)

    const handleContentChange = (event) => {
      setContent(event.target.value)
      console.log("content:", content)
    }

    const handleContentBlur = () => {
      if (onEditNote) {
        console.log("content from handleBlur func:", content)
        onEditNote(content, note.id)
      }
    }

    return (

      <article className={isFocused ? "note-preview-borderless" : "note-preview"}>
        {info.title && <textarea value={info.title} style={{ fontWeight: 'bold', fontSize: "14px" }} onChange={handleContentChange} onBlur={handleContentBlur}></textarea>}
        {content.length > 40 ? (
          <textarea
            value={content}
            rows="5"
            onChange={handleContentChange}
            onBlur={handleContentBlur}
          ></textarea>
        ) : (
          <textarea
            value={content}
            rows="2"
            onChange={handleContentChange}
            onBlur={handleContentBlur}
          ></textarea>
        )}
      </article>
    )
  }

  return (
    <TxtNote info={note.info} note={note} isFocused={isFocused} onEditNote={onEditNote} onRemoveNote={onRemoveNote} onNoteDuplicate={onNoteDuplicate} />
  )
}