import React from 'react';
import { Route, Routes as RRDRoutes } from 'react-router-dom';

const Landing = React.lazy(() => import(/* webpackChunkName: "landing" */ './pages/landing'));

const RestaurantDetails = React.lazy(
  () => import(/* webpackChunkName: "restaurant-details" */ './pages/restaurant-details')
);

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={null}>
      <RRDRoutes>
        <Route path={'*'} element={<Landing />} />
        <Route path={'/restaurant*'} element={<RestaurantDetails />} />
      </RRDRoutes>
    </React.Suspense>
  );
};

export default Routes;
