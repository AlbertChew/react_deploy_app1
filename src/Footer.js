const Footer = ({length}) => {

     return(
      <footer>
        <p>{length} {length === 1 ? "thing" : "things"} on the list</p>
      </footer>
   )
}

export default Footer;