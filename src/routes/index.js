import { Redirect } from "react-router-dom";
import React from "react";

import InsightsIQ from "../Pages/InsightsIQ";
import UIUXDesign from "../Pages/InsightsIQ/use-cases/UIUX";
import Blogs from "../Pages/InsightsIQ/blogs";
import Blog from "../Pages/InsightsIQ/blog/";
import UseCases from "../Pages/InsightsIQ/use-cases";
import Pricing from "../Pages/InsightsIQ/price";


const PagePublic = [

  { path: '/insightsIQ', component: InsightsIQ},
  { path: '/insightsIQ/blogs', component: Blogs},
  { path: '/insightsIQ/blogs/:blog', component: Blog},
  { path: '/insightsIQ/use-cases', component: UseCases},
  { path: '/insightsIQ/use-cases/uiux-design', component: UIUXDesign},
  { path: '/insightsIQ/pricing', component: Pricing},

  { path: "/", component: () => <Redirect to="/insightsIQ" /> },
];

export { PagePublic };