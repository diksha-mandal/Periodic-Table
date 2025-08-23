const items = [
  ["nonmetal","Nonmetal"],
  ["alkali-metal","Alkali metal"],
  ["alkaline-earth-metal","Alkaline earth"],
  ["metalloid","Metalloid"],
  ["halogen","Halogen"],
  ["noble-gas","Noble gas"],
];
export default function CategoryLegend(){
  return (
    <div className="legend">
      {items.map(([key,label])=>(
        <span key={key} className={"legend-chip cat-"+key}>{label}</span>
      ))}
    </div>
  );
}
