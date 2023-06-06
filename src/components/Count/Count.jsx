export default function Count({ svg, h2, labor }) {
  return (
    <article className="count">
      <div>{svg}</div>
      <div>
        <h2>{h2}</h2>
        <p>{labor}</p>
      </div>
    </article>
  );
}
