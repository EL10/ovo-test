import { Home } from "../home/pages";

import { ComponentType } from "react";

interface IRoute {
  path: string;
  component: any;
}

export const NO_LOGIN_ROUTES: IRoute[] = [{ path: "", component: Home }];
