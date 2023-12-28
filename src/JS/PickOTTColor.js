import React, {useState} from 'react';

function PickOTTColor({children}){
  const [divState, setDivState] = useState(false);
  const [filterState, setFilterState] = useState('none');
  const [backState, setBackState] = useState('none');
  
  const handleDivClick = ()=>{
    const newFilterState = divState ? 'none' : 'grayscale(100%)';
    const newBackState = divState ? 'var(--neutral2)' : 'var(--orange_400)';

    setDivState(!divState);
    setFilterState(newFilterState);
    setBackState(newBackState);
  }

  const divStyle = {
    filter: filterState,
    backgroundColor: backState
  }

  return (
    <div 
      style = {divStyle} 
      className='ott_pick_logo'
      onClick = {handleDivClick}>

      {children}
    </div>
  )

}

export default PickOTTColor;