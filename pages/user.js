import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function getUserInfo({ user}) {

    console.log(user)

  return (
    <div>
        {user.nickname}
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired();
