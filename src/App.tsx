import './App.css';
import { useState, useEffect } from 'react';
import { UserList } from './components/UserList';

export type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export type UserCardProps = {
  user: User;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Mounting User Modules...');

    async function getUsers() {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <>
      <div id="root">
        <div className="header">
          <h2>React - Övning 4</h2>
          <p>Återanvändbara komponenter</p>
        </div>
        <div className="assignment">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && <UserList users={users} />}
        </div>
        <div>
          <small>Alexander Tjernström, IT-Högskolan JSU25</small>
        </div>
      </div>
    </>
  );
}

export default App;
