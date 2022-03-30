import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { btnPermission } from "@/untils/permission";
import store from "@/store";
import { shallowRef } from "vue";
import Home from "../views/Home.vue";

// 声明 meta和自定义的属性hidden
declare module "vue-router" {
  interface RouteMeta {
    isAdmin?: boolean;
    title: string;
    icon?: string;
    rules?: Array<string>;
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
        component: shallowRef(Home),
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
const userRoutes: Array<RouteRecordRaw> = [
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
      isAdmin: true,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
});
let isLoad = true;
router.beforeEach((to, from, next) => {
  const userInfo = window.localStorage.getItem("userLogin") as string;
  // console.log(from);
  if (userInfo) {
    const isLogin = JSON.parse(userInfo).isLogin;
    // const isAdmin = JSON.parse(userInfo).userinfo.isAdmin;
    if (isLogin > 0) {
      store.commit("getUrl", to.fullPath);
      store.commit("setRouters", { routes, userRoutes });
      const allRoutes = store.state.getUrl.allRouters as Array<RouteRecordRaw>;
      // console.log(allRoutes, 100);
      if (isLoad) {
        for (const r of allRoutes) {
          router.addRoute(r);
        }
        next({ ...to, replace: true });
        isLoad = false;
      } else {
        next();
      }
      store.commit("permissionArr", btnPermission(to));
    } else {
      next({ path: "/login" });
    }
  } else {
    if (to.path === "/login") {
      store.commit("getUrl", from.fullPath);
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
