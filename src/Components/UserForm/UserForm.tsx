import { useState } from "react";
import { User } from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const initialState = {
  name: "",
  email: "",
  active: false,
  role: "",
};

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setUser((prev) => ({
      ...prev,
      active: isChecked,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.name && user.email && user.role) {
      onSubmit({
        id: Math.random().toString(),
        ...user,
      });
      setUser(initialState);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h4>Добавить нового пользователя</h4>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={handleChange}
            value={user.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Почта</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="form-group">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={handleCheckboxChange}
            checked={user.active}
          />
          <label htmlFor="checkbox" className="form-check-label ms-2">
            Активен:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="role">Роль:</label>
          <select
            name="role"
            id="role"
            className="form-select"
            onChange={handleChange}
            value={user.role}
          >
            <option defaultValue={"role"}>Выберите роль</option>
            <option value="user">Пользователь</option>
            <option value="editor">Редактор</option>
            <option value="admin">Администратор</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Создать
        </button>
      </form>
    </div>
  );
};

export default UserForm;
