const categories = ["all","nonmetal","alkali-metal","alkaline-earth-metal","metalloid","halogen","noble-gas"];
const phases = ["all","solid","liquid","gas"];

export default function FilterPanel({ value, onChange }) {
  return (
    <div className="filters">
      <label>
        Category:
        <select value={value.category} onChange={e=>onChange({...value, category:e.target.value})}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
      <label>
        Phase:
        <select value={value.phase} onChange={e=>onChange({...value, phase:e.target.value})}>
          {phases.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </label>
    </div>
  );
}
