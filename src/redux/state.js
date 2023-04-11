let state = {
    profilePage: {
        postsFromServer : [
            {id: 1, body: 'Post1', countLike: 24},
            {id: 2, body: 'Post2', countLike: 2},
            {id: 3, body: 'Post3', countLike: 11},
            {id: 4, body: 'Post4', countLike: 17},
            {id: 5, body: 'Post5', countLike: 8},
            {id: 6, body: 'Post6', countLike: 18},
        ]
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
        ]
    },
    navbarPage: {}
}

export let addPost = (postBody) => {
    let newPost = {
        id: 7,
        body: postBody,
        countLike: 0,
    }
    state.profilePage.postsFromServer.push(newPost);
}
export default state;