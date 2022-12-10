import React, { useContext } from 'react'
import FormComponent from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={`contact ${state.theme}`} style={{height: "80vh"}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <h1>Signup</h1>
      <FormComponent />
    </div>
  )
}

export default Contact