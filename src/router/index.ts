import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

// 声明 meta和自定义的属性hidden
declare module "vue-router" {
  interface RouteMeta {
    title: string;
    icon?: string;
  }
  interface _RouteRecordBase {
    hidden?: string | number | boolean;
  }
}

const Layout = () => import("@/views/layout/index.vue");
const Login = () => import("@/views/login/index.vue");
const NotFound = () => import("@/views/NotFound.vue");

const Statistics = () => import("@/views/statistics/index.vue");
const MemberStatistics = () =>
  import("@/views/statistics/MemberStatistics.vue");
const MoneyStatistics = () => import("@/views/statistics/MoneyStatistics.vue");

const System = () => import("@/views/system/index.vue");
const Users = () => import("@/views/users/index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    meta: {
      title: "首页",
      icon: "HomeFilled",
    },
    component: Layout,
    children: [
      {
        path: "/home",
        component: Home,
        meta: {
          title: "首页",
        },
      },
      {
        path: "/statistics",
        component: Statistics,
        meta: {
          title: "统计",
          icon: "Histogram",
        },
        children: [
          {
            path: "/memberStatistics",
            component: MemberStatistics,
            meta: {
              title: "会员统计",
            },
          },
          {
            path: "/moneyStatistics",
            component: MoneyStatistics,
            meta: {
              title: "资金统计",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/Users",
    name: "Users",
    meta: {
      title: "用户",
      icon: "UserFilled",
    },
    component: Layout,
    children: [
      {
        path: "/Users",
        component: Users,
        meta: {
          title: "用户",
        },
      },
    ],
  },
  {
    path: "/System",
    name: "System",
    meta: {
      title: "系统",
      icon: "Tools",
    },
    component: Layout,
    children: [
      {
        path: "/System",
        component: System,
        meta: {
          title: "系统",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "登录",
    },
    component: Login,
  },
  {
    path: "/notfound",
    name: "NotFound",
    hidden: true,
    meta: {
      title: "404",
    },
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
});

export default router;
