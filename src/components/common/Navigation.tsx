import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import graphragLogo from "@/assets/graphrag-logo.png";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Architecture", href: "#architecture" },
        { name: "Metrics", href: "#metrics" },
        { name: "Documentation", href: "#docs" },
        { name: "API", href: "#api" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={graphragLogo}
                            alt="GraphRAG"
                            className="h-8 w-8 mr-3"
                        />
                        <span className="text-xl font-bold glow-text">RecommendIn</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        >
                            Get Started
                            <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg mt-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="border-t border-border/50 pt-3 mt-3">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start text-muted-foreground hover:text-foreground mb-2"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    GitHub
                                </Button>
                                <Button
                                    size="sm"
                                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                                >
                                    Get Started
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;