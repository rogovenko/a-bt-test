import React, { useEffect, useState } from 'react';
import data from './data.json'

function Select() {
  // хорошо бы тут useSelector применить, но у нас нет менеджера состояния сейчас
  const [list, setList] = useState([])
  useEffect(() => {
    setList(data)
  }, [data]);
  
  const [pet, setPet] = useState(null)
  function handleSelect(e){
    e.preventDefault()
    setPet((list.filter(el => el.name === e.target.value))[0])
  }

  function handleType(e){
    switch(e.target.value){
      case 'both': {
        setList(data)
        break;
      }
      case 'cat': {
        setList(data.filter(el => el.type === e.target.value))
        break;
      }
      case 'dog': {
        setList(data.filter(el => el.type === e.target.value))
        break;
      }
      default: {
        setList(data)
      }
    }
  }
  return (
    <div className='container-md col-4'>
      <div>
        <div className="form-check mt-4">
          <input value='both' className="form-check-input" onChange={(e) => handleType(e)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
          Dogs & Cats
          </label>
        </div>
        <div className="form-check">
          <input value='cat' className="form-check-input" onChange={(e) => handleType(e)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
          Only cats
          </label>
        </div>
        <div className="form-check">
          <input value='dog' className="form-check-input" onChange={(e) => handleType(e)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
          Only dogs
          </label>
        </div>
      </div>
          <select className="form-select mt-4" onChange={(e) => handleSelect(e)}>
            <option selected disabled>Choose an animal</option>
            {list.map(item => {
              return (<option key={item.name}>{item.name}</option>)
            })}
          </select>
        {pet && (
          <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Name: {pet.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{pet.type} / {pet.age} y.o.</h6>
            <p className="card-text">Gender: {pet.gender}, has {pet.breed ? 'noble origin' : 'no breed'} </p>
            {pet.features.map(el => (<a href="#" class="card-link">{el}</a>))}
          </div>
        </div>
        )}
    </div>
  )
}

export default Select;

