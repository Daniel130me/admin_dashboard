const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? "/api" : "http://localhost:3001");

export const mockApi = {
  getStats: async () => {
    const response = await fetch(`${API_URL}/stats`);
    return await response.json();
  },

  getUsers: async () => {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
  },

  getProducts: async () => {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  },

  addUser: async (user) => {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
        avatar: `https://picsum.photos/seed/${Date.now()}/40`,
      }),
    });
    return await response.json();
  },

  deleteUser: async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  },
};
