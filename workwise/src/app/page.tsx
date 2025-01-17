// src/app/page.tsx
import Link from 'next/link'
import './home.css'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen overflow-hidden">
      {/* Floating Shapes for Visual Interest */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section with Animated Entrance */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 typing-animation">
            WorkWise RFQ Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-delay">
            Revolutionize your procurement process with intelligent vendor management and streamlined quotation workflows
          </p>
        </div>

        {/* Feature Cards with Staggered Animation */}
        <div className="grid md:grid-cols-3 gap-8 feature-cards">
          <FeatureCard 
            title="Find Vendors" 
            description="Discover top-rated vendors across multiple industries"
            icon="🔍"
            link="/find-vendor"
            delay={0}
          />
          <FeatureCard 
            title="Create RFQ" 
            description="Generate comprehensive Request for Quotations effortlessly"
            icon="📝"
            link="/create-rfq"
            delay={200}
          />
          <FeatureCard 
            title="RFQ Management" 
            description="Track, analyze, and compare vendor responses"
            icon="📊"
            link="/rfq-management"
            delay={400}
          />
        </div>

        {/* Animated Call to Action */}
        <div className="text-center mt-16 pulse-animation">
          <Link 
            href="/magic-search" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105 hover:shadow-xl"
          >
            Get Started with Magic Search
          </Link>
        </div>

        {/* Benefits Section with Fade In */}
        <div className="mt-20 bg-white shadow-xl rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Why Choose WorkWise?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitItem 
              title="Efficiency" 
              description="Reduce procurement cycle time by up to 60%"
            />
            <BenefitItem 
              title="Transparency" 
              description="Clear vendor comparison and evaluation metrics"
            />
            <BenefitItem 
              title="Cost Savings" 
              description="Optimize vendor selection and negotiation strategies"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ 
  title, 
  description, 
  icon, 
  link,
  delay 
}: { 
  title: string, 
  description: string, 
  icon: string, 
  link: string,
  delay: number 
}) {
  return (
    <Link 
      href={link} 
      style={{transitionDelay: `${delay}ms`}}
      className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all hover:shadow-xl feature-card"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

function BenefitItem({ 
  title, 
  description 
}: { 
  title: string, 
  description: string 
}) {
  return (
    <div className="text-center benefit-item">
      <h4 className="text-xl font-semibold text-blue-800 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}