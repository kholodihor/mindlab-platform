export interface Info {
  id: string
  title: string
}

export interface SaleCard {
  id: string
  title: string
  items: string
  info: Info[]
  img_url: string
  gradient: {
    color1: string
    color2: string
  }
  hover: string
}

export interface CardsResponse {
  id: string
  title: string
  time: string
  lesson: string
  skills: Info[]
  img_url: string
  gradient: {
    color1: string
    color2: string
  }
  hover: string
}
export interface CardData {
  type: string
  id: string
  title: string
  items?: string
  info?: Info[]
  time?: string
  lesson?: string
  skills?: Info[]
  img_url: string
  gradient: {
    color1: string
    color2: string
  }
  hover: string
}
