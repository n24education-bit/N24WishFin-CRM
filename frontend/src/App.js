import React from 'react';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

const App = () => {
  const userRole = 'admin'; // Replace with actual user role logic

  return (
    <div>
      <Navigation />
      {userRole === 'admin' ? <Dashboard /> : <h2>Access Denied</h2>}
    </div>
  );
};

export default App;