// Portfolio data: auto-imports all JSON files in the portfolio/ directory
const portfolioModules = import.meta.glob('./portfolio/*.json', { eager: true })
const portfolio = Object.values(portfolioModules)
  .map((m) => m.default)
  .sort((a, b) => b.year - a.year)

// Services data
const servicesModules = import.meta.glob('./services/*.json', { eager: true })
const services = Object.values(servicesModules).map((m) => m.default)

// Company & site settings
import company from './company.json'
import site from './site.json'

export { portfolio, services, company, site }
