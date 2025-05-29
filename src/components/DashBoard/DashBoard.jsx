import { AuthProvider } from "./Auth/AuthProvider";
import ListItem from "./components/ListItem";

const ITEMS = [
  { id: 1, name: "2kg Tomato" },
  { id: 2, name: "5kg Onion" },
];

const DashBoard = () => {
  const currentUserRole = "manager"; // Change to 'agent' or 'admin'

  const handleEdit = (item) => alert("Edit: " + item.name);
  const handleDelete = (item) => alert("Delete: " + item.name);

  return (
    <AuthProvider role={currentUserRole}>
      <h1>Inventory List</h1>
      {ITEMS.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </AuthProvider>
  );
};
export default DashBoard;
