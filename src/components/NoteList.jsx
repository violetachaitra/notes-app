import React, { Fragment } from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchived }) {
  return (
    <Fragment>
      <h2>Active Notes</h2>
      {notes.filter((note) => !note.archived).length <= 0 && <p className="notes-list__empty-message">There was No Note</p>}
      <div className="notes-list">
        {notes.map((note) => {
          return !note.archived ? <NoteItem key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} onDelete={onDelete} onArchived={onArchived} archived={note.archived} /> : null;
        })}
      </div>

      <h2>Archive</h2>
      {notes.filter((note) => note.archived).length <= 0 && <p className="notes-list__empty-message">There was No Note</p>}
      <div className="notes-list">
        {notes.map((note) => {
          return note.archived ? <NoteItem key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} onDelete={onDelete} onArchived={onArchived} archived={note.archived} /> : null;
        })}
      </div>
    </Fragment>
  );
}

export default NoteList;
