import React, { useContext } from 'react'
import { DataContext } from '../App'

const HeaderLink = () => {
    const [username] = useContext(DataContext);
  return (
    <div>
      HeaderLink :  {username}
    </div>
  )
}

export default HeaderLink
