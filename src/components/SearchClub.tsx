'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, MapPin, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { debounce } from 'lodash'

interface Club {
  id: string
  name: string
  subdomain: string
  logoUrl: string | null
  state: string
  city: string
  country: string
  theme: {
    primaryColor: string
  } | null
}

export default function SearchClub() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [clubs, setClubs] = useState<Club[]>([])
  const [states, setStates] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Buscar states disponíveis
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('/api/clubs/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'states' })
        })
        const statesData = await response.json()
        setStates(statesData)
      } catch (error) {
        console.error('Error fetching states:', error)
      }
    }
    fetchStates()
  }, [])

  // Buscar cities quando state muda
  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          const response = await fetch('/api/clubs/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'cities', state: selectedState })
          })
          const citiesData = await response.json()
          setCities(citiesData)
        } catch (error) {
          console.error('Error fetching cities:', error)
        }
      }
      fetchCities()
    } else {
      setCities([])
      setSelectedCity('')
    }
  }, [selectedState])

  // Função de busca com debounce
  const searchClubs = useMemo(
    () => debounce(async (query: string, state: string, city: string) => {
      if (!query && !state && !city) {
        setClubs([])
        setShowResults(false)
        return
      }

      setIsLoading(true)
      try {
        const params = new URLSearchParams()
        if (query) params.append('q', query)
        if (state) params.append('state', state)
        if (city) params.append('city', city)

        const response = await fetch(`/api/clubs/search?${params}`)
        const clubsData = await response.json()
        setClubs(clubsData)
        setShowResults(true)
      } catch (error) {
        console.error('Error searching clubs:', error)
        setClubs([])
      } finally {
        setIsLoading(false)
      }
    }, 300),
    []
  )

  // Executar busca quando parâmetros mudam
  useEffect(() => {
    searchClubs(searchQuery, selectedState, selectedCity)
  }, [searchQuery, selectedState, selectedCity, searchClubs])

  const handleClubAccess = (subdomain: string) => {
    window.open(`https://${subdomain}.scoreclick.com.br`, '_blank')
  }

  return (
    <section className="default-text-colors w-full flex flex-col justify-center items-center !mb-10 py-20">
      {/* Barra de Busca */}
      <span className="font-semibold">Clubes parceiros</span>
      <div className="bg-white w-full max-w-[90vw] md:max-w-[800px] rounded-2xl shadow-xl overflow-hidden mx-auto !p-0">

        {/* Filtros */}
        <div className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Busca por nome/subdomínio */}
            <div className="relative group">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar nome do clube"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-left !pl-4 !text-lg border-2 border-brand-gray-light rounded-xl focus:border-brand-green-medium focus:ring-2 focus:ring-brand-green-light/20 transition-all duration-300 bg-white hover:border-brand-green-light  h-[50px]"
                />
              </div>
            </div>

            {/* Filtro por State */}
            <div className="group">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-brand-gray-light rounded-xl focus:border-brand-green-medium focus:ring-2 focus:ring-brand-green-light/20 focus:outline-none bg-white hover:border-brand-green-light transition-all duration-300 cursor-pointer"
              >
                <option value="">Selecionar estado</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por City */}
            <div className="group">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-brand-gray-light rounded-xl focus:border-brand-green-medium focus:ring-2 focus:ring-brand-green-light/20 focus:outline-none bg-white hover:border-brand-green-light transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedState}
              >
                <option value="">Todas as cidades</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="bg-white !mt-6 w-full max-w-[90vw] md:max-w-[800px] rounded-2xl shadow-lg p-12 text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-green-medium to-brand-green-light rounded-full mb-4">
            <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-brand-green-dark text-lg font-medium" style={{ fontFamily: 'var(--font-secondary)' }}>
            Buscando clubes...
          </p>
        </div>
      )}

      {/* Resultados da Busca */}
      {showResults && clubs.length > 0 && (
        <div className="bg-white !mt-6 w-full max-w-[90vw] md:max-w-[800px] rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-brand-gray-light to-white p-4 border-b border-brand-gray-light/50">
            <span className="!text-sm !my-2 text-brand-gray-dark flex items-center" style={{ fontFamily: 'var(--font-primary)' }}>
              <div className="w-2 h-2 bg-brand-green-medium rounded-full mr-3"></div>
              Clubes Encontrados ({clubs.length})
            </span>
          </div>
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-80 overflow-y-auto custom-scrollbar">
              {clubs.map((club) => (
                <button
                  key={club.id}
                  onClick={() => handleClubAccess(club.subdomain)}
                  className="!mx-2 group p-4 rounded-xl hover:border-brand-green-medium hover:shadow-lg transition-all duration-300 text-left bg-white hover:bg-gradient-to-br hover:from-white hover:to-brand-gray-light/20"
                >
                  <div className="flex items-center space-x-4 gap-1">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform border border-brand-gray-light group-hover:border-brand-green-light"
                      style={{ 
                        backgroundColor: club.theme?.primaryColor || '#04a668'
                      }}
                    >
                      {club.logoUrl ? (
                        <Image
                          src={club.logoUrl}
                          alt={`${club.name} logo`}
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-primary)' }}>
                          {club.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="m-0 p-0 font-semibold text-brand-gray-dark truncate text-lg group-hover:text-brand-green-dark transition-colors" style={{ fontFamily: 'var(--font-primary)' }}>
                        {club.name}
                      </p>
                      <p className="m-0 p-0 text-brand-green-medium truncate flex items-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                        <MapPin className="w-3 h-3" />
                        <span className='!pl-[5px]'>{club.city}, {club.state}</span>
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-4 h-4 text-brand-green-medium group-hover:text-brand-green-dark group-hover:scale-110 transition-all" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* Estado vazio */}
      {showResults && clubs.length === 0 && !isLoading && (
        <div className="bg-white rounded-2xl shadow-lg border border-brand-gray-light/30 p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-gray-light to-brand-gray-light/50 rounded-full mb-6">
            <Search className="w-10 h-10 text-brand-green-medium opacity-60" />
          </div>
          <h3 className="text-xl font-bold text-brand-gray-dark mb-2" style={{ fontFamily: 'var(--font-primary)' }}>
            Nenhum clube encontrado
          </h3>
          <p className="text-brand-green-dark opacity-80 text-lg mb-4" style={{ fontFamily: 'var(--font-secondary)' }}>
            Não encontramos clubes com os critérios de busca informados.
          </p>
          <p className="text-brand-green-medium text-sm">
            Tente ajustar os filtros ou buscar por outro termo.
          </p>
        </div>
      )}
    </section>
  )
}
