import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useState, useEffect } from "react"

export default function userInfo() {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await fetch("/api/auth/me")
                const data = await response.json()
                setUserInfo(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUserInfo()
    }, [])

    return (
        <div>
            <h1>User Info</h1>
            {userInfo && (
                <div>
                    <h2>{userInfo.name}</h2>
                </div>
            )}
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();
