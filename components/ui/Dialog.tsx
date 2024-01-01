"use client";
import { Dialog, DialogBody, DialogHeader, Typography, DialogFooter } from "@material-tailwind/react";
import { Button } from "@/components/ui";
import { ReactNode } from "react";

type DialogProps = {
   headerText: string;
   buttonText: string;
   open: boolean;
   loading: boolean;
   handler: () => void;
   onSubmit: () => void;
   children: ReactNode;
};

export const MTDialog = ({
   headerText = "",
   buttonText = "",
   open = false,
   loading = false,
   handler,
   onSubmit,
   children,
}: DialogProps) => {
   return (
      <Dialog
         open={open}
         size="md"
         placeholder="menu"
         handler={handler}
         className="bg-gradient max-h-[80vh] overflow-y-auto shadow-sp"
      >
         <DialogHeader placeholder="menu-header" className="flex-between">
            <Typography placeholder="menu-title" variant="h3" color="teal">
               {headerText}
            </Typography>
            <i className="fa fa-times text-2xl" onClick={() => handler()} />
         </DialogHeader>

         <DialogBody placeholder="menu-body">{children}</DialogBody>

         <DialogFooter placeholder="menu-footer">
            <Button disabled={loading} fullWidth onClick={onSubmit}>
               {buttonText}
            </Button>
         </DialogFooter>
      </Dialog>
   );
};
