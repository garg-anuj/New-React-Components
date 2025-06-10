import { PERMISSIONS } from "../constant";
import HasPermission from "./HasPermission";

export const items = [
  { id: 1, name: "2kg Tomato" },
  { id: 2, name: "5kg Onion" },
];

const ListItem = ({ item, onEdit, onDelete }) => {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
      <div>{item.name}</div>

      <HasPermission permission={PERMISSIONS.EDIT}>
        <button
          className="border px-2 rounded-[.25rem]"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>
      </HasPermission>

      <HasPermission permission={PERMISSIONS.DELETE}>
        <button
          className="border px-2 rounded-[.25rem]"
          onClick={() => onDelete(item)}
        >
          Delete
        </button>
      </HasPermission>
    </div>
  );
};

export default ListItem;
