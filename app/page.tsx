'use client'

import { useState, useMemo, useEffect } from 'react'
import { Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProfessionalCard from '@/components/professional-card'
import ProfileModal from '@/components/profile-modal'
import SearchFilters from '@/components/search-filters'
import type { Professional } from '@/types/professional'

const ITEMS_PER_PAGE = 12

export default function Home() {
  const [professionals, setProfessionals] = useState<Professional[]>([])
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedSkill, setSelectedSkill] = useState('')
  const [currentPage, setCurrentPage] = useState(1) // Added pagination state

  useEffect(() => {
    fetch('/professionals.json')
      .then(res => res.json())
      .then(data => setProfessionals(data.professionals))
  }, [])

  // Filter professionals based on search criteria
  const filteredProfessionals = useMemo(() => {
    return professionals.filter(prof => {
      const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesArea = !selectedArea || prof.area === selectedArea
      const matchesCity = !selectedCity || prof.city === selectedCity
      const matchesSkill = !selectedSkill || prof.skills.includes(selectedSkill)

      return matchesSearch && matchesArea && matchesCity && matchesSkill
    })
  }, [professionals, searchTerm, selectedArea, selectedCity, selectedSkill])

  const totalPages = Math.ceil(filteredProfessionals.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProfessionals = filteredProfessionals.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedArea, selectedCity, selectedSkill])

  const handleRecommend = (professional: Professional) => {
    alert(`You recommended ${professional.name}!`)
  }

  const handleMessage = (professional: Professional) => {
    alert(`Message sent to ${professional.name}!`)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const areas = Array.from(new Set(professionals.map(p => p.area)))
  const cities = Array.from(new Set(professionals.map(p => p.city)))
  const allSkills = Array.from(new Set(professionals.flatMap(p => p.skills)))

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <main className="min-h-screen bg-background text-foreground transition-colors">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <h1 className="text-2xl font-bold">Network Pro</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Conecte-se com Profissionais</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Descubra talentos de diferentes áreas, compartilhe experiências e colabore para construir um futuro melhor do trabalho.
              </p>
            </div>

            {/* Search and Filters */}
            <SearchFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedArea={selectedArea}
              onAreaChange={setSelectedArea}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              selectedSkill={selectedSkill}
              onSkillChange={setSelectedSkill}
              areas={areas}
              cities={cities}
              skills={allSkills}
            />
          </section>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Mostrando <span className="font-semibold text-foreground">{currentProfessionals.length}</span> de <span className="font-semibold text-foreground">{filteredProfessionals.length}</span> profissionais
            </p>
          </div>

          {/* Grid of Professional Cards */}
          {currentProfessionals.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentProfessionals.map(professional => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                    onClick={() => setSelectedProfessional(professional)}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 py-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="min-w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Nenhum profissional encontrado com esses critérios.</p>
            </div>
          )}
        </div>

        {/* Profile Modal */}
        {selectedProfessional && (
          <ProfileModal
            professional={selectedProfessional}
            onClose={() => setSelectedProfessional(null)}
            onRecommend={() => handleRecommend(selectedProfessional)}
            onMessage={() => handleMessage(selectedProfessional)}
          />
        )}
      </main>
    </div>
  )
}
