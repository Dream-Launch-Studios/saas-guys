import { Card } from "@/components/ui/card";
import { Instagram, Search, Heart, MessageSquare, BookmarkPlus } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";

interface PlatformDemoProps {
  activeTab: string;
}

const PlatformDemo = ({ activeTab }: PlatformDemoProps) => {
  return (
    <div className="relative">
      <Card className="overflow-hidden border rounded-lg shadow-lg relative">
        {/* Dark overlay with platform UI */}
        <div className="bg-aura-dark rounded-t-lg p-3 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center">
            <div className="px-3 py-1 rounded-md bg-gray-700 text-white text-xs">
              {activeTab === "instagram" ? "Instagram Content Discovery" : "TikTok Content Discovery"}
            </div>
          </div>
          <div className="w-16" />
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 aspect-video sm:aspect-[16/9] md:aspect-[16/8] w-full flex items-center justify-center p-5">
          {/* App Interface Mockup */}
          <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
            {/* App Header */}
            <div className="bg-gray-50 p-3 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-aura-primary to-aura-accent flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-medium">Aura Dashboard</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-white rounded-md border px-3 py-1">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-xs text-gray-400">Search profiles or keywords...</span>
                </div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-48 bg-gray-50 p-3 border-r hidden sm:block">
                <div className="space-y-1">
                  <div className="bg-aura-primary/10 text-aura-primary rounded-md px-3 py-2 text-sm font-medium">
                    Dashboard
                  </div>
                  <div className="text-gray-600 rounded-md px-3 py-2 text-sm">
                    Discover
                  </div>
                  <div className="text-gray-600 rounded-md px-3 py-2 text-sm">
                    My Boards
                  </div>
                  <div className="text-gray-600 rounded-md px-3 py-2 text-sm">
                    Analytics
                  </div>
                  <div className="text-gray-600 rounded-md px-3 py-2 text-sm">
                    Settings
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden border">
                      {/* Post Content Placeholder */}
                      <div className={`aspect-square bg-gradient-to-br ${
                        index % 2 === 0 
                          ? 'from-gray-200 to-gray-100' 
                          : 'from-gray-100 to-gray-200'
                      }`}></div>
                      
                      {/* Post Info */}
                      <div className="p-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-600">{Math.floor(Math.random() * 1000) + 100}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-600">{Math.floor(Math.random() * 100) + 5}</span>
                          </div>
                          <BookmarkPlus className="h-4 w-4 text-aura-primary" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Popup Modal Demo */}
                <div className="absolute top-1/3 right-1/4 w-64 bg-white rounded-lg shadow-lg border p-3 z-10">
                  <div className="text-sm font-medium mb-2">Save to Board</div>
                  <div className="space-y-2 mb-3">
                    {['Campaign Ideas', 'Design Inspiration', 'Competitor Analysis'].map((board) => (
                      <div key={board} className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-aura-primary/20 border border-aura-primary/30 rounded-sm"></div>
                        <span className="text-xs">{board}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-aura-primary text-white text-xs py-1 rounded">
                    Create New Board
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Platform Indicator */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border">
        {activeTab === "instagram" ? (
          <Instagram className="h-7 w-7 text-pink-600" />
        ) : (
          <TikTokIcon className="h-7 w-7 text-black" />
        )}
      </div>
    </div>
  );
};

export default PlatformDemo;
