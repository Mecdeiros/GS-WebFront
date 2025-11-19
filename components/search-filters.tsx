import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SearchFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedArea: string
  onAreaChange: (value: string) => void
  selectedCity: string
  onCityChange: (value: string) => void
  selectedSkill: string
  onSkillChange: (value: string) => void
  areas: string[]
  cities: string[]
  skills: string[]
}

export default function SearchFilters({
  searchTerm,
  onSearchChange,
  selectedArea,
  onAreaChange,
  selectedCity,
  onCityChange,
  selectedSkill,
  onSkillChange,
  areas,
  cities,
  skills,
}: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome, cargo ou habilidade..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select value={selectedArea || "all"} onValueChange={(value) => onAreaChange(value === "all" ? "" : value)}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as áreas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as áreas</SelectItem>
            {areas.map(area => (
              <SelectItem key={area} value={area}>
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCity || "all"} onValueChange={(value) => onCityChange(value === "all" ? "" : value)}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as cidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as cidades</SelectItem>
            {cities.map(city => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedSkill || "all"} onValueChange={(value) => onSkillChange(value === "all" ? "" : value)}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as habilidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as habilidades</SelectItem>
            {skills.map(skill => (
              <SelectItem key={skill} value={skill}>
                {skill}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
