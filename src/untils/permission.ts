import { RouteRecordRaw, RouteLocationNormalized } from "vue-router";
export function deepRoute(
  routerArr: Array<RouteRecordRaw>
): Array<RouteRecordRaw> {
  let arr: Array<RouteRecordRaw> = [];
  routerArr.forEach((item) => {
    if (!item.children) {
      arr.push(item);
    } else {
      arr = arr.concat(deepRoute(item.children));
    }
  });
  return arr;
}
export function addRoules(
  rulesRoutes: Array<RouteRecordRaw>
): Array<RouteRecordRaw> {
  rulesRoutes?.forEach((item) => {
    if (!(item.path === "/Users")) {
      addRoules(item.children!);
    } else {
      item.meta!.rules = ["add", "edit"];
    }
  });
  return rulesRoutes!;
}

export function addAdminRoules(
  rulesRoutes: Array<RouteRecordRaw>
): Array<RouteRecordRaw> {
  rulesRoutes?.forEach((item) => {
    if (!(item.path === "/Users" || item.path === "/System")) {
      addRoules(item.children!);
    } else {
      item.meta!.rules = ["add", "edit", "delete"];
    }
  });
  return rulesRoutes!;
}

export function btnPermission(router: RouteLocationNormalized): Array<number> {
  let btnPermissionNum: Array<number> = [];
  if (router.meta!.rules!.length > 0) {
    router.meta!.rules!.forEach((item) => {
      switch (item) {
        case "add":
          btnPermissionNum.push(1);
          break;
        case "edit":
          btnPermissionNum.push(2);
          break;
        case "delete":
          btnPermissionNum.push(3);
          break;
        default:
          return (btnPermissionNum = [0]);
      }
    });
    return btnPermissionNum;
  } else {
    return (btnPermissionNum = [0]);
  }
}
