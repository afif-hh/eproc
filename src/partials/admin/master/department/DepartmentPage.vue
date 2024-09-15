<template>
  <div>
    <CommonTable :data="data" :columns="columns"></CommonTable>
  </div>
</template>

<script lang="ts" setup>
import CommonTable from "@/components/common/table/CommonTable.vue";
import type { SelectDepartment } from "@/db/types";
import { type ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import Button from "@/components/ui/button/Button.vue";
import { ArrowUpDown } from "lucide-vue-next";

const data: SelectDepartment[] = [
  {
    id: 1,
    name: "Department 1",
    active: true,
    createdDate: new Date(),
    createdBy: "Admin",
    updatedDate: new Date(),
    updatedBy: "Admin",
  },
  {
    id: 2,
    name: "Department 2",
    active: false,
    createdDate: new Date(),
    createdBy: "Admin",
    updatedDate: new Date(),
    updatedBy: "Admin",
  },
];

const columns: ColumnDef<SelectDepartment>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => row.getValue("id"),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Email", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })],
      );
    },
    cell: ({ row }) => row.getValue("name"),
    filterFn: "includesString",
    enableColumnFilter: false,
  },
  {
    accessorKey: "active",
    header: "Active",
    cell: ({ row }) => String(row.getValue("active")),
    enableColumnFilter: false,
  },
  // {
  //   accessorKey: "createdDate",
  //   header: "Created Date",
  //   cell: ({ row }) => new Date(row.getValue("createdDate")).toString(),
  //   enableColumnFilter: false,
  // },
];
</script>
