import { ITEMS } from "../constants/constant"

export default function CategoryLegend(){
  return (
    <div className="legend">
      {ITEMS.map(([key,label])=>(
        <span key={key} className={"legend-chip cat-"+key}>{label}</span>
      ))}
    </div>
  );
}
