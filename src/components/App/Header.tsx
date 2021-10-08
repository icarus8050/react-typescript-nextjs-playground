const componentStyle = {
    background: '#22b8cf',
    color: 'white',
    height: '10%',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Header = () => {
  return (
    <>
      <div style={componentStyle}>
          <div>Practice!  React!  Typescript!  Next.js!</div>
      </div>
    </>
  );
}

export default Header;
