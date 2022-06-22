export const defaultAvatarUrl = "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

export function getInitials(fullName) {
  return fullName
    .split(" ")
    .map((n) => n[0])
    .join("");
}