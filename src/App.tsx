import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('Mounting User Modules...')

  async function getUsers() {
    try {
      setLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  getUsers()
}, [])

  return (
    <>
      <div id="root">
        <div className="header">
          <h2>React - Övning 4</h2>
          <p>Återanvändbara komponenter</p>
        </div>
        <div>
        </div>
        <div>
          <small>Alexander Tjernström, IT-Högskolan JSU25</small>
        </div>
      </div>
    </>
  );
}

export default App;
