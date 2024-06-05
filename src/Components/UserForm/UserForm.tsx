const UserForm = () => {
  return (
    <div>
      <form>
        <h4>Добавить нового пользователя</h4>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Почта</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="form-check-label ms-2">
            Активен:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="role">Роль:</label>
          <select name="role" id="role" className="form-select">
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
