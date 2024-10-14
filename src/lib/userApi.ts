export async function fetchUsers() {
  const response = await fetch("/api/list-users");
  const data = await response.json();
  return data;
}

export async function addUser(data: { name: string; email: string }) {
  const response = await fetch("/api/create-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error during user creation");
  }

  return await response.json();
}
