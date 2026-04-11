"use client"
import {signIn, signOut, useSession} from 'next-auth/react'
import Image from 'next/image'

const Home = () => {

  const {data: session} = useSession()
  if(session) {
    return (
      <div>
        <Image  src={session.user?.image || ""} alt="Profile Picture" width={100} height={100} />
        <h1>Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
        <button onClick={()=>signOut()}>Sign Out</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={()=>signIn("google")}>Sign in with Google</button>
    </div>
  )
}

export default Home
