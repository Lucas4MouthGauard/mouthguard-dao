export interface ResearchFormData {
  role: string
  email: string
  organization: string
  dataTypes: string[]
  agreeToTerms: boolean
}

export interface ContactFormData {
  role: string
  email: string
  organization: string
  contactTypes: string[]
  message: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface ResearchRole {
  label: string
  value: string
}

export interface DataType {
  label: string
  value: string
}

export interface ContactType {
  label: string
  value: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  navigation: NavigationItem[]
  features: Feature[]
  researchRoles: ResearchRole[]
  dataTypes: DataType[]
  contactTypes: ContactType[]
} 