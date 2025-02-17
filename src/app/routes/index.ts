import { Router } from "express";
import { UserRoutes } from "../module/user/user.route";
import { StudentRoutes } from "../module/student/student.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
