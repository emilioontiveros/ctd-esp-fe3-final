import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button } from '@mui/material';
import { ContextGlobal } from './utils/global.context';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6)
    .max(50)
    .required(),
  email: Yup.string().email().required(),
});

const FormComponent = () => {

  const { state } = useContext(ContextGlobal);

  const [mensaje, setMensaje] = useState("");

  return(
  <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, e) => {
        setMensaje(`Gracias ${values.name}, te contactaremos cuanto antes vía mail`);
      }}
    >
      <Form style={{display: "flex", flexDirection: "column", width: "25%", justifyContent: "space-around", height: "200px"}}>
        <Field name="name" placeholder="Nombre completo" style={{padding: "10px", borderRadius: "8px"}}/>
        <Field name="email" placeholder="Email" style={{padding: "10px", borderRadius: "8px"}}/>
        <Button 
        type="submit" 
        onClick={() => setMensaje("Por favor verifique su información nuevamente")}
        sx={state.theme === "dark" ?
        {bgcolor: "white", color: "black", "&:hover": {backgroundColor: "black", color: "white", border: "2px solid white"}} :
        {bgcolor: "black", color: "white", "&:hover": {backgroundColor: "white", color: "black", border: "2px solid black"}}}
        >
          Send
        </Button>
      </Form>  
    </Formik>
    <p style={{textAlign: "center"}}>{mensaje}</p>
  </Box>
  )
};

export default FormComponent;
