import React, { useContext } from 'react'
import { DataContext } from '../App'
import HeaderLink from "./HeaderLink"

const Headerr = () => {
    
    const [username] = useContext(DataContext)

  return (
    <div>
      Header : {username}
        <HeaderLink/>
    </div>
  )
}

export default Headerr
