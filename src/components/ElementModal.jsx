import { motion } from "framer-motion";

export default function ElementModal({ element, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        onClick={e=>e.stopPropagation()}
        initial={{ opacity:0, y: 12 }}
        animate={{ opacity:1, y: 0 }}
        className="modal"
      >
        <button className="close" onClick={onClose}>×</button>
        <h3>{element.name} ({element.symbol})</h3>
        <p><b>Atomic #:</b> {element.atomicNumber} &nbsp; <b>Mass:</b> {element.atomicMass}</p>
        <p><b>Category:</b> {element.category} &nbsp; <b>Phase:</b> {element.phase}</p>
        <p><b>Group:</b> {element.group} &nbsp; <b>Period:</b> {element.period}</p>
        <p><b>Discovered:</b> {element.discovered}</p>
        <p>{element.summary}</p>
      </motion.div>
    </div>
  );
}
