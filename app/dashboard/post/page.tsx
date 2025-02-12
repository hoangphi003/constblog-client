"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

const Page = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <h1 className="text-3xl">Post Management</h1>
      <div className="flex mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
          <div className="">
            <Label>Title</Label>
            <Input
              type="text"
              id="Title"
              placeholder="Title"
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              id="Description"
              placeholder="Description"
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col justify-end">
            <Label className="">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal rounded-lg mt-1",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 bg-lime-50 backdrop-blur-sm"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex  mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10"></div>
      </div>
      <div className="flex mt-10 justify-center"></div>
      <div className="flex flex-col lg:flex-row justify-start lg:gap-24 items-center">
        <div className="size-56 rounded-md bg-sky-500"></div>
        <div className="flex items-center justify-center w-full max-w-lg mt-5">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex my-5">
        <Button className="bg-black text-white hover:text-black hover:border hover:border-black">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Page;
