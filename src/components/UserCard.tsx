import type { UserCardProps } from '../App';

export const UserCard = ({ user }: UserCardProps) => {

  return (
    <div className='userCard'>
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.city}</p>
      </div>

      <button
        onClick={() => {
          console.log(`Clicked button for: ${user.name}`);
        }}
      >
        Visa info
      </button>
    </div>
  );
};
