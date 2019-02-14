import React from 'react';

class UserCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 100) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .user-details {
          }

          img {
            max-width: 100%;
            border-radius: 12px 12px 0 0;
            margin-bottom: -4px;
          }

          h4 {
            background: #01770C;
            border-radius: 0 0 12px 12px;
            color: #fff;
            margin: 0;
            padding: 10px;
            font-family: sans-serif;
            font-weight: normal;
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
          }

          .left {
            color: #154619;
            margin: 0;
            font-family: sans-serif;
            font-size: 12px;
            align-self: center;
          }

          .right {
            color: #154619;
            margin: 0;
            padding: 4px 0;
            font-family: sans-serif;
            font-size: 12px;
            justify-self: end;
          }

          h4 p {
            margin: 0;
            padding: 0;
            font-size: 12px;
            justify-self: right;
            top: -2px;
            position: relative;
          }

          h4 p span {
            display: inline-block;
            background: rgba(255,255,255,0.8);
            border-radius: 100px;
            color: #01770C;
            font-size: 12px;
            font-family: sans-serif;
            font-weight: bold;
            padding: 5px 7px 3px;
            margin-right: 5px;
          }

          @media (min-width: 768px) {
            .user-details.scrolling {
              width: 22%;
              position: fixed;
            }
          }
        `}</style>
        <div className={this.state.hasScrolled ? 'user-details scrolling' : 'user-details'}>
          <img src={this.props.data.GameDisplayPicRaw} />
          <h4>
            {this.props.data.AppDisplayName}
            <p><span>G</span>{this.props.data.Gamerscore}</p>
            <span className="left">{this.props.data.TenureLevel} years</span>
            <span className="right">{this.props.data.XboxOneRep}</span>
          </h4>
        </div>

      </div>
    )
  }
}

export default UserCard