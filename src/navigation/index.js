
export const getHomeLink= () => '/';

export const getChatsLink = () => [getHomeLink(), 'chats'].join('');

export const getProfileLink = () => [getHomeLink(), 'profile'].join('');

export const getChatLink = (chatId = ':chatId') => [
    getChatsLink(),
    chatId
].join ('/')

