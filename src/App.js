
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
     <Countries></Countries>
      
    </div>
  );
}

// function LoadCountries ()
// {
// // Data load steps:
//   const [ countries, setCountries] = useState( [] )
//   // useEffect(,[])
//   // useEffect((),[])
//   // useEffect(()=>{},[])
//   useEffect( () =>
//   {
//     fetch( 'https://restcountries.com/v3.1/all' )
//       .then( res => res.json() )
//       .then( data => setCountries( data ) )
    
//   },[])


//   return (
    
//     <div>
//       <h1>Visiting Every country in of the world </h1>
//       <h3> Avilable Countries{ countries.length }</h3>
//       {
//         // countries.map(country=>console.log(country))
//         // countries.map( country => <p>{country.name.common}</p>)
//         countries.map( country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
  
// }


// function Country (props)
// {
//   return (
//     <><h2>Name:{ props.name }</h2> <h5>Population:{props.population} </h5></>  
   
    
//   )
// }


export default App;
