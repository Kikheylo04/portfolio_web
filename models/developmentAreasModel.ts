export interface DevelopmentAreasModel {
  id: number
  icon: string
  title: string
  link: string
  technologies: Technology[]
}

export interface Technology {
  id: number
  icon: string
  name: string
}
