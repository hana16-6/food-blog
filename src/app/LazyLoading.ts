import React from "react";
const HomePage = React.lazy(() => import("../pages/Home"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

// No Auth

const PUBLIC_ROUTES = [
  {
    path: "*",
    component: PageNotFound,
  },
];
//Need Auth
const AUTH_ROUTES = [
  {
    path: "/",
    component: HomePage,
  },
];
export { PUBLIC_ROUTES, AUTH_ROUTES };
