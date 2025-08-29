import { useMemo, useState } from "react";
import data from "../data/elements.json";
import SearchBar from "../components/SearchBar";
import CategoryLegend from "../components/CategoryLegend";
import FilterPanel from "../components/FilterPanel";
import ElementModal from "../components/ElementModal";
import ElementCard from "../components/ElementCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ category: "all", phase: "all" });
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return data.filter((e) => {
      const matchesQuery =
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.symbol.toLowerCase().includes(query.toLowerCase()) ||
        String(e.number) === query;

      const matchesCat =
        filters.category === "all" ||
        e.category.toLowerCase() === filters.category.toLowerCase();

      const matchesPhase =
        filters.phase === "all" ||
        e.phase.toLowerCase() === filters.phase.toLowerCase();

      return (query ? matchesQuery : true) && matchesCat && matchesPhase;
    });
  }, [query, filters]);

  return (
    <main className="page">
      <SearchBar value={query} onChange={setQuery} />
      <FilterPanel value={filters} onChange={setFilters} />
      <CategoryLegend />

      <section className="table-grid">
        {filtered.map((e) => (
          <div
            key={e.number}
            style={{
              gridColumn: e.xpos,
              gridRow: e.ypos,
            }}
          >
            <ElementCard element={e} onClick={() => setSelected(e)} />
          </div>
        ))}
      </section>

      {selected && (
        <ElementModal element={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
