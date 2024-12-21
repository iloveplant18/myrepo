
function Option({value, title, id}) {
  return (
    <option value={value} id={id}>
      {title}
    </option>
  )
}

export default Option