import React from "react";

function Action({ id, onDelete, archived, onArchived }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="note-item__archive-button" onClick={() => onArchived(id)}>
        {archived ? "Move" : "Archive"}
      </button>
    </div>
  );
}

export default Action;
