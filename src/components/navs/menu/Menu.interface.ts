export interface IMenuAdmin {
  name: string;
  links: IMenuLink[];
}

export interface IMenuLink {
  name: string;
  link: string;
}

export const menuAdmin: IMenuAdmin[] = [
  {
    name: "hall",
    links: [
      {
        name: "halls",
        link: "/admin/halls",
      },
      {
        name: "create hall",
        link: "/admin/hall/create",
      },
    ],
  },
  {
    name: "movie",
    links: [
      {
        name: "create movie",
        link: "/admin/movie/create",
      },
      {
        name: "movies",
        link: "/admin/movies",
      },
    ],
  },
  {
    name: "show",
    links: [
      {
        name: "create show",
        link: "/admin/show/create",
      },
      {
        name: "shows",
        link: "/admin/shows",
      },
    ],
  },
];
