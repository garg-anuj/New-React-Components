// Dynamic Role-Based Access Control

const COMMENT_ACTIONS = [
  { action: "update:comments", label: "Edit" },
  { action: "delete:comments", label: "Delete" },
  { action: "pin:comments", label: "Pin" },
  { action: "report:comments", label: "Report" },
  { action: "like:comments", label: "Like" },
];

const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  moderator: ["view:comments", "create:comments"],
  user: [
    "view:comments",
    "create:ownComments",
    "update:ownComments",
    "delete:ownComments",
  ],
};
