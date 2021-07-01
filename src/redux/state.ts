
const _state = {
    profilePostsData: {
        postsData: [
            {message: "Hi, how are you?", likesCount: 12},
            {message: "it's my first pos", likesCount: 4},
            {message: "Mamat Kunem", likesCount: 40}
        ],
        newPostText: ""
    },
    dialogsPage: {
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
        ],
        newMessageText: ""
    }
}
export const store = {
    _state: _state,
    getState() {
        return this._state
    },
    _callSubscriber(state: State) {

    },
    subscribe(observer: (state: State) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        switch (action.type) {
            case "ADD_POST":
                const newPost = {
                    message: this._state.profilePostsData.newPostText,
                    likesCount: 0
                }
                this._state.profilePostsData.newPostText ? this._state.profilePostsData.postsData.push(newPost) : alert("Пусто Пусто")
                this._state.profilePostsData.newPostText = ""
                this._callSubscriber(this._state)
                return

            case "UPDATE_NEW_POST_TEXT":
                this._state.profilePostsData.newPostText = action.newText
                this._callSubscriber(this._state)
                return
            case "ADD_MESSAGE":
                const newMessage = {
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.newMessageText ? this._state.dialogsPage.messagesData.push(newMessage) : alert("Пусто Пусто")
                this._callSubscriber(this._state)
                return
            case "UPDATE_NEW_TEXT_MESSAGE":
                this._state.dialogsPage.newMessageText = action.newText
                this._callSubscriber(this._state)
        }
        return
    }
}
export const addPostActionCreator = () => ({type: "ADD_POST"})
export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE_NEW_POST_TEXT", newText: text})
export const addMessageActionCreator = () => ({type: "ADD_MESSAGE"})
export const updateNewMessageTextActionCreator = (text: string) => ({type: "UPDATE_NEW_TEXT_MESSAGE", newText: text})
export type State = typeof _state
export type ProfilePostData = typeof store._state.profilePostsData
export type DialogsPage = typeof store._state.dialogsPage

