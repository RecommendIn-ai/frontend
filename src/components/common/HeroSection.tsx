import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, Network } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 hero-gradient opacity-20" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">    
                <div className="animate-fade-in">
                

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-28">
                        <span className="glow-text">GraphRAG</span>
                        <br />
                        <span className="text-foreground/90">Recommendation Engine</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade Graph Retrieval-Augmented Generation system combining
                        knowledge graphs with AI reasoning for intelligent recommendations
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        >
                            Explore Architecture
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary/30 hover:border-primary/60 hover:shadow-accent transition-all duration-300"
                        >
                            View Documentation
                        </Button>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="animate-fade-in-delay-1">
                            <div className="flex items-center justify-center mb-4">
                                <Database className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Graph Database</h3>
                            <p className="text-muted-foreground text-sm">
                                Neo4j-powered knowledge graphs with real-time updates
                            </p>
                        </div>

                        <div className="animate-fade-in-delay-2">
                            <div className="flex items-center justify-center mb-4">
                                <Brain className="h-12 w-12 text-accent" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">AI Reasoning</h3>
                            <p className="text-muted-foreground text-sm">
                                GPT-4 powered intelligent recommendations with RAG pipeline
                            </p>
                        </div>

                        <div className="animate-fade-in-delay-3">
                            <div className="flex items-center justify-center mb-4">
                                <Network className="h-12 w-12 text-primary-glow" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Vector Search</h3>
                            <p className="text-muted-foreground text-sm">
                                Weaviate-based semantic search with hybrid filtering
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-primary opacity-50" />
        </section>
    );
};

export default HeroSection;