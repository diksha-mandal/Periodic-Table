export default function ElementCard({ element, onClick }) {
  return (
    <div
       className={`element-card cat-${element.category.replace(/\s+/g, "-")}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="atomic-number">{element.number}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="name">{element.name}</div>
      {/* <div className="category">{element.category}</div> */}
    </div>
  );
}
