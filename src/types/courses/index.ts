export interface Info {
  id: string
  title: string
}
interface Translation {
  en: string
  ua: string
}
interface InfoItem {
  id: string
  title: Translation
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
  time: Translation[]
  lesson: Translation[]
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
  time: Translation
  lesson: Translation
  skills: Info[]
  img_url: string
  gradient: {
    color1: string
    color2: string
  }
  hover: string
}

export interface CardSale {
  type: string
  id: string
  accept: Translation
  title: string
  items: Translation
  info: InfoItem[]
  img_url: string
  gradient: {
    color1: string
    color2: string
  }
  hover: string
}
