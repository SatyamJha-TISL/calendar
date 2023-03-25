import * as React from 'react';
import { useState } from "react";
import '../src/App.css'
import Calendar from "./Components/Calendar";



function App() {

  const [value, setValue] = useState<string>("");
  const [sendValue, setSendValue] = useState<string>("1/1/2023");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSendValue("")
    setSendValue(value)

  }

  return (
    <div className="App">

      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <input placeholder="1/1/2023" className="form-field" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value={value} />
          <label htmlFor="calendar" className="form-label"></label>
          <button className="button" type="submit">SHOW CALENDAR</button>
        </form>
      </div>

      {sendValue && <Calendar dateValueProp={sendValue} />}
    </div>
  );
}

export default App;
