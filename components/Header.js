const Header = (props) => (
  <header>
    <style jsx>{`
      header {
        background-color: #01770C;
        color: #fff;
        padding: 1.5rem;
      }
    
      h1 {
        font-family: sans-serif;
        margin: 0;
      }
      
      h1 span {
        float: right;
      }
    `}</style>
    <h1>{props.gamerTag ? props.gamerTag : props.title}</h1>
  </header>
)

export default Header