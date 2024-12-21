
function Select({name, title, id, className, children}) {
  return (
    <select className={'select ' + className} name={name} id={id}>
      <option disabled selected value="">
        {title}
      </option>
      {children}
    </select>
  )
}

export default Select