import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { HeroDetails } from './HeroDetails'

function Dashboard(props) {
  let data=props.hero;
  return (
    <>
    <Link to={'/'}>
      <button>Dashboard</button>
    </Link>
    <Link to={'/hero'}>
      <button>Heroes</button>
    </Link>
      <h2 className='text-center'>Top Heroes</h2>
      <HeroDetails data={data}/>
    </>

  )
}

export default Dashboard