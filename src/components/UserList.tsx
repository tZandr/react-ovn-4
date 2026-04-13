import type { User } from '../App';
import { UserCard } from './UserCard';

export function UserList({ users }: { users: User[] }) {
  return (
    <div>
      {users.map((u) => (
        <UserCard
          user={u}
          color={u.address.city === 'Wisokyburgh' ? 'darkgreen' : 'transparent'}
          key={u.id}
        />
      ))}
    </div>
  );
}
