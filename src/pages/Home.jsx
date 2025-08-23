import { useMemo, useState } from "react";
import data from "../data/elements.json";
import SearchBar from "../components/SearchBar";
import CategoryLegend from "../components/CategoryLegend";
import FilterPanel from "../components/FilterPanel";
import ElementCard from "../components/ElementCard";
import ElementModal from "../components/ElementModal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ category: "all", phase: "all" });
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return data.filter(e => {
      const matchesQuery =
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.symbol.toLowerCase().includes(query.toLowerCase()) ||
        String(e.atomicNumber) === query;
      const matchesCat = filters.category === "all" || e.category === filters.category;
      const matchesPhase = filters.phase === "all" || e.phase.toLowerCase() === filters.phase;
      return (query ? matchesQuery : true) && matchesCat && matchesPhase;
    });
  }, [query, filters]);

  return (
    <main className="page">
      <SearchBar value={query} onChange={setQuery}/>
      <FilterPanel value={filters} onChange={setFilters}/>
      <CategoryLegend/>
      <section className="table-grid">
        {/* 18 columns for groups; periods = rows */}
        {filtered.map(e => (
          <ElementCard key={e.atomicNumber} element={e} onClick={() => setSelected(e)} />
        ))}
      </section>
      {selected && <ElementModal element={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
