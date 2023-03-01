import React from 'react'

export default function CardInput({ formTitle, labelId, placeHolder, minLength, maxLength, pattern }) {
  return (
    <>
      <label for={labelId}>{formTitle}</label>
      <input 
        type="text" 
        id={labelId} 
        placeholder={placeHolder} 
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required
      />
      {/* <div>cardInput</div> */}
    </>
  )
}
