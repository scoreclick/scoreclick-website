
import NavBar from '@/components/NavBar'
import SearchClub from '@/components/SearchClub'
import GetScoreClick from '@/components/GetScoreClick'
import FeaturesSection from '@/components/FeaturesSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <GetScoreClick />
      <NavBar />
      <main className="w-full p-0 m-0">
        <SearchClub />
        <FeaturesSection />
        <ContactSection />
      </main>
    </div>
  );
}
