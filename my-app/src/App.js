import  React  from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

let formSchema = yup.object().shape({
  name: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  email: yup.string()
  .email('Invalid email')
  .required('Required'),
  contact: yup.string()
  .contact()
  .required('Required'),
});


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
  const [likes, setLikes] = React.useState(0);
  function handleClick(){
    setLikes(likes + 1);
  }

  const ChangeBackgroundColor = {
    backgroundColor: "black",
    color: "aqua",
    width: "40%",
    fontSize: "16px",
    display:"flex",
    margin: "auto",
    padding: "10px",
    justifyContent: "center",
    borderRadius: "10px",
  }

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

  const [backgroundColor, setBackgroundColor] = React.useState(buttonStyle.button);
  function handlebackgroundColor(){
    setBackgroundColor(ChangeBackgroundColor);
  }
  
  return <button type="submit" onClick={handleClick} onMouseOver={handlebackgroundColor} style = {backgroundColor}>{props.button}({likes})</button>
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
      <Formik
      initialValues={{
        name: '',
        email: '',
        contact: '',
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        console.log(values);
      }}
      >
    <form className="form" style={styles.form}>
      <Heading title="Basic Form Setup"/>
      <Label labelName ="Name :"/>
        <input name='name' type="text" style={styles.input}></input>
        <Label labelName ="Email :"/>
        <input name='email' type="email" style={styles.input}></input>
        <Label labelName ="Contact :"/>
        <input name='contact' type="contact" style={styles.input}></input>
      <Button button ="Submit" />
    </form>
    </Formik>
    </div>
  );
}

export default App;
