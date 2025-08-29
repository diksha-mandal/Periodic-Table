import  {CATEGORIES, PHASES} from "../constants/constant"

export default function FilterPanel({ value, onChange }) {
  return (
    <div className="filters">
      <label>
        Category:
        <select
          value={value.category}
          onChange={(e) => onChange({ ...value, category: e.target.value })}
        >
          <option value="all">All</option>
          {CATEGORIES.map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Phase:
        <select value={value.phase} onChange={e=>onChange({...value, phase:e.target.value})}>
          {PHASES.map(([key, label]) => ( <option key={key} value={key}>{label}</option>))}
        </select>
      </label>
    </div>
  );
}
