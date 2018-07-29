import React from 'react'
import vessel from '../../assets/vessel.svg'

const vesselMarker = (props) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      flexGrow: 1,
      width: '48px',
      height: '48px'
    },
    title: {
      flexGrow: 1,
      width: '86px',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      fontWeight: 500
    }
  }

  return (
    <div style={styles.container}>
      <img style={styles.icon} src={vessel} />
      <p style={styles.title}>{props.title}</p>
    </div>
  )
}

export default vesselMarker
