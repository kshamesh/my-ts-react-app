// store.ts
import { create } from "zustand";

interface User {
  id: number;
  name: string;
}

interface UserStore {
  users: Record<number, User>; // Store users by their ID
  loading: boolean; // Track if data is loading
  setUsers: (users: User[]) => void; // Method to update the store with users
}

export const useUserStore = create<UserStore>((set) => ({
  users: {},
  loading: true,
  setUsers: (users) =>
    set({
      users: users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {}),
      loading: false,
    }),
}));
