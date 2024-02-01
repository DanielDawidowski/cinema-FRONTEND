export interface IMenuAdmin {
  name: string;
  link: string;
}

export const menuAdmin: IMenuAdmin[] = [
  {
    name: "create hall",
    link: "/admin/hall/create",
  },
  {
    name: "create movie",
    link: "/admin/movie/create",
  },
  {
    name: "movies",
    link: "/admin/movies",
  },
];
