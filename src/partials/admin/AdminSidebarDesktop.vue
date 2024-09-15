<template>
  <AdminSidebar v-slot="{ menus }">
    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
      <a
        v-for="menu in menus"
        :key="menu.title"
        :href="menu.link"
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <template v-if="!menu.childs">
          <component :is="menu.icon" class="h-4 w-4"></component>
          {{ menu.title }}
        </template>
        <Collapsible v-else v-model:open="menu.showChilds" class="w-full">
          <CollapsibleTrigger class="flex items-center gap-3 w-full">
            <component :is="menu.icon" class="h-4 w-4"></component>
            {{ menu.title }}
            <ChevronDown
              class="ml-auto transition"
              :class="menu.showChilds ? 'rotate-180' : null"
            />
          </CollapsibleTrigger>
          <CollapsibleContent class="my-4">
            <a
              v-for="child in menu.childs"
              :key="child.title"
              :href="child.link"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <component :is="child.icon" class="h-4 w-4"></component>
              {{ child.title }}
            </a>
          </CollapsibleContent>
        </Collapsible>
      </a>
    </nav>
  </AdminSidebar>
</template>

<script lang="ts" setup>
import { ChevronDown } from "lucide-vue-next";
import AdminSidebar from "./AdminSidebar.vue";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
</script>
