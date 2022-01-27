import React from 'react';


function ErrorMessage({ errorMessage }: { errorMessage: string }) {

  return (
    <div>
      <p>{errorMessage}</p>
      <p>Bitte versuchen Sie es nochmal</p>
    </div>
  )
}

export default ErrorMessage;