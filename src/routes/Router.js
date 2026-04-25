import React, {lazy} from "react";
import {Navigate} from 'react-router-dom';
import TechnicalEvents from "../components/Technozarre/TechnicalEvents";

const Home = lazy(() => import('../pages/Home'));
const PhotoGallery = lazy(() => import('../pages/PhotoGallery'));
const Technozarre = lazy(() => import('../pages/Technozarre'));
const TheTeam = lazy(() => import('../pages/TheTeam'));

const Router = [
  {
    path : '/' , element: <Navigate to = '/home' />
  },
  {
    path : '/home' , element: <Home />
  },
  {
    path : '/photogallery' , element: <PhotoGallery />
  },
  {
    path : '/technozarre' , element: <Technozarre />, 
  },
  {
    path : '/team' , element : <TheTeam />
  },
  {
    path : '/technozarre#technical' , element: <TechnicalEvents />
  }
]

export default Router;