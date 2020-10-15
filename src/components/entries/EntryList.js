import React, { useContext, useEffect, useState } from "react";
import { EntryContext } from "./EntryProvider";
import { Entry } from "./Entry";
import { MoodContext } from "../moods/MoodProvider";

export const EntryList = () => {
  const { entries, getEntries} = useContext(EntryContext);
  const [filteredEntries, setEntries] = useState([]);
  const { moods, getMoods } = useContext(MoodContext);

  useEffect(() => {
    getEntries()
      .then(getMoods)
  }, []);

  useEffect(() => {
    setEntries(entries)
  }, [entries])


  return (
    <>

      <h1>Entries</h1>

      <div className="entries">
        {entries.map(entry => {
          return <Entry key={entry.id} entry={entry} moods={moods} />;
        })}
      </div>

    </>
  )
}