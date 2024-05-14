import React from "react";
import NoteItemBody from "./NoteItemBody";
import Action from "./Action";

function NoteItem({ id, title, createdAt, body, onDelete, onArchived, archived }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <Action id={id} onDelete={onDelete} onArchived={onArchived} archived={archived} />
    </div>
  );
}
export default NoteItem;
