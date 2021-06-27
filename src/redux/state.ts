import {renderTree} from "../render";

export let state = {
    profilePostsData: {
        postsData: [
            {message: "Hi, how are you?", likesCount: 12},
            {message: "it's my first pos", likesCount: 4},
            {message: "Mamat Kunem", likesCount: 40}
        ],
        newPostText: ""
    },
    usersData: [
        {name: 'Hasbik1', id: 1},
        {name: "Hasbik2", id: 2},
        {name: "Hasbik3", id: 3},
        {name: "Hasbik4", id: 4},

    ],
    messagesData: [
        {message: "Сдарова когда бой с абдурозиком"},
        {message: "Сдарова когда бой с абдурозиком"},
        {message: "Сдарова когда бой с абдурозиком"},
        {message: "Сдарова когда бой с абдурозиком"}

    ]
}
export type State = typeof state
export type ProfilePostData = typeof state.profilePostsData
export const updateNewPostText = (newText: string) => {
    state.profilePostsData.newPostText = newText
    renderTree(state)
}
export const addPost = (message: string) => {
    const newPost = {
        message: message,
        likesCount: 0
    }
    state.profilePostsData.postsData.push(newPost)
    renderTree(state)
}