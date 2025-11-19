import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Professional } from '@/types/professional'

// Props for the ProfessionalCard component
interface ProfessionalCardProps {
  professional: Professional
  onClick: () => void
}

// Functional component to display a professional's card
export default function ProfessionalCard({ professional, onClick }: ProfessionalCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col hover:border-primary"
      onClick={onClick}
    >
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
        <img
          src={professional.photo || "/placeholder.svg"}
          alt={professional.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-1 text-balance">{professional.name}</h3>
        <p className="text-sm text-primary font-semibold mb-1">{professional.title}</p>
        <p className="text-xs text-muted-foreground mb-4">{professional.city} • {professional.area}</p>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{professional.bio}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {professional.skills.slice(0, 3).map(skill => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {professional.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{professional.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
