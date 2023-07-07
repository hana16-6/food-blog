import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PUBLIC_ROUTES ,AUTH_ROUTES} from "./LazyLoading";

const SuspenseWrapper = (props: { children: React.ReactNode }) => {
  return <React.Suspense fallback="loading">{props.children}</React.Suspense>;
};
const publicRoutes = PUBLIC_ROUTES.map((route,i) => (
  <Route key={i} path={route.path} element={<route.component />} />
));
const authRoutes = AUTH_ROUTES.map((route,i) => (
    <Route key={i} path={route.path} element={<route.component />} />
  ));
function MainRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route
  }, [location]);

  return (
    <SuspenseWrapper>
      <Routes>
       {publicRoutes}
       {authRoutes}
      </Routes>
    </SuspenseWrapper>
  );
}

export default MainRoutes;
