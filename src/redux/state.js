let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        postsFromServer : [
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
        dialogUsers : [
            {id: 1, name: 'User1'},
            {id: 2, name: 'User2'},
            {id: 3, name: 'User3'},
            {id: 4, name: 'User4'},
            {id: 5, name: 'User5'},
        ],
        dialogMessages : [
            {id: 1, message: 'Message1'},
            {id: 2, message: 'Message2'},
            {id: 3, message: 'Message3'},
            {id: 4, message: 'Message4'},
            {id: 5, message: 'Message5'},
        ],
        newMessageText: '',
    },
    navbarPage: {}
}
export const updateNewMessageText = (messageText) => {
    state.dialogPage.newMessageText = messageText;
    rerenderEntireTree(state);
}

export const sendMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogPage.newMessageText,
    }
    state.dialogPage.dialogMessages.push(newMessage);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const addPost = () => {
    let newPost = {
        id: 7,
        body: state.profilePage.newPostText,
        countLike: 0,
    }
    state.profilePage.postsFromServer.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;