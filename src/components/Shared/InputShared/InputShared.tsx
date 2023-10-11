import React, { ChangeEvent, useState } from 'react'
import './inputshared.css'

interface PropsInputShared {
  titleInput: string;
  typeInput: string;
  nameInput: string;
  valueInput?: string;
  placeholder: string;
  inputChange: (name: string, value: string) => void;
}

function InputShared({inputChange, nameInput, titleInput, typeInput, placeholder}:PropsInputShared) {

  const handleInputSharedChange = ({target}:ChangeEvent<HTMLInputElement>) => {
    inputChange(target.name, target.value)
  }

  return (
    <div className='inputSharedMainContainer'>
      <h4 className='titleInputShared'>{titleInput}:</h4>
      <input type={typeInput} name={nameInput} placeholder={placeholder} onChange={handleInputSharedChange} className='inputShared'/>
    </div>
  )
}

export default InputShared