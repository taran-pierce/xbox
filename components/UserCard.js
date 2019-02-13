const UserCard = (props) => (
  <div>
    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
    <h4>Gamer Tag: {props.data.AppDisplayName}</h4>
    <p>Gamer Score: {props.data.Gamerscore}</p>
    <p>Tenure: {props.data.TenureLevel}</p>
    <p>Rep: {props.data.XboxOneRep}</p>
    <img src={props.data.GameDisplayPicRaw} />
  </div>
)

export default UserCard