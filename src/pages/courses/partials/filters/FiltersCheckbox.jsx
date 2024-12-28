function FiltersCheckbox({ label, name, value, children, onChange}) {
  return (
    <label className="filter__item">
      <span className="filter__caption">{label ?? children}</span>
      <input
        className="filter__checkbox"
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
      />
    </label>
  );
}

export default FiltersCheckbox