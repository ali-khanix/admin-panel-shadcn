"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full ">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg"
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto pr-3">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm01">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti sapiente saepe modi dicta accusamus non tenetur? Iste
                ea tempora ex!
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
