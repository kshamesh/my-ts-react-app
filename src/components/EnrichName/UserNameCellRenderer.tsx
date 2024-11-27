// UserNameCellRenderer.tsx
import React from "react";
import { useUserStore } from "./store";

interface UserNameCellRendererProps {
  value: number; // userId passed from the grid
}

const UserNameCellRenderer: React.FC<UserNameCellRendererProps> = ({
  value,
}) => {
  const { users, loading } = useUserStore();

  if (loading) {
    return <span>Loading...</span>;
  }

  const user = users[value];

  if (!user) {
    return <span>User Not Found</span>;
  }

  return <span>{user.name}</span>;
};

export default UserNameCellRenderer;
