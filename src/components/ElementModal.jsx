export default function ElementModal({ element, onClose }) {
  if (!element) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>
          {element.name} ({element.symbol})
        </h2>
        <p><strong>Atomic Number:</strong> {element.number}</p>
        <p><strong>Atomic Mass:</strong> {element.atomic_mass}</p>
        <p><strong>Category:</strong> {element.category}</p>
        <p><strong>Phase:</strong> {element.phase}</p>
        <p><strong>Summary:</strong> {element.summary}</p>
      </div>
    </div>
  );
}
