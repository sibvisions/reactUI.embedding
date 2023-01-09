import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { ReactUI, useAPI } from '@sibvisions/reactui';
import 'primeicons/primeicons.css';
import ScreenWrapperTest from "./components/ScreenWrapperTest";

const App = () => {
  const api = useAPI();

  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }]);

  const handleIncrement = (counter) => {
    const countersCopy = [...counters];
    const index = countersCopy.indexOf(counter);
    countersCopy[index] = { ...counters[index] };
    countersCopy[index].value++;
    setCounters(countersCopy);
  }

  const handleDecrement = (counter) => {
    const countersCopy = [...counters];
    const index = countersCopy.indexOf(counter);
    countersCopy[index] = { ...countersCopy[index] };
    countersCopy[index].value--;
    setCounters(countersCopy);
  }

  const handleReset = () => {
    const newCounters = counters.map(c => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  };

  const handleDelete = (counterId) => {
    const newCounters = counters.filter(c => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  const onLogin = () => {
    api.addScreenWrapper("EmbExa-K2", <ScreenWrapperTest/>);
  }

  const handleInsertClick = () => {
    api.insertRecord("EmbExa-K2", "countertest/EmbExa-K2/embedexample#0");
  }

  const handleDeleteClick = () => {
    api.deleteRecord("EmbExa-K2", "EmbExa-K2_NT_embedexample", "countertest/EmbExa-K2/embedexample#0");
  }

  return (
    <div>
      <NavBar
        totalCounters={counters.filter(c => c.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onRestart={handleRestart}
        />
        <div className="btnwrapper"> 
          <button className="btn btn-info m-2" onClick={handleInsertClick}>Insert new Record!</button>
          <button className="btn btn-danger m-2" onClick={handleDeleteClick}>Delete Record!</button>
        </div>
        <ReactUI style={{height: '500px'}} onLogin={onLogin} embedOptions={{ appName:"countertest", baseUrl:"http://localhost/services/mobile", langCode:"en" }}/>
      </main>
    </div>
  );
}
export default App;
