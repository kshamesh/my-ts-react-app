// PostsComponent.tsx
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useUserStore } from "./store";
import UserNameCellRenderer from "./UserNameCellRenderer";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const { setUsers, users } = useUserStore();

  const [columnDefs] = useState([
    { headerName: "Post Title", field: "title" },
    {
      headerName: "User Name",
      field: "userId", // Use userId as the field here
      cellRenderer: UserNameCellRenderer, // Use custom cell renderer
    },
  ]);

  useEffect(() => {
    console.log({ users });
  }, [users]);

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      // Fetch posts
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await postsResponse.json();
      setPosts(postsData);

      // Extract unique userIds from posts
      const userIds = Array.from(
        new Set(postsData.map((post: { userId: number }) => post.userId))
      );

      // Fetch users based on the extracted userIds
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = await usersResponse.json();

      // Filter users to only those that are needed
      const filteredUsers = usersData.filter((user: { id: number }) =>
        userIds.includes(user.id)
      );

      setTimeout(() => setUsers(filteredUsers), 2000);
    };
    // Update Zustand store with fetched users

    fetchPostsAndUsers();
  }, [setUsers]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={posts} columnDefs={columnDefs as any} />
    </div>
  );
};

export default PostsComponent;
