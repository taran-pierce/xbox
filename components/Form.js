class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    let url = `/gamer-search/${this.state.value}`
    
    window.location.href = url
  }
  
  render() {
    return (
      <div>
        <style jsx>{`
          form {
            padding: 1rem;
          }
        
          input {
            border: 1px solid black;
            margin-right: .5rem;
            margin-left: .5rem;
            padding: .5rem;
          }
          
          button {
            background: #01770C;
            border-radius: .25rem;
            color: #fff;
            padding: .5rem 1rem;
          }
        `}
        </style>
        <form onSubmit={this.handleSubmit}>
          <label>
            Gamer Tag:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NameForm