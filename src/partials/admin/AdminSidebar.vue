<template>
  <div>
    <slot :menus="menus"></slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  ShoppingCart,
  Users,
} from "lucide-vue-next";

const menus = reactive([
  {
    icon: Home,
    title: "Dashboard",
    link: "/admin",
  },
  {
    icon: Users,
    title: "Master",
    showChilds: ref(false),
    childs: [
      {
        title: "Master Users",
        link: "/admin/master/users",
        icon: CircleUser,
      },
      {
        title: "Master Departments",
        link: "/admin/master/departments",
        icon: CircleUser,
      },
      {
        title: "Master Positions",
        link: "/admin/master/positions",
        icon: Menu,
      },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Orders",
    link: "/admin/orders",
  },
  {
    icon: LineChart,
    title: "Reports",
    link: "/admin/reports",
  },
]);
</script>
