const SIZES = ['XS', 'S', 'M', 'L'];

/** Фильтр по размеру (требование задания) */
function SizeFilter({ selected, onChange }) {
  return (
    <div className="size-filter">
      <span>Size</span>
      <button
        type="button"
        className={`size-btn ${selected === null ? 'active' : ''}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {SIZES.map((s) => (
        <button
          key={s}
          type="button"
          className={`size-btn ${selected === s ? 'active' : ''}`}
          onClick={() => onChange(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
