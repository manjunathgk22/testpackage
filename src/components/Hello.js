import React from 'react'
import styles from './Hello.module.css'
function Hello({classname}) {
  return (
    <div className={`${styles.bgRed} ${classname}`}>Hello</div>
  )
}

export default Hello