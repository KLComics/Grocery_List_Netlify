const Header = ({ title }) => {
  // const headerStyle = {
  //   backgroundColor: "royalblue",
  //   color: "#FFF",
  // };

  return (
    // style={headerStyle} 
    <header> 
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header;