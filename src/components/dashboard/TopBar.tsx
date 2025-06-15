
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search saved content..." 
            className="pl-10"
          />
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">14 days</Button>
          <Button variant="outline" size="sm">Instagram</Button>
          <Button variant="outline" size="sm">TikTok</Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
