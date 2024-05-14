import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item_date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;
