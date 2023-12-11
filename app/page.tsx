'use client'

import { useAppSelector, useAppDispatch } from "../redux/hook"
import { selectNotes, removeNote } from "../redux/slice/taskSlice"

const HomePage = (): JSX.Element => {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  const deleteNote = (noteId: string) => {
    dispatch(removeNote(noteId))
  }

  return (
    <div>
      {
        notes.map((note) => (
          <div key={note.id}>
            <h1>{note.heading}</h1>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete Note</button>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage;