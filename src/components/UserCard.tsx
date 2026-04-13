import type { UserCardProps } from '../App';

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="userCard">
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        {user.address.city === 'Wisokyburgh' && (
          <small>Ingen av dom här städerna existerar</small>
          // Läste fel; trodde vi skulle använda API så det får bli såhär
        )}
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
