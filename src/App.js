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
   
    <img
    src="https://media.istockphoto.com/photos/weather-forecast-concept-picture-id531889697?k=20&m=531889697&s=612x612&w=0&h=Pl_z87kLerrlN76k83OtXhURIm5P0YR83tBHnTsMKPU="
    width='1400rem'
    height='400rem'
    alt='wether '
    className='rounded mx-auto d-block' ></img>
    
    <div className="App">

    <input onChange={(e) => setCountryName(e.target.value)} value={counterName} className="form-control" type="text" placeholder="Enter country name " />
    <h4 className='text-center mt-3 ml-60  w-100'>The Weather in {' '} <span>{counterName}</span> is: {""}</h4>
    <h4 className='text-center mt-3 ml-60  w-100'> Temperature : {temperature} {""}</h4>
    <h4 className='text-center mt-3 ml-60  w-100'> wind : {wind} {""} </h4>
 
</div>

    </>
  );
}

export default App;
