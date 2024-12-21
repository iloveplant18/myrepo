
function DefaultButton({children, onClick, className, type='button', href='#'}) {
  if (type === 'button') 
    return (
      <button className={'button ' + className} onClick={onClick}>
        {children}
      </button>
    )
  return (
    <a className={"button " + className} href={href}>
      {children}
    </a>
  );
}

export default DefaultButton