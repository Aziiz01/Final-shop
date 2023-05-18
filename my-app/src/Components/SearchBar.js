import React from 'react';
import{BsSearch} from 'react-icons/bs';

function SearchBar() {
  return (
    <div className="search-bar" style={{display:'flex' }}>
      <input type="text" placeholder="Search" style={{width:'80%', marginLeft:'10%'}}/>
      <button style={{width: '50px', height:'50px', marginRight:'5px',marginLeft:'5px',marginTop:'10px',backgroundColor:'transparent'}}><BsSearch/></button>
    </div>
  );
}

export default SearchBar;