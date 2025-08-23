export default function SearchBar({ value, onChange }) {
  return (
    <input
      placeholder="Search name, symbol, or atomic #"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="search"
    />
  );
}
