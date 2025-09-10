import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import MyAds from "../MyAds/MyAds";
import DataUser from "../DataUser/DataUser";
import { RestrictedRoute } from "../RestrictedRoute";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { PrivateRoute } from "../PrivateRoute";
// import clsx from "clsx";

const Layout = lazy(() => import("../Layout/Layout"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const LookForPage = lazy(() => import("../../pages/LookForPage/LookForPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage"));
const AdViewPage = lazy(() => import("../../pages/AdViewPage/AdViewPage"));
const AddAdPage = lazy(() => import("../../pages/AddAdPage/AddAdPage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(refreshUser());
    }
  }, [accessToken, dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="ads" element={<LookForPage />} />
          <Route path="ads/:id" element={<AdViewPage />} />
          <Route
            path="ads/add"
            element={
              <PrivateRoute
                component={<AddAdPage />}
                redirectTo="/auth/login"
              />
            }
          />

          <Route path="profile" element={<ProfilePage />}>
            <Route path="own" element={<MyAds />} />
            <Route path="data" element={<DataUser />} />
          </Route>
          <Route
            path="auth/:authType"
            element={
              <RestrictedRoute component={<AuthPage />} redirectTo="/" />
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
