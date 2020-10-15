import React, { useState } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const EntryContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const EntryProvider = props => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({})

  const getEntries = () => {
    return fetch("http://localhost:8088/entries")
      .then(res => res.json())
      .then(setEntries);
  };

  const getEntryById = id => {
    return fetch(`http://localhost:8088/entries/${id}`)
      .then(res => res.json())
      .then(setEntry);;
  };

  const deleteEntry = entry => {
    return fetch(`http://localhost:8088/entries/${entry.id}`, {
      method: "DELETE"
    }).then(getEntries);
  };

  return (
    <EntryContext.Provider value={{
        entries, getEntries, deleteEntry, getEntryById, entry, setEntry
    }}>
      {props.children}
    </EntryContext.Provider>
  )
}