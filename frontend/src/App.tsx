import React, { Suspense, useState } from 'react'

import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>

      <Suspense fallback={
        <div className="spinner-border" role="status">
        </div>
      }>

        {useRoutes(routes)}

      </Suspense>

    </div>
  )
}

export default App
