"use client"
import {
  BarChart3,
  BookOpen,
  Clock,
  FileText,
  Plus,
  Sparkles,
  Settings,
  HelpCircle,
  User,
  LogOut,
  ChevronDown,
  Calendar,
  Download,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Simplified mock data
const userStats = {
  timeSaved: 17,
  projectsCreated: 8,
  documentsGenerated: 24,
}

const recentProjects = [
  {
    id: 1,
    name: "Online Store Project",
    description: "Build an e-commerce website with AI help",
    status: "Ready",
    createdAt: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Health App",
    description: "Patient management system",
    status: "In Progress",
    createdAt: "Jan 12, 2024",
  },
  {
    id: 3,
    name: "Blog Platform",
    description: "Content creation website",
    status: "Draft",
    createdAt: "Jan 10, 2024",
  },
]

const templates = [
  {
    name: "Website Builder",
    description: "Create a professional website",
    icon: "🌐",
  },
  {
    name: "Mobile App",
    description: "Build a mobile application",
    icon: "📱",
  },
  {
    name: "Online Store",
    description: "E-commerce platform",
    icon: "🛒",
  },
]

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    isActive: true,
  },
  {
    title: "My Projects",
    url: "/projects",
    icon: FileText,
  },
  {
    title: "Templates",
    url: "/templates",
    icon: BookOpen,
  },
  {
    title: "AI Helper",
    url: "/assistant",
    icon: Sparkles,
  },
]

function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r border-blue-100">
      <SidebarHeader className="border-b border-blue-50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Sparkles className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-gray-900">vibedocs</span>
                  <span className="truncate text-xs text-gray-500">AI Documentation</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-gray-50/30">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="data-[active=true]:bg-blue-100 data-[active=true]:text-blue-700 hover:bg-blue-50"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="hover:bg-blue-50">
                  <a href="/help" className="flex items-center gap-3">
                    <HelpCircle className="size-4" />
                    <span>Help</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="hover:bg-blue-50">
                  <a href="/settings" className="flex items-center gap-3">
                    <Settings className="size-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-blue-50">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-blue-50 hover:bg-blue-50">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="rounded-lg bg-blue-100 text-blue-700">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">John Doe</span>
                    <span className="truncate text-xs text-gray-500">john@example.com</span>
                  </div>
                  <ChevronDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback className="rounded-lg bg-blue-100 text-blue-700">JD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">John Doe</span>
                      <span className="truncate text-xs text-gray-500">john@example.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User />
                  My Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export function MockDashboard() {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2 px-6">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-px bg-gray-200" />
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="ml-auto px-6">
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                New Project
              </Button>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-8 p-6 bg-gray-50/30">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
              <p className="text-gray-600 mb-4">Ready to create amazing projects with AI assistance?</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start New Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Time Saved</CardTitle>
                  <Clock className="h-5 w-5 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{userStats.timeSaved} hours</div>
                  <p className="text-sm text-gray-500 mt-1">This month</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Projects</CardTitle>
                  <FileText className="h-5 w-5 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{userStats.projectsCreated}</div>
                  <p className="text-sm text-gray-500 mt-1">Created</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Documents</CardTitle>
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{userStats.documentsGenerated}</div>
                  <p className="text-sm text-gray-500 mt-1">Generated</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Recent Projects */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Recent Projects</CardTitle>
                  <CardDescription className="text-gray-500">Your latest work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-blue-200 transition-colors cursor-pointer"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-medium text-gray-900">{project.name}</h3>
                            <Badge
                              variant={project.status === "Ready" ? "default" : "secondary"}
                              className={
                                project.status === "Ready"
                                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                                  : project.status === "In Progress"
                                    ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">{project.description}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar className="h-3 w-3" />
                            {project.createdAt}
                          </div>
                        </div>
                        {project.status === "Ready" && (
                          <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      View All Projects
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Templates */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Start with a Template</CardTitle>
                  <CardDescription className="text-gray-500">Choose a template to get started quickly</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {templates.map((template, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-lg hover:border-blue-200 transition-colors cursor-pointer"
                      >
                        <div className="text-2xl">{template.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{template.name}</h4>
                          <p className="text-sm text-gray-500">{template.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      Browse All Templates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
