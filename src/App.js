import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {data} from './Datastore.js'
import { unstable_batchedUpdates } from 'react-dom';


function App() {

  const [search, setSearch] = useState('');

  const filterdata = data.filter( key => {

    return key.Pagename.toLowerCase().includes( search.toLowerCase() )
  
  } );  
  
const RenderList = filterdata.map((key) =>

<li class="lirender">  <a class="Linktext"href={key.Direct}> {key.Pagename} </a> </li>

    );

  ReactDOM.render(

  <ul> {RenderList} </ul>,
  document.getElementById('Rendered')

  );


  return (

(<div>


<div class="Panel1"> 
  
  <input type="text" placeholder="Search Anime" id="DirectorySearch" class="Searchbar" onChange={ e => setSearch(e.target.value)}/>
 
   </div>

   

</div>)
  );
}
  
export default App;