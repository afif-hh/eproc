<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button>A</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem> AA </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import Button from "@/components/ui/button/Button.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
</script>
