import type { User } from '../App';
import { UserCard } from './UserCard';

export function UserList({ users }: { users: User[] }) {
  return (
    <div>
      {users.map((u) => (
        <UserCard user={u} key={u.id} />
      ))}
    </div>
  );
}
