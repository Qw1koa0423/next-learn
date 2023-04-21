export interface EnventProps {
    id: string
    title: string
    image: string
    date: string
    location: string
    isFeatured: boolean
    description: string
}
export interface CommentProps {
    _id: any
    email: string
    name: string
    text: string
    eventId: string
}
