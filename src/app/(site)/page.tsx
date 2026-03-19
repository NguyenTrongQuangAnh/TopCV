import { BestJobsShowcase } from '@/components/site/BestJobsShowcase'
import { CareerGrowthShowcase } from '@/components/site/CareerGrowthShowcase'
import { FeaturedBrandsShowcase } from '@/components/site/FeaturedBrandsShowcase'
import { SearchHero } from '@/components/site/SearchHero'
import { getArticles } from '@/lib/content-api'
import { getCareerDirectories, getJobs } from '@/lib/jobs-api'
import { mockArticles, mockProCompanies } from '@/lib/mock-data'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [featuredArticles, latestArticles, careerDirectories, jobs] = await Promise.all([
    getArticles({ featuredOnly: true, limit: 4 }),
    getArticles({ limit: 12 }),
    getCareerDirectories(),
    getJobs({ limit: 36 }),
  ])

  const heroArticle = featuredArticles[0] ?? latestArticles[0] ?? mockArticles[0]

  return (
    <main>
      <SearchHero categories={careerDirectories} featuredArticle={heroArticle} />
      <BestJobsShowcase jobs={jobs} />
      <FeaturedBrandsShowcase companies={mockProCompanies} />
      <CareerGrowthShowcase jobCategories={careerDirectories} />
    </main>
  )
}
