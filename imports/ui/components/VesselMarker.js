import React from 'react'
import vessel from '../assets/vessel.svg'

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
      width: '36px',
      height: '36px'
    },
    title: {
      flexGrow: 1,
      width: '86px',
      marginTop: '2px',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 12,
      fontWeight: 500,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.5)'
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
