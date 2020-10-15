import React, { useState } from "react";

export const MoodContext = React.createContext();

export const MoodProvider = props => {
  const [moods, setMoods] = useState([]);

  const getMoods = () => {
    return fetch("http://localhost:8088/moods")
      .then(res => res.json())
      .then(setMoods);
  }

  return (
    <MoodContext.Provider value={{
        moods, getMoods
    }}>
        {props.children}
    </MoodContext.Provider>
  )
}