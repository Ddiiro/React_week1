function App() {
  const styles = {
    main: {
      display:" flex",

    },
    form:{
      width :"50%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      height: "100%",
    },
    input: {
      width: "90%",
      padding: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      margin: "auto",
      color: "red",
    },
  };
  return (
    <div className="App">
    <form className="form" style={styles.form}>
      <h1>Basic Form Setup</h1>
      <label style={styles.main} for=""> Name :
        <input type="text" style={styles.input}></input>
      </label>
      <label for=""> Email :
        <input type="email"></input>
      </label>
      <label for=""> Contact :
        <input type="contact"></input>
      </label>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
