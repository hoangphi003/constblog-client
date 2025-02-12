import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Logup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Log up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Log up</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 rounded"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Password" className="text-right">
              Password
            </Label>
            <Input
              id="username"
              defaultValue={"@peduarte"}
              className="col-span-3 rounded"
              type="password"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="New" className="text-right">
              Username
            </Label>
            <Input
              id="New"
              defaultValue={"@peduarte"}
              className="col-span-3 rounded"
              type="password"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-white">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Logup;
