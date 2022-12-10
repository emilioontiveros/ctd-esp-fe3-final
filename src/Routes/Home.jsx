import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch({
        type: "API_HOME",
        payload: {
          ...state,
          data: res.data,
        }
      })
    })
  }, [])

  return (
    <main className={state.theme} style={{padding: "20px"}}>
      <h1 style={{textAlign: "center"}}>Home</h1>
      <div className='card-grid'>
        {state.data.map(doctor => (
          <Card key={doctor.id} id={doctor.id} name={doctor.name} username={doctor.username}/>
        ))}
      </div>
    </main>
  )
}

export default Home