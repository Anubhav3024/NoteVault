import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📝</div>
      <h2>No notes yet</h2>
      <p>Add your first note above to get started!</p>
    </div>
  );
}

export default EmptyState;
