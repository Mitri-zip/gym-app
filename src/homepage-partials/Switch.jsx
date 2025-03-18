
function Switch() {
  const styles = {
    switchMargin: {
      marginTop: '9rem',
      textAlign: 'center',
      borderBottom: '0.1rem dashed black',
      marginBottom: '2rem',
    },
    
    switchUp: {
      color: '#AF98DA',
      fontSize: '3.8vw',
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    
    switchPara: {
      fontSize: '2vw',
      lineHeight: '1.8em',
      fontWeight: 'bold',
    },
  };

  return (
    <div>
      <div style={styles.switchMargin}>
        <h1 style={styles.switchUp}>
          SWITCH UP YOUR WORKOUT
        </h1>

        <p style={styles.switchPara}>
          No two classes at Killer Body are ever the same. We like to switch it up and<br/>
          offer different classes to keep your workout journey exciting!<br/>
          You never have to go to the gym and feel confused when trying to figure out what to do,<br/>
          we have that handled for you!
        </p>
      </div>
    </div>
  );
}

export default Switch;