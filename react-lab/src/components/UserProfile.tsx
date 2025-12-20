import type { User } from "../types/user";

type Props = {
  showProfile: User;
};

const UserProfile = ({ showProfile }: Props) => {
  return (
    <div>
      <h2>UserProfile</h2>
      <div>
        <p>Fullname: {showProfile.fullname} </p>
        <p>Age: {showProfile.age} </p>
        <p>Education: {showProfile.education} </p>
        <p>Gender: {showProfile.gender} </p>
        <p>Skills: {showProfile.skills.join(",")} </p>
        <p>Bio: {showProfile.bio} </p>
      </div>
    </div>
  );
};

export default UserProfile;
