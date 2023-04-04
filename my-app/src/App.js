function Heading(props){
  return <h1>{props.title}</h1>
}
function App() {
  const styles = {
    form:{
      width :"50%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      height: "60vh",
      fontFamily: "Helvetica sans-serif",
      border:"3px solid aqua",
      borderRadius: "5px",
      marginTop: "80px",
    },
    heading:{
      color:"black",
      fontSize: "30px",
      display:"flex",
      margin: "auto",
      justifyContent: "center",
    },
    input: {
      width: "90%",
      padding: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      color: "red",
    },
    button: {
      width: "40%",
      fontSize: "16px",
      display:"flex",
      margin: "auto",
      padding: "10px",
      justifyContent: "center",
      backgroundColor: "aqua",
      color: "black",
      borderRadius: "10px",
    },
  };
  return (
    <div className="App">
    <form className="form" style={styles.form}>
      <Heading style={styles.heading} title="Basic Form Setup"/>
      <label for=""> Name :
        <input type="text" style={styles.input}></input>
      </label>
      <label for=""> Email :
        <input type="email" style={styles.input}></input>
      </label>
      <label for=""> Contact :
        <input type="contact" style={styles.input}></input>
      </label>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
    </div>
  );
}

export default App;
