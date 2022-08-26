import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import RSub11 from '../rouet/Sub11';
import RSub12 from '../rouet/Sub12';
import RSub21 from '../rouet/Sub21';
import RSub22 from '../rouet/Sub22';

function RouterLayout() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Navigate to='/sub11' />} />
        <Route path='sub11' element={<RSub11 />} />
        <Route path='sub12' element={<RSub12 />} />
        <Route path='sub21' element={<RSub21 />} />
        <Route path='sub22' element={<RSub22 />} />
      </Route>
      <Route
        path='*'
        element={
          <main style={{ padding: '100px' }}>
            <h2>Not Found!</h2>
          </main>
        }
      />
    </Routes>
  );
}

export default RouterLayout;
