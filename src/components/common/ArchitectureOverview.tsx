import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Server,    
    Database,
    Brain,
    Network,
    Search,
    GitBranch,
    Zap,
    Settings,
    BarChart3,
    ArrowDown
} from "lucide-react";

const architectureLayers = [
    {
        id: 1,
        title: "Client Integration Layer",
        description: "Secure API endpoints and data acceptance",
        icon: Server,
        primaryTech: "FastAPI",
        alternatives: ["gRPC"],
        color: "primary",
        processes: ["Expose secure APIs", "Accept user/content data", "Return recommendations"]
    },
    {
        id: 2,
        title: "Data Ingestion & Preprocessing",
        description: "Batch and streaming data processing",
        icon: Database,
        primaryTech: "Apache Airflow",
        alternatives: ["Kafka", "Pandas", "ffmpeg"],
        color: "accent",
        processes: ["Ingest data (batch + streaming)", "Clean & normalize", "Extract metadata"]
    },
    {
        id: 3,
        title: "Entity & Relation Extraction",
        description: "NER and relation extraction pipeline",
        icon: Brain,
        primaryTech: "spaCy",
        alternatives: ["HuggingFace Transformers", "OpenAI GPT-4", "BERTopic"],
        color: "primary",
        processes: ["Named Entity Recognition", "Relation Extraction", "Triplet construction"]
    },
    {
        id: 4,
        title: "Graph Construction & Management",
        description: "Knowledge graph creation and updates",
        icon: Network,
        primaryTech: "Neo4j",
        alternatives: ["LlamaIndex", "Memgraph"],
        color: "accent",
        processes: ["Create graph nodes/edges", "Manage updates & schema", "Link entities"]
    },
    {
        id: 5,
        title: "Embedding & Vector Indexing",
        description: "Vector embeddings and semantic search",
        icon: Search,
        primaryTech: "Weaviate",
        alternatives: ["Qdrant", "Pinecone", "FAISS", "OpenAI Embeddings"],
        color: "primary",
        processes: ["Generate vector embeddings", "Store vectors", "Hybrid search"]
    },
    {
        id: 6,
        title: "Retriever & Graph Traversal",
        description: "Intelligent data retrieval and graph navigation",
        icon: GitBranch,
        primaryTech: "Custom Algorithms",
        alternatives: ["Graph Neural Networks", "PageRank variants"],
        color: "accent",
        processes: ["Graph traversal", "Subgraph extraction", "Context retrieval"]
    },
    {
        id: 7,
        title: "LLM Reasoning & RAG Pipeline",
        description: "AI-powered recommendation generation",
        icon: Zap,
        primaryTech: "GPT-4 (OpenAI)",
        alternatives: ["Claude", "Mistral", "LangChain", "BGE-Reranker"],
        color: "primary",
        processes: ["Construct prompts", "Generate recommendations", "Optional reranking"]
    },
    {
        id: 8,
        title: "Recommendation Orchestration",
        description: "Business logic and personalization",
        icon: Settings,
        primaryTech: "Python + Redis",
        alternatives: ["Durable Rules", "PyDatalog"],
        color: "accent",
        processes: ["Combine LLM output", "Apply business rules", "Personalize results"]
    },
    {
        id: 9,
        title: "Monitoring & Feedback Loop",
        description: "Performance tracking and continuous improvement",
        icon: BarChart3,
        primaryTech: "Langfuse",
        alternatives: ["Grafana + Prometheus", "PostgreSQL/MongoDB"],
        color: "primary",
        processes: ["Track performance", "Log interactions", "Feed updates back"]
    }
];

const ArchitectureOverview = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="glow-text">Architecture</span> Overview
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A comprehensive 9-layer architecture powering intelligent recommendations
                        through advanced graph reasoning and AI integration
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {architectureLayers.map((layer, index) => {
                        const IconComponent = layer.icon;
                        const isAccent = layer.color === "accent";

                        return (
                            <div key={layer.id} className="relative">
                                <Card className={`card-enterprise h-full transition-all duration-300 hover:scale-105 animate-fade-in`}
                                    style={{ animationDelay: `${index * 0.1}s` }}>
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-lg ${isAccent ? 'bg-accent/10' : 'bg-primary/10'}`}>
                                                <IconComponent className={`h-6 w-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                                            </div>
                                            <Badge variant="outline" className="text-xs">
                                                Layer {layer.id}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg font-semibold mb-2">
                                            {layer.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground">
                                            {layer.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="mb-4">
                                            <h4 className="text-sm font-medium mb-2 text-foreground/90">
                                                Primary Technology:
                                            </h4>
                                            <Badge className={`tech-badge ${isAccent ? 'bg-accent/10 text-accent border-accent/20' : ''}`}>
                                                {layer.primaryTech}
                                            </Badge>
                                        </div>

                                        {layer.alternatives.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-medium mb-2 text-foreground/90">
                                                    Alternatives:
                                                </h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {layer.alternatives.map((alt, i) => (
                                                        <Badge key={i} variant="outline" className="text-xs">
                                                            {alt}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-sm font-medium mb-2 text-foreground/90">
                                                Key Processes:
                                            </h4>
                                            <ul className="text-xs text-muted-foreground space-y-1">
                                                {layer.processes.map((process, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="inline-block w-1 h-1 rounded-full bg-primary/60 mt-2 mr-2 flex-shrink-0" />
                                                        {process}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Connection Line */}
                                {index < architectureLayers.length - 1 && (
                                    <div className="hidden xl:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                        <ArrowDown className="h-8 w-8 text-primary/30" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Flow Visualization */}
                <div className="mt-20 p-8 card-enterprise rounded-xl">
                    <h3 className="text-2xl font-bold text-center mb-8 glow-text">
                        Data Flow Pipeline
                    </h3>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Database className="h-8 w-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium">Data Ingestion</span>
                        </div>

                        <ArrowDown className="h-6 w-6 text-primary/60 transform md:rotate-90" />

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                                <Network className="h-8 w-8 text-accent" />
                            </div>
                            <span className="text-sm font-medium">Graph Construction</span>
                        </div>

                        <ArrowDown className="h-6 w-6 text-primary/60 transform md:rotate-90" />

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Brain className="h-8 w-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium">AI Reasoning</span>
                        </div>

                        <ArrowDown className="h-6 w-6 text-primary/60 transform md:rotate-90" />

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                                <Zap className="h-8 w-8 text-accent" />
                            </div>
                            <span className="text-sm font-medium">Recommendations</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureOverview;