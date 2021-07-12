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
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean

}
export type Profile = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type Auth = {
    data: {} | AuthData,
    messages: []
    resultCode: number

}

export type AuthData = {
    id: number,
    login: string,
    email: string
}