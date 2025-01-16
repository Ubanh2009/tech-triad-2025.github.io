// src/lib/mockData.ts
export interface Vendor {
    id: number;
    name: string;
    industry: string;
    rating: number;
    specialties: string[];
  }
  
  export interface RFQ {
    id: number;
    title: string;
    status: 'Draft' | 'Open' | 'Closed' | 'Awarded';
    createdAt: Date;
    deadline: Date;
    description: string;
  }
  
  export const MOCK_VENDORS: Vendor[] = [
    {
      id: 1,
      name: "TechSolutions Inc.",
      industry: "Technology",
      rating: 4.5,
      specialties: ["Software Development", "Cloud Services"]
    },
    {
      id: 2,
      name: "GlobalSupply Co.",
      industry: "Manufacturing",
      rating: 4.2,
      specialties: ["Industrial Equipment", "Logistics"]
    },
    {
      id: 3,
      name: "InnovateNow LLC",
      industry: "Consulting",
      rating: 4.7,
      specialties: ["Digital Transformation", "Strategy"]
    }
  ]
  
  export const MOCK_RFQS: RFQ[] = [
    {
      id: 1,
      title: "Cloud Infrastructure Upgrade",
      status: "Open",
      createdAt: new Date(),
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      description: "Seeking vendors for comprehensive cloud infrastructure upgrade"
    },
    {
      id: 2,
      title: "Marketing Automation Platform",
      status: "Draft",
      createdAt: new Date(),
      deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
      description: "RFQ for advanced marketing automation solution"
    }
  ]