import React from 'react'
import Privacy from './components/Privacy'
import Generalinfo from './components/Generalinfo'
import Yourconsent from './components/Yourconsent'
import Customerservice from './components/Customerservice'
import Donotsell from './components/Donotsell'
import Liabilityofexplore from './components/Liabilityofexplore'
import Pprivacy from './components/Pprivacy'

export default function page() {
  return (
    <div>
        <Privacy />
        <Generalinfo />
        <Yourconsent />
        <Customerservice />
        <Donotsell />
        <Liabilityofexplore />
        <Pprivacy />
    </div>
  )
}
