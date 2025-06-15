
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  FileText,
  Users, Brain,
  Plus,
  MoreHorizontal,
  User
} from "lucide-react";

export function CustomDashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg border shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b bg-gray-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">V</span>
            </div>
            <span className="font-semibold text-gray-900">Vibedocs AI</span>
          </div>
          <div className="text-gray-600">Documents</div>
        </div>
        <div className="text-sm text-gray-600">GitHub</div>
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r p-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4">
            <Plus className="w-4 h-4 mr-2" />
            Quick Create
          </Button>
          
          <nav className="space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
              <FileText className="w-4 h-4" />
              Dashboard
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Brain className="w-4 h-4" />
              AI Tools
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <FileText className="w-4 h-4" />
              Analytics
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Users className="w-4 h-4" />
              Projects
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Users className="w-4 h-4" />
              Team
            </div>
          </nav>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Documents</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                <FileText className="w-4 h-4" />
                Data Library
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                <FileText className="w-4 h-4" />
                Reports
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                <Brain className="w-4 h-4" />
                AI Assistant
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">Total PRDs</CardTitle>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">$1,250.00</div>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12.5%
                </p>
                <p className="text-xs text-gray-500 mt-1">Trending up this month</p>
                <p className="text-xs text-gray-400">Projects for the last 6 months</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">New AI Tools</CardTitle>
                  <TrendingDown className="w-4 h-4 text-red-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">1,234</div>
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  -20%
                </p>
                <p className="text-xs text-gray-500 mt-1">Down 20% this period</p>
                <p className="text-xs text-gray-400">Integration needs attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Documents</CardTitle>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">45,678</div>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12.5%
                </p>
                <p className="text-xs text-gray-500 mt-1">Strong user retention</p>
                <p className="text-xs text-gray-400">Documentation exceed targets</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">Time Saved</CardTitle>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">4.5h</div>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +4.5%
                </p>
                <p className="text-xs text-gray-500 mt-1">Steady performance increase</p>
                <p className="text-xs text-gray-400">Meets growth projections</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">Total Documents Generated</CardTitle>
                  <p className="text-sm text-gray-500">Total for the last 3 months</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Last 3 months</Button>
                  <Button variant="outline" size="sm">Last 30 days</Button>
                  <Button variant="outline" size="sm">Last 7 days</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">AI Documentation Analytics</p>
                  <p className="text-sm text-gray-400">Chart visualization would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    PRD Templates <Badge variant="secondary" className="ml-2">3</Badge>
                  </Button>
                  <Button variant="outline" size="sm">
                    Tech Specs <Badge variant="secondary" className="ml-2">2</Badge>
                  </Button>
                  <Button variant="outline" size="sm">AI Documents</Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Customize Columns
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Section
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                  <div>Header</div>
                  <div>Section Type</div>
                  <div>Status</div>
                  <div>Target</div>
                  <div>Limit</div>
                  <div>Reviewer</div>
                </div>
                
                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-b">
                  <div className="font-medium">Project Overview</div>
                  <div>PRD template</div>
                  <div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">In Process</Badge>
                  </div>
                  <div>18</div>
                  <div>5</div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Sarah Chen
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-b">
                  <div className="font-medium">AI Integration Guide</div>
                  <div>Tech documentation</div>
                  <div>
                    <Badge variant="default" className="bg-green-100 text-green-700">Done</Badge>
                  </div>
                  <div>29</div>
                  <div>24</div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Mike Rodriguez
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-b">
                  <div className="font-medium">User Flow Summary</div>
                  <div>User Experience</div>
                  <div>
                    <Badge variant="default" className="bg-green-100 text-green-700">Done</Badge>
                  </div>
                  <div>10</div>
                  <div>13</div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Emily Watson
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-4 text-sm py-3">
                  <div className="font-medium">API Documentation</div>
                  <div>Technical specs</div>
                  <div>
                    <Badge variant="default" className="bg-green-100 text-green-700">Done</Badge>
                  </div>
                  <div>27</div>
                  <div>23</div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    David Kim
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
