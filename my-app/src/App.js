function Heading(props){
  const HeaderStyle = {
     heading:{
      color:"black",
      fontSize: "50px",
      display:"flex",
      margin: "auto",
      justifyContent: "center",
    },
  }
  return <h1 style={HeaderStyle.heading}>{props.title}</h1>
}

function Button(props) {
  const buttonStyle = {
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
  }
  return <button type="submit" style = {buttonStyle.button}>{props.button}</button>
}

function Label(props) {
  return <label>{props.labelName}</label>
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
    input: {
      width: "90%",
      padding: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      color: "red",
    },
  };
  return (
    <div className="App">
    <form className="form" style={styles.form}>
      <Heading title="Basic Form Setup"/>
      <Label labelName ="Name :"/>
        <input type="text" style={styles.input}></input>
        <Label labelName ="Email :"/>
        <input type="email" style={styles.input}></input>
        <Label labelName ="Contact :"/>
        <input type="contact" style={styles.input}></input>
      <Button button ="Submit" />
    </form>
    </div>
  );
}

export default App;
