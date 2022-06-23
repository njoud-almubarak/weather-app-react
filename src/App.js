import './App.css';
import { useEffect, useState } from 'react';




function App() {

  const [counterName, setCountryName] = useState(''); 
  const [temperature, setTemperature] = useState('');
  const [wind, setWind] = useState('');
 





  useEffect (() => {
    const Weather = async (e) => {
      const request = await fetch( `https://goweather.herokuapp.com/weather/${counterName}`);
      const data = await request.json();
      setTemperature(data.temperature);
      setWind(data.wind);};
    
      Weather();
  }, [counterName]);




  return (
    <>
   
   
    
    <div className="App">

    <h4 className='text-center mt-3 mb-3 ml-60  w-100'>Weather App </h4>
    <input onChange={(e) => setCountryName(e.target.value)} value={counterName} className="form-control" type="text" placeholder="Enter country name " />
    <h4 className='text-center mt-3 ml-60  w-100'>The Weather in {' '} <span>{counterName}</span>  {""}</h4>
    <h4 className='text-center mt-3 ml-60  w-100'> Temperature : {temperature} {""}</h4>
    <h4 className='text-center mt-3 ml-60  w-100'> wind : {wind} {""} </h4>
 
</div>

    </>
  );
}

export default App;
