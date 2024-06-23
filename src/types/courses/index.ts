export type Info = {
  id: string
  title: string
}

export type SaleCard = {
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

export type CardsResponse = {
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
