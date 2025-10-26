import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("finance-education", "routes/finance-education/index.tsx", [
    route("learn-basics", "routes/finance-education/learn-basics.tsx"),
  ]),
] satisfies RouteConfig;
