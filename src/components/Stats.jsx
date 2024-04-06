export default function Stats({ stats }) {
  return (
    <div className="analytics">
      <Stat count={stats.wordCount} type={"words"} />
      <Stat count={stats.charCount} type={"characters"} />
      <Stat count={stats.instaCount} type={"instagram"} />
      <Stat count={stats.fbCount} type={"facebook"} />
    </div>
  );
}

function Stat({ count, type }) {
  return (
    <div className="stat">
      <span className={`counter ${count < 0 ? "number-limit" : ""}`}>
        {count}
      </span>
      <span>{type}</span>
    </div>
  );
}
