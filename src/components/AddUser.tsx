import { useContext, useState } from "react";
import { UserContext } from "../context";
import { InputUser } from "../types";

export const AddUser = () => {
  const [error, setError] = useState<string | null>(null); 
  const [user, setUser] = useState<InputUser>({ name: "", age: 0, salary: 0 }); 
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error("Context has not been used in Add User Component");
  }

  const { handleAdd } = context;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user.name.trim() || !user.age || !user.salary) {
      return setError("All fields must be filled");
    }
    setError(null);
    handleAdd(user);  
    setUser({ name: "", age: 0, salary: 0 }); 
  };

  return (
    <>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter your age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: +e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter your salary"
            value={user.salary}
            onChange={(e) => setUser({ ...user, salary: +e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
};
