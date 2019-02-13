const ActivityCard = (props) => (
  <div>
    <style jsx>{`
      img {
        max-width: 100%;
      }
      
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <ul>
      <li>
        <h4>Activity Feed</h4>
      </li>
      {props.data.activityItems.map( (activity) => (
        <li>
          Type: {activity.activityItemType}
          <br />
          Name: {activity.achievementName}
          <br />
          Title: {activity.contentTitle}
          <img src={activity.clipThumbnail} />
          <img src={activity.contentImageUri} />
          <img src={activity.achievementIcon} />
        </li>
      ))}
    </ul>
  </div>
)

export default ActivityCard