import React from 'react'
import PropTypes from 'prop-types'

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
        {/* Display GamerTag and Name */}
        <h2>{gamertag} {name ? `| ${name}` : null}</h2>
        {/* Display Bio if one exists */}
        {bio && (
          <p>{bio}</p>
        )}
        {/* Display Motto if one exists */}
        {motto && (
          <p>{motto}</p>
        )}
        {/* Display Avatar */}
        {avatarBodyImagePath && (
          <img src={avatarBodyImagePath} alt={`${gamertag}'s Avatar`} />
        )}
        {/* Display Small Image */}
        {gamerpicSmallImagePath && (
          <img src={gamerpicSmallImagePath} alt={`${gamertag}'s Avatar`} />
        )}
        {/* Display Large Image */}
        {gamerpicLargeImagePath && (
          <img src={gamerpicLargeImagePath} alt={`${gamertag}'s Avatar`} />
        )}
        {/* Display SS Small Image */}
        {gamerpicSmallSslImagePath && (
          <img src={gamerpicSmallSslImagePath} alt={`${gamertag}'s Avatar`} />
        )}
        {/* Display SS Large Image */}
        {gamerpicLargeSslImagePath && (
          <img src={gamerpicLargeSslImagePath} alt={`${gamertag}'s Avatar`} />
        )}
        {/* Display other User Data if it exists */}
        {( gamerscore || tier || location ) && (
          <ul>
            {location && (
              <li><strong>Location: </strong>{location}</li>
            )}
            {gamerscore && (
              <li><strong>Gamerscore: </strong>{gamerscore}</li>
            )}
            {tier && (
              <li><strong>Tier: </strong>{tier}</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

GamerCard.propTypes = {
  data: PropTypes.object.isRequired,
};