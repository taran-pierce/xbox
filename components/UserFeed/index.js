import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Clips from '../Clips'
import Profile from '../Profile'
import Activity from '../Activity'

export default function UserFeed(props) {
  const {
    clips,
    profile,
    activity,
  } = props

  const [currentTab, setCurrentTab] = useState({
    active: 'activity'
  })

  const tabs = [
    'Activity',
    'Profile',
    'Clips',
  ]

  const handleClick = e => {
    e.preventDefault()
    const newTab = e.target.dataset.item
    setCurrentTab({
      active: newTab
    })
  }

  return (
    <>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={currentTab.active === tab.toLowerCase() ? 'active' : ''}
            onClick={handleClick}
            data-item={tab.toLowerCase()}
          >{tab}</li>
        ))}
      </ul>
      <div className={`user-feed-container`}>
        <Activity data={activity} />
        <Profile data={profile} />
        <Clips data={clips} />
      </div>
    </>
  );
}

UserFeed.propTypes = {
  clips: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
};
