import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Database, 
  Zap, 
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const metrics = [
  {
    title: "Active Recommendations",
    value: "1.2M",
    change: "+12.5%",
    trend: "up",
    icon: Activity,
    color: "primary"
  },
  {
    title: "Graph Nodes",
    value: "45.8K",
    change: "+8.2%",
    trend: "up",
    icon: Database,
    color: "accent"
  },
  {
    title: "Active Users",
    value: "892",
    change: "+23.1%",
    trend: "up",
    icon: Users,
    color: "primary"
  },
  {
    title: "Avg Response Time",
    value: "147ms",
    change: "-5.3%",
    trend: "down",
    icon: Clock,
    color: "accent"
  }
];

const systemStatus = [
  { service: "FastAPI Gateway", status: "operational", uptime: "99.98%" },
  { service: "Neo4j Database", status: "operational", uptime: "99.94%" },
  { service: "Weaviate Vector DB", status: "operational", uptime: "99.92%" },
  { service: "GPT-4 Pipeline", status: "operational", uptime: "99.87%" },
  { service: "Redis Cache", status: "operational", uptime: "99.99%" },
  { service: "Kafka Streaming", status: "degraded", uptime: "98.23%" }
];

const recentActivity = [
  { time: "2 min ago", event: "Model retraining completed", type: "success" },
  { time: "5 min ago", event: "Graph update: 1,247 new entities", type: "info" },
  { time: "12 min ago", event: "Performance optimization deployed", type: "success" },
  { time: "18 min ago", event: "Kafka consumer lag detected", type: "warning" },
  { time: "25 min ago", event: "Daily backup completed", type: "success" }
];

const MetricsDashboard = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Performance</span> Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring and analytics for the GraphRAG recommendation engine
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const isAccent = metric.color === "accent";
            const isPositiveTrend = metric.trend === "up";
            
            return (
              <Card key={index} className="card-enterprise animate-fade-in" 
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <div className={`p-2 rounded-md ${isAccent ? 'bg-accent/10' : 'bg-primary/10'}`}>
                    <IconComponent className={`h-4 w-4 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="flex items-center text-xs">
                    <TrendingUp className={`h-3 w-3 mr-1 ${
                      isPositiveTrend ? 'text-green-500' : 'text-red-500'
                    } ${!isPositiveTrend && 'transform rotate-180'}`} />
                    <span className={isPositiveTrend ? 'text-green-500' : 'text-red-500'}>
                      {metric.change}
                    </span>
                    <span className="text-muted-foreground ml-1">from last week</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Status */}
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                System Status
              </CardTitle>
              <CardDescription>
                Current operational status of all services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.status === 'operational' 
                          ? 'bg-green-500' 
                          : service.status === 'degraded' 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                      }`} />
                      <span className="font-medium text-sm">{service.service}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={service.status === 'operational' ? 'default' : 'secondary'} 
                             className="text-xs">
                        {service.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{service.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 text-primary mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest system events and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' 
                        ? 'bg-green-500' 
                        : activity.type === 'warning' 
                          ? 'bg-yellow-500' 
                          : 'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.event}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.type === 'warning' && (
                      <AlertCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart Placeholder */}
        <Card className="card-enterprise mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 text-accent mr-2" />
              Performance Trends
            </CardTitle>
            <CardDescription>
              Recommendation accuracy and response time over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Performance chart visualization</p>
                <p className="text-sm text-muted-foreground/70">Interactive charts would be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MetricsDashboard;