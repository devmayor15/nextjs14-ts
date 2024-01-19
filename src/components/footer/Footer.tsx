import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Martinsdev</div>
      <div className={styles.text}>
        Martins creative thoughts agency &copy; All right reserved.
      </div>
    </div>
  )
}

export default Footer
