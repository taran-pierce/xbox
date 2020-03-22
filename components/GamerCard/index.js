import React from 'react'
import PropTypes from 'prop-types'
import './gamerCard.scss'

export default function GamerCard(props) {
  const {
    gamertag,
    name,
    location,
    bio,
    gamerscore,
    tier,
    motto,
    avatarBodyImagePath,
    gamerpicSmallImagePath,
    gamerpicLargeImagePath,
    gamerpicSmallSslImagePath,
    gamerpicLargeSslImagePath,
    avatarManifest,
  } = props.data

  return (
    <>
      <div className={`gamer-card`}>
        <div className={`flex`}>
          <div className={`column`}>
            {/* Display GamerTag and Name */}
            <h2>
              {gamertag} {name ? `| ${name} ` : null}
              {gamerscore && (
                <span className={`gamer-score`}>{gamerscore}</span>
              )}
            </h2>
            {/* Display Bio if one exists */}
            {bio && (
              <>
                <h5>Bio</h5>
                <p>{bio}</p>
              </>
            )}
            {/* Display Motto if one exists */}
            {motto && (
              <>
                <h5>Motto</h5>
                <p>{motto}</p>
              </>
            )}
            {/* Display other User Data if it exists */}
            {( tier || location ) && (
              <ul>
                {location && (
                  <li><strong>Location: </strong>{location}</li>
                )}
                {tier && (
                  <li><strong>Tier: </strong>{tier}</li>
                )}
              </ul>
            )}
          </div>
          <div className={`column`}>
            {/* Display Avatar */}
            {avatarBodyImagePath && (
              <img src={avatarBodyImagePath} alt={`${gamertag}'s Avatar`} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

GamerCard.propTypes = {
  data: PropTypes.object.isRequired,
};