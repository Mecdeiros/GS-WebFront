export interface Professional {
  id: number
  name: string
  title: string
  area: string
  city: string
  photo: string
  bio: string
  education: Array<{
    school: string
    degree: string
    year: number
  }>
  experience: Array<{
    company: string
    role: string
    duration: string
  }>
  skills: string[]
  softSkills: string[]
  hobbies: string[]
  connections: number
}
