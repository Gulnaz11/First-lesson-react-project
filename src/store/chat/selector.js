
export const getMessagesFromState = (state) => state.messages;

export const getMessages = (state) => getMessagesFromState(state).messages;

export const getMessageByProject = (chatId) => (state) => getMessages(state)[chatId];
