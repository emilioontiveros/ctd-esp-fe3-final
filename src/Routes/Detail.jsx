import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Detail = () => {
 
  const [data, setData] = useState(null); 
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setData(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div
    className={state.theme} 
    style={{ height: "75vh", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center"}}>
      <h1 style={{margin: "60px 0"}}>Detail Dentist {data?.name}</h1>
      <TableContainer sx={{display: "flex", justifyContent: "center"}}>
      <Table aria-label="simple table" className={state.theme}  sx={{width: "80vw"}}>
        <TableHead>
          <TableRow>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Name</TableCell>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Email</TableCell>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Phone</TableCell>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.name}</TableCell>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.email}</TableCell>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.phone}</TableCell>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.website}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Detail