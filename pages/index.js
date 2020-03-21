import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import SiteLayout from '../components/SiteLayout'
import Header from '../components/Header'
import GamerCard from '../components/GamerCard'
import apiHeaders from '../utilities/apiHeaders'
import Form from '../components/Form'
import Loading from '../components/Loading'
import UserFeed from '../components/UserFeed'

const Page = withRouter((props) => {
  const [user, setUser] = useState({
    gamerTag: '',
    xuid: '',
    gamerCard: null,
    profile: null,
    activity: null,
    clips: null,
  });

  const [userIsLoading, setUserIsLoading] = useState({
    isLoading: false,
  })

  const [userProfile, setUserProfile] = useState({
    profile: null,
  });

  const [userActivity, setUserActivity] = useState({
    activity: null,
  })

  const [userClips, setUserClips] = useState({
    clips: null,
  })

  const handleChange = e => {
    setUser({...user, gamerTag: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setUserIsLoading({
      isLoading: true,
    })

    try {
      // get the xuid for the gamer tag entered so we can grab other data
      const res = await fetch(`https://xboxapi.com/v2/xuid/${user.gamerTag}`, {
        headers: apiHeaders,
        method: 'GET',
        body: JSON.stringify(),
      });
      const xuidRes = await res.json();

      // get the gamer card data
      const nextRes = await fetch(`https://xboxapi.com/v2/${xuidRes}/gamercard`, {
        headers: apiHeaders,
        method: 'GET',
        body: JSON.stringify(),
      });
      const gamerCardRes = await nextRes.json();

      // set the state of the user
      setUser({
        ...user,
        gamerCard: gamerCardRes,
        xuid: xuidRes,
      });

      setUserIsLoading({
        isLoading: false,
      })

      getProfile(xuidRes)

      getActivity(xuidRes)

      getClips(xuidRes)

    } catch (e) {
      console.log('an error occurred: ', e);
    }
  };

  async function getProfile(xuid) {
    try {
      // get the profile data
      const res = await fetch(`https://xboxapi.com/v2/${xuid}/profile`, {
        headers: apiHeaders,
        method: 'GET',
        body: JSON.stringify(),
      });
      const data = await res.json()

      setUserProfile({profile: data});
    } catch (e) {
      console.log('an error occurred: ', e);
    }
  }

  async function getActivity(xuid) {
    try {
      // get activity data
      const res = await fetch(`https://xboxapi.com/v2/${xuid}/activity`, {
        headers: apiHeaders,
        method: 'GET',
        body: JSON.stringify(),
      })
      const data = await res.json()

      setUserActivity({activity: data})
    } catch (e) {
      console.log('an error occurred: ', e)
    }
  }

  async function getClips(xuid) {
    try {
      // get user clip data
      const res = await fetch(`https://xboxapi.com/v2/${xuid}/game-clips`, {
        headers: apiHeaders,
        method: 'GET',
        body: JSON.stringify(),
      })
      const data = await res.json()

      setUserClips({
        clips: data
      })
    } catch {
      console.log('an error occurred: ', e)
    }
  }

  // inputs for Form component needed to look up xuid and gamer card
  const formInputs = [
    {
      label: 'gamer_tag',
      type: 'text',
      onChange: handleChange,
    },
  ]

  const formData = {
    inputs: formInputs,
    handleChange,
    handleSubmit,
    id: `gamer-tag-form`,
    method: `POST`
  }

  return (
    <>
      <SiteLayout
        title={`Xbox Live API`}
        user={user.gamerCard}
        formData={formData}
      >
        {/* Display introduction information if there is no gamerCard set */}
        {!user.gamerCard && (
          <>
            <h1>Search for Xbox Gamertag</h1>
            <p>Use the form below to search for an Xbox gamertag. This service uses the Xbox Live API and will retrieve information about any gamertag that is uploaded to the system.</p>
            <h4>Information such as:</h4>
            <ul>
              <li>Profile</li>
              <li>Recorded Clips</li>
              <li>Recent Activity</li>
              <li>Gamer Card</li>
              <li>and more...</li>
            </ul>
          </>
        )}
        {/* If there is no current gamerCard then display the Form to get one */}
        {!user.gamerCard && (
          // Display the Loading icon if we are fetching data
          !userIsLoading.isLoading ?
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              id={`gamer-tag-form`}
              method={`POST`}
              inputs={formInputs}
            />
            :
            <Loading message={`Fetching gamer information about ${user.gamerTag}`} />
        )}
        {/* Display the gamerCard once we have the data back from the API */}
        {user.gamerCard && (
          <GamerCard data={user.gamerCard} />
        )}
        {/* Display the User Feed once we have back the data for clips, profile and activity */}
        {(userClips.clips && userProfile.profile && userActivity.activity) && (
          <UserFeed
            clips={userClips.clips}
            profile={userProfile.profile}
            activity={userActivity.activity}
          />
        )}
      </SiteLayout>
    </>
  )
});

export default Page