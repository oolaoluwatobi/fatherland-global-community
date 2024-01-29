import React from 'react'
import styles from '../loginpage/styles.module.css'
import Loginform from './Loginform'

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };

}
export default function page({searchParams}: Props) {
  return (
    <div className={`${styles.login_background} mx-auto`}>
        <Loginform error={searchParams}/>
    </div>
  )
}
