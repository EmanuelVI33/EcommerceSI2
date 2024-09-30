import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ColumnConfig } from "@/src/types/props";
import { Button, buttonVariants } from "./button";
import Link from "next/link";

interface GenericTableProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  caption?: string;
  options: Options
}

interface Options {
  route: string // Absolute
  deleteAction?: boolean
  editAction?: boolean
}

export function CustomTable<T>({ data, columns, caption, options: {route, deleteAction = true, editAction = true } }: GenericTableProps<T>) {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key as string}>{col.label}</TableHead>
          ))}
          {deleteAction || editAction ? <TableHead className="text-center">Acciones</TableHead> : <></>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((col) => (
              <TableCell key={col.key as string}>
                {col.render ? col.render(item[col.key], item) : String(item[col.key])}
              </TableCell>
            ))}
            {
              <TableCell className="flex justify-evenly gap-2">
                {editAction && <Link href={`${route}/${item['id']}/edit`} className={buttonVariants({variant: "default"})}>Editar</Link>}
                {deleteAction && <Button>Eliminar</Button>}
              </TableCell>
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
