"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectUser } from "@/lib/drizzle/schema";

export const columnHelper = createColumnHelper<SelectUser>();

export const columns = [
    columnHelper.display({
        id: "select",
        header: (info) => (
            <Checkbox
                checked={
                    info.table.getIsAllPageRowsSelected()
                        ? true
                        : info.table.getIsSomePageRowsSelected()
                        ? "indeterminate"
                        : false
                }
                onCheckedChange={(value) =>
                    info.table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: (info) => (
            <Checkbox
                checked={info.row.getIsSelected()}
                onCheckedChange={(value) => info.row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    }),
    columnHelper.accessor("name", {
        header: (info) => (
            <DataTableColumnHeader column={info.column} title="نام" />
        ),
        cell: (info) => (
            <div className="flex items-center gap-4">
                <Avatar className="h-8 w-8">
                    <AvatarImage
                        src={info.row.original.image ?? undefined}
                        alt={info.row.original.name}
                    />
                    <AvatarFallback>
                        {info.row.original.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span>{info.row.original.name}</span>
            </div>
        ),
    }),
    columnHelper.accessor("email", {
        header: (info) => (
            <DataTableColumnHeader column={info.column} title="ایمیل" />
        ),
    }),
    columnHelper.accessor("role", {
        header: (info) => (
            <DataTableColumnHeader column={info.column} title="نقش" />
        ),
        cell: (info) => {
            const role = info.getValue();
            return (
                <Badge variant={role === "admin" ? "destructive" : "secondary"}>
                    {role === "admin" ? "ادمین" : "کاربر"}
                </Badge>
            );
        },
    }),
    columnHelper.accessor("banned", {
        header: (info) => (
            <DataTableColumnHeader column={info.column} title="وضعیت" />
        ),
        cell: (info) => {
            const banned = info.getValue();
            return (
                <Badge variant={banned ? "destructive" : "secondary"}>
                    {banned ? "مسدود" : "فعال"}
                </Badge>
            );
        },
    }),
    columnHelper.accessor("createdAt", {
        header: (info) => (
            <DataTableColumnHeader column={info.column} title="تاریخ عضویت" />
        ),
        cell: (info) => {
            return new Date(info.getValue()).toLocaleDateString("fa-IR");
        },
    }),
    columnHelper.display({
        id: "actions",
        cell: (info) => <DataTableRowActions row={info.row} />,
    }),
];
