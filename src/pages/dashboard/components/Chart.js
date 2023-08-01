import Bar from "./Bar";

export default function Chart() {
  return (
    <div>
      <div className="chart-head">
        <p>Summary</p>
        <button className="sales">sales</button>
      </div>
      <Bar />
    </div>
  );
}
