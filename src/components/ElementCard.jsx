export default function ElementCard({ element, onClick }) {
  const cls = "element-card cat-" + element.category;
  const style = {
    gridColumn: element.group, // column = group (1..18)
    gridRow: element.period    // row = period (1..7)
  };
  return (
    <div className={cls} style={style} onClick={onClick} title={element.name}>
      <div className="num">{element.atomicNumber}</div>
      <div className="sym">{element.symbol}</div>
      <div className="name">{element.name}</div>
    </div>
  );
}
