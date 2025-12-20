import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import type { User } from "./types/user";

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: uuidv4(),
      fullname: "John Smith",
      age: 20,
      education: "grade school",
      gender: "female",
      skills: ["react", "node"],
      bio: "Hello",
    },
  ]);

  const [formData, setFormData] = useState<Omit<User, "id">>({
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: "",
  });

  const [editUserId, setEditUserId] = useState<string | null>(null);

  const [showProfile, setShowProfile] = useState<User>({
    id: "",
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: "",
  });

  const handleShowProfile = (id: string) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    setShowProfile(user);
  };

  const handleAdd = (user: Omit<User, "id">) => {
    if (editUserId === null) {
      setUsers((curr) => [...curr, { ...user, id: uuidv4() }]);
    } else {
      setUsers((curr) =>
        curr.map((u) =>
          u.id === editUserId ? { ...formData, id: editUserId } : u,
        ),
      );
      setEditUserId(null);
    }

    console.log("user added");
  };

  const handleDelete = (id: string) => {
    const result = confirm("Are you sure you want to delete this user?");
    if (result) {
      setUsers((curr) => curr.filter((u) => u.id != id));
      console.log("User deleted");
    }
  };

  const handleUserEdit = (id: string) => {
    const user = users.find((e) => e.id === id);
    if (!user) {
      setFormData({
        fullname: "",
        age: 0,
        education: "",
        gender: "",
        skills: [],
        bio: "",
      });
      return;
    }
    setFormData(user);
    setEditUserId(user.id);
  };

  return (
    <>
      {users.length > 0 ? (
        <UserList
          users={users}
          onDelete={handleDelete}
          onEdit={handleUserEdit}
          onShowProfile={handleShowProfile}
        />
      ) : (
        <p>No users on record</p>
      )}
      <UserForm
        onAdd={handleAdd}
        formData={formData}
        setFormData={setFormData}
      />
      {showProfile && <UserProfile showProfile={showProfile} />}
    </>
  );
};

export default App;
