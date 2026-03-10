import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/rootLayout.tsx", [
    index("routes/home.tsx"),
    route("lessons", "routes/lessons/index.tsx"),
    route("lessons/guitar", "routes/lessons/guitar.tsx"),
    route("lessons/bass", "routes/lessons/bass.tsx"),
    route("contact", "routes/contact.tsx"),
    route("free-stuff", "routes/free-stuff.tsx"),
  ]),
] satisfies RouteConfig;
