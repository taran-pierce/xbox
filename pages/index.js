import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import Header from '../components/Header'
import GamerCard from '../components/GamerCard'
import apiHeaders from '../utilities/apiHeaders'
import Form from '../components/Form'
import Clips from '../components/Clips'
import Loading from '../components/Loading'

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
    setUser({ ...user, gamerTag: e.target.value });
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
    console.log('running getProfile with: ', xuid)
    try {
      // get the profile data
      const res = await fetch(`https://xboxapi.com/v2/${xuid}/profile`, {
        headers: apiHeaders,
        method: 'GET',
        body: JSON.stringify(),
      });
      const data = await res.json()
      console.log('data: ', data);

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
      setUserClips({clips: data})
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

  console.log('process.env: ', process.env)

  return (
    <>
      <Header title={`Xbox Live API`} userData={user}>
        {user.gamerCard && (
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            id={`gamer-tag-form`}
            method={`POST`}
            inputs={formInputs}
          />
        )}
      </Header>
      {!user.gamerCard && (
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
      {user.gamerCard && (
        <GamerCard data={user.gamerCard} />
      )}
      {userClips.clips && (
        <Clips data={userClips.clips} />
      )}
    </>
  )
});

export default Page