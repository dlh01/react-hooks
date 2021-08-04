// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const useLocalStorageState = (key, initial = '') => {
    const [item, setItem] = React.useState(() => {
      return window.localStorage.getItem(key) || initial;
    });

    React.useEffect(() => {
      window.localStorage.setItem(key, item);
    }, [key, item]);

    return [item, setItem];
  };

  const [name, setName] = useLocalStorageState('name', initialName);

  const handleChange = (event) => {
    setName(event.target.value)
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
