import { type ChangeEvent, type FormEvent } from "react";
import type { User } from "../types/user";

type Props = {
  formData: Omit<User, "id">;
  setFormData: React.Dispatch<React.SetStateAction<Omit<User, "id">>>;
  onAdd: (user: Omit<User, "id">) => void;
};

const UserForm = ({ onAdd, formData, setFormData }: Props) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(formData);

    setFormData({
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: "",
    });

    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: "",
    });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Fullname:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full name"
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </label>
        <label>
          Education:
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
          >
            <option value="grade">Grade School</option>
            <option value="high">High School</option>
            <option value="college">College</option>
          </select>
        </label>
        <div>
          Gender:
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>
        <div>
          Skills:
          <input
            type="checkbox"
            id="typescript"
            value="typescript"
            name="skills"
            checked={formData.skills.includes("typescript")}
            onChange={handleSkillChange}
          />
          <label htmlFor="typescript">Typescript</label>
          <input
            type="checkbox"
            id="react"
            value="react"
            name="skills"
            checked={formData.skills.includes("react")}
            onChange={handleSkillChange}
          />
          <label htmlFor="react">React</label>
          <input
            type="checkbox"
            id="node"
            value="node"
            name="skills"
            checked={formData.skills.includes("node")}
            onChange={handleSkillChange}
          />
          <label htmlFor="node">Node</label>
          <input
            type="checkbox"
            id="nosql"
            value="nosql"
            name="skills"
            checked={formData.skills.includes("nosql")}
            onChange={handleSkillChange}
          />
          <label htmlFor="nosql">NoSQL</label>
        </div>

        <label htmlFor="">
          About Yourself:{" "}
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell me about yourself"
          ></textarea>
        </label>

        <button type="submit">Add/Save User</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default UserForm;
