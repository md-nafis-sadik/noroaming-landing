interface IRoute {
  name: string;
  path: string;
}

export interface IRootPaths {
  [key: string]: IRoute;
}
