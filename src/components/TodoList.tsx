import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
  return (
    <div>
      Calendar
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <Card>
          <div className="flex items-center gap-4 px-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sapiente saepe modi dicta accusamus non tenetur? Iste ea tempora
              ex!
            </label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
