import type { User } from "../types/user";

type Props = {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onShowProfile: (id: string) => void;
};

const UserList = ({ users, onDelete, onEdit, onShowProfile }: Props) => {
  return (
    <div>
      <h2>UserList</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.fullname}</td>
              <td>
                <button onClick={() => onShowProfile(u.id)}>View</button>
                <button onClick={() => onEdit(u.id)}>Edit</button>
                <button onClick={() => onDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
