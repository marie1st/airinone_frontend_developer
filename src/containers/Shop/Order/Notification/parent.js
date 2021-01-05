import React, {useEffect, useState } from 'react';
import Notification from './Notification';
import axios from 'axios';

export default function Parent() {
const [notes, getNotes] = useState();

  const url = "http://localhost:3000/";

  useEffect(() => {
    
    getAllNotes();

  }, []);

  const getAllNotes = () => {
    axios.get(`${url}order-products`)
      .then((response) => {
        const allNotes = response.data.notes.allNotes;
        getNotes(allNotes);
      })
      .catch(error => console.error(`Error: ${error}`));
  }
  return(
      <Notification notes={notes}/>
  )
}
