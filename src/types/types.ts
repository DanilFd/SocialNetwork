export type PostsData = {
    message: string
    likesCount: number
}
export type MessagesData = {
    message: string
}
export type UsersData = {
    name: string
    id: number
}
export type User = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        "small": string | null,
        "large": string | null
    },
    status: string | null,
    followed: boolean

}