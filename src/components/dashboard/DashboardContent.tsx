
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, FileText, Zap, TrendingUp, Plus, Sparkles, BookOpen, Users, Settings, Target } from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <Plus className="h-8 w-8 text-muted-foreground mb-2" />
            <h3 className="font-semibold">New PRD</h3>
            <p className="text-sm text-muted-foreground">Create product requirements</p>
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <FileText className="h-8 w-8 text-muted-foreground mb-2" />
            <h3 className="font-semibold">Tech Spec</h3>
            <p className="text-sm text-muted-foreground">Generate technical docs</p>
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <Sparkles className="h-8 w-8 text-muted-foreground mb-2" />
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-sm text-muted-foreground">Get smart suggestions</p>
          </CardContent>
        </Card>
        
        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <BookOpen className="h-8 w-8 text-muted-foreground mb-2" />
            <h3 className="font-semibold">Templates</h3>
            <p className="text-sm text-muted-foreground">Browse templates</p>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Created</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23.5h</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Suggestions</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+24 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+12% improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Documents */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>Your latest AI-generated documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "E-commerce Platform PRD", type: "PRD", status: "Complete", progress: 100, aiGenerated: true },
                { name: "Mobile App Technical Spec", type: "Tech Spec", status: "In Progress", progress: 75, aiGenerated: true },
                { name: "User Authentication Flow", type: "User Flow", status: "In Progress", progress: 60, aiGenerated: false },
                { name: "API Documentation", type: "API Docs", status: "Draft", progress: 30, aiGenerated: true },
              ].map((doc, index) => (
                <div key={index} className="flex items-center justify-between space-x-4 p-4 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium leading-none">{doc.name}</p>
                      {doc.aiGenerated && (
                        <Badge variant="secondary" className="text-xs">
                          <Sparkles className="h-3 w-3 mr-1" />
                          AI
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                      <Progress value={doc.progress} className="h-1 flex-1" />
                      <span className="text-xs text-muted-foreground">{doc.progress}%</span>
                    </div>
                  </div>
                  <Badge variant={doc.status === "Complete" ? "default" : "secondary"}>
                    {doc.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Documents
            </Button>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              AI Recommendations
            </CardTitle>
            <CardDescription>Smart suggestions for your projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Complete API Documentation</p>
                <p className="text-xs text-muted-foreground">Based on your recent code changes</p>
                <Button size="sm" variant="outline" className="mt-2">
                  Generate
                </Button>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Update User Stories</p>
                <p className="text-xs text-muted-foreground">New features detected in codebase</p>
                <Button size="sm" variant="outline" className="mt-2">
                  Review
                </Button>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Create Testing Plan</p>
                <p className="text-xs text-muted-foreground">For your mobile app project</p>
                <Button size="sm" variant="outline" className="mt-2">
                  Create
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Popular Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Templates</CardTitle>
            <CardDescription>Most used documentation templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "SaaS PRD Template", uses: 234 },
                { name: "API Documentation", uses: 189 },
                { name: "User Story Template", uses: 156 },
                { name: "Technical Spec", uses: 143 },
              ].map((template, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm font-medium">{template.name}</p>
                    <p className="text-xs text-muted-foreground">{template.uses} uses</p>
                  </div>
                  <Button size="sm" variant="ghost">Use</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>Recent team collaboration and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "Sarah Chen", action: "generated PRD for", project: "Mobile Checkout Flow", time: "2 hours ago", avatar: "SC" },
                { user: "Mike Rodriguez", action: "updated tech spec for", project: "Payment Gateway", time: "4 hours ago", avatar: "MR" },
                { user: "Emily Watson", action: "completed user stories for", project: "Admin Dashboard", time: "6 hours ago", avatar: "EW" },
                { user: "David Kim", action: "reviewed documentation for", project: "API Integration", time: "1 day ago", avatar: "DK" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                    {activity.avatar}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                      <span className="font-medium">{activity.project}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
