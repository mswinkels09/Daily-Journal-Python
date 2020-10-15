import React from "react";
import { EntryProvider } from "./components/entries/EntryProvider";
import { EntryForm } from "./components/entries/EntryForm";
import { EntryList } from "./components/entries/EntryList";
import { MoodProvider } from "./components/moods/MoodProvider";

export const DailyJournal = () => {
  return (
    <div className="DailyJournal">
      <EntryProvider>
        <MoodProvider >
          <EntryForm />
          <EntryList />
        </MoodProvider>
      </EntryProvider>
    </div>
  )
}