import HeroSection from "../common/HeroSection"
import Navigation from "../common/Navigation"
import ArchitectureOverview from "../common/ArchitectureOverview"
import MetricsDashboard from "../common/MetricsDashboard"

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <div id="architecture">
                    <ArchitectureOverview />
                </div>
                <div id="metrics">
                    <MetricsDashboard />
                </div>
            </main>
        </div>
    )
}

export default LandingPage
