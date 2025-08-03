export type NestedElement = {
	id?: number
	title: string
	description?: string
	link?: string
	url?: string
}

export type Topic = {
	title: string
	description: string
	level?: string
	elements?: NestedElement[]
	link?: string
}

export type Question = {
	title: string
	description: string
	elements?: NestedElement[]
	link?: string
}

export type Interview = {
	title: string
	description: string
	elements?: NestedElement[]
	link?: string
}

export type UsefulFeature = {
	title: string
	description: string
	elements?: NestedElement[]
	link?: string
}

export type IDirectionData = {
	title: string
	description: string
	topics: Topic[]
	questions?: Question[]
	interviews?: Interview[]
	useful_features?: UsefulFeature[]
}
