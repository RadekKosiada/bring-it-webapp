import React from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function LoadingSign() {

  return (
    <div>
      <FontAwesomeIcon className="loading-sign" icon={faSpinner} />
    </div>
  )
}

export default LoadingSign;


