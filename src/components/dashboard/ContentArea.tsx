
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Clock, Bookmark } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import Image from 'next/image';

const ContentArea = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Support your gut health with Buoy",
      platform: "Instagram",
      timeAgo: "Ran for 11d",
      image: "https://picsum.photos/400/400",
      stats: {
        likes: 1200,
        comments: 45,
        shares: 23
      }
    },
    {
      id: 2,
      title: "Staying hydrated has never been easier",
      platform: "TikTok",
      timeAgo: "Active for 49d",
      image: "https://picsum.photos/401/400",
      stats: {
        likes: 3400,
        comments: 89,
        shares: 156
      }
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">All saved ads</h1>
        <div className="flex gap-2">
          <Button variant="outline">Latest saves</Button>
          <Button variant="outline">Add to board</Button>
        </div>
      </div>
      
      <div className="flex gap-4 mb-8">
        <Button variant="outline" size="sm">Latest saves</Button>
        <Button variant="outline" size="sm">Industry</Button>
        <Button variant="outline" size="sm">Brand</Button>
        <Button variant="outline" size="sm">Format</Button>
        <Button variant="outline" size="sm">Platform</Button>
        <Button variant="outline" size="sm">Status</Button>
        <Button variant="outline" size="sm">Active time</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden group">
            <div className="relative aspect-square">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {post.platform === "Instagram" ? (
                  <Instagram className="h-4 w-4" />
                ) : (
                  <TikTokIcon className="h-4 w-4" />
                )}
                <span className="text-sm text-gray-600">{post.platform}</span>
                <span className="text-gray-300">•</span>
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{post.timeAgo}</span>
              </div>
              <p className="text-sm font-medium line-clamp-2">{post.title}</p>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-xs text-gray-500">{post.stats.likes} likes</span>
                <span className="text-xs text-gray-500">{post.stats.comments} comments</span>
                <span className="text-xs text-gray-500">{post.stats.shares} shares</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
