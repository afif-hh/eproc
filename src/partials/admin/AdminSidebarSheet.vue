<template>
  <AdminSidebar v-slot="{ menus }">
    <nav class="grid gap-2 text-lg font-medium">
      <a href="#" class="flex items-center gap-2 text-lg font-semibold">
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a
        v-for="menu in menus"
        :key="menu.title"
        :href="menu.link"
        class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <component :is="menu.icon" class="h-5 w-5"></component>
        {{ menu.title }}
      </a>
    </nav>
  </AdminSidebar>
</template>

<script lang="ts" setup>
import AdminSidebar from "./AdminSidebar.vue";
import { Package2 } from "lucide-vue-next";
</script>
