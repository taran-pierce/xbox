const UserCard = (props) => (
  <div>
    <style jsx>{`
      .user-details {
        position: fixed;
        width: 15%;
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
    `}</style>
    <div className="user-details">
      <img src={props.data.GameDisplayPicRaw} />
      <h4>
        {props.data.AppDisplayName}
        <p><span>G</span>{props.data.Gamerscore}</p>
        <span className="left">{props.data.TenureLevel} years</span>
        <span className="right">{props.data.XboxOneRep}</span>
      </h4>
    </div>

  </div>
)

export default UserCard