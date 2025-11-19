import { X, MessageSquare, ThumbsUp } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Professional } from '@/types/professional'

interface ProfileModalProps {
  professional: Professional
  onClose: () => void
  onRecommend: () => void
  onMessage: () => void
}

export default function ProfileModal({
  professional,
  onClose,
  onRecommend,
  onMessage,
}: ProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-h-[90vh] md:max-h-[80vh] w-full md:max-w-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold">Perfil Profissional</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Hero Section */}
          <div className="flex gap-6 items-start">
            <div className="h-32 w-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={professional.photo || "/placeholder.svg"}
                alt={professional.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-1">{professional.name}</h3>
              <p className="text-lg text-primary font-semibold mb-2">{professional.title}</p>
              <p className="text-muted-foreground mb-4">
                {professional.city} • {professional.area}
              </p>
              <p className="text-sm text-muted-foreground">{professional.connections} conexões</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h4 className="font-semibold mb-2 text-base">Sobre</h4>
            <p className="text-muted-foreground leading-relaxed">{professional.bio}</p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Habilidades Técnicas</h4>
            <div className="flex flex-wrap gap-2">
              {professional.skills.map(skill => (
                <Badge key={skill} variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Competências</h4>
            <div className="flex flex-wrap gap-2">
              {professional.softSkills.map(skill => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Educação</h4>
            <div className="space-y-3">
              {professional.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-4">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.school} • {edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Experiência</h4>
            <div className="space-y-3">
              {professional.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-4">
                  <p className="font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Interesses</h4>
            <p className="text-muted-foreground">{professional.hobbies.join(' • ')}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button
              onClick={onRecommend}
              className="flex-1 gap-2"
              variant="default"
            >
              <ThumbsUp className="w-4 h-4" />
              Recomendar
            </Button>
            <Button
              onClick={onMessage}
              className="flex-1 gap-2"
              variant="outline"
            >
              <MessageSquare className="w-4 h-4" />
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
