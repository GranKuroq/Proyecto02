import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTeams } from './services/api';


import { MainCore } from './components/MainCore';
// import { Header } from './components/Header';



const App = () => { 

  const [teams, setTeams] = useState([]); 

  const [loading, setLoading] = useState(true); 
  
  useEffect(() => { 

    const fetchTeams = async () => { 

      try { 

        const data = await getTeams(); 
        setTeams(data.response); 
        setLoading(false); 

      } catch (error) { 
        console.error('Error fetching teams:', error); 
      } 
    }; 

    fetchTeams(); 
    
  }, []); 
  
  return ( 
  <div className="App">
     <h1>Equipos de la Liga Argentina</h1> 
     {loading ? ( 
      <p>Cargando...</p> 
    ) : ( 
    <ul> 
      {teams.map((team) => ( 
        <li key={team.team.id}>
           {team.team.name} 
        </li> 
      ))} 
    </ul> 
    )} 
  </div> 
  ); 
}; 

export default App;


// export default function App() {
//   const [search, setSearch] = useState('');
//   const [ListClubs, setListClubs] = useState([]);

//   const API_URL= "WWW.X.COM" + search;

//   const changeSearch = (value) => { setSearch = (value); }

//   useEffect (() => {

//     const fetchData = async () => {
//       const response = await fetch(API_URL);
//       const data = await response.json();

//       setListClubs (data);
//     }
//     fetchData();

//   }, [search]);
 
//   return (
//     <>
//     <Header search={search} changeSearch={changeSearch} />

//   <Routes>
//     <Route index path="/" element={<MainCore ListClubs={ListClubs} />} />
//   </Routes>

//     </>
//   )
// }

//avance hasta minuto 45, clase 27