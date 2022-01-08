import React from 'react';
const api = {
  key: '160a2a6a225cd6bb6f054adeb461ebbd',
  base: 'api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" name="search" id="search-bar" placeholder='Search...'/>
        </div>
      </main>
    </div>
  );
}

export default App;
