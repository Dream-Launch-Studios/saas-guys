
import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot, Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from "lucide-react";

import { NavMain } from "@/components/dashboard/NavMain";
import { NavProjects } from "@/components/dashboard/NavProjects";
import { NavUser } from "@/components/dashboard/NavUser";
import { TeamSwitcher } from "@/components/dashboard/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@vibedocs.ai",
    avatar: "/avatars/john-doe.jpg",
  },
  teams: [
    {
      name: "Vibedocs",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Personal",
      logo: AudioWaveform,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Documentation",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "PRD Generator",
          url: "#",
        },
        {
          title: "Tech Specs",
          url: "#",
        },
        {
          title: "User Flows",
          url: "#",
        },
      ],
    },
    {
      title: "AI Tools",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Codie Assistant",
          url: "#",
        },
        {
          title: "Code Generator",
          url: "#",
        },
        {
          title: "Prompt Library",
          url: "#",
        },
      ],
    },
    {
      title: "Templates",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Starter Kits",
          url: "#",
        },
        {
          title: "Project Templates",
          url: "#",
        },
        {
          title: "Documentation Templates",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Usage Stats",
          url: "#",
        },
        {
          title: "Token Savings",
          url: "#",
        },
        {
          title: "Time Saved",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      url: "#",
      icon: Frame,
    },
    {
      name: "Mobile App MVP",
      url: "#",
      icon: PieChart,
    },
    {
      name: "SaaS Dashboard",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
