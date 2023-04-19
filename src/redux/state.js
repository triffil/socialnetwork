let store = {
    _state: {
        profilePage: {
            postsFromServer: [
                {id: 1, body: 'Post1', countLike: 24},
                {id: 2, body: 'Post2', countLike: 2},
                {id: 3, body: 'Post3', countLike: 11},
                {id: 4, body: 'Post4', countLike: 17},
                {id: 5, body: 'Post5', countLike: 8},
                {id: 6, body: 'Post6', countLike: 18},
            ],
            newPostText: '',
        },
        dialogPage: {
            dialogUsers: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'},
                {id: 5, name: 'User5'},
            ],
            dialogMessages: [
                {id: 1, message: 'Message1'},
                {id: 2, message: 'Message2'},
                {id: 3, message: 'Message3'},
                {id: 4, message: 'Message4'},
                {id: 5, message: 'Message5'},
            ],
            newMessageText: '',
        },
        navbarPage: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                body: this._state.profilePage.newPostText,
                countLike: 0,
            }
            this._state.profilePage.postsFromServer.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        }

        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogPage.newMessageText,
            }
            this._state.dialogPage.dialogMessages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        }

        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    },
}
export default store;