const RoleSwitcher = ({ role, setRole }) => {
  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
     className="p-2 border rounded bg-white dark:bg-gray-700"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;