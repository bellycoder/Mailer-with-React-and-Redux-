const OPTIONS_FILTERS = {
    IS_SPAM: 'IS_SPAM',
    IS_UNREAD: 'IS_UNREAD',
    DELETE_MESSAGE: 'DELETE_MESSAGE'
};

const OPTIONS_ACTIONS = {
    isSpam: spam => ({
        type: OPTIONS_FILTERS.IS_SPAM,
        spam
    }),
    isUnread: mark => ({
        type: OPTIONS_FILTERS.IS_UNREAD,
        mark
    }),
    deleteMessage: bye => ({
        type: OPTIONS_FILTERS.DELETE_MESSAGE,
        bye
    })
};

export {OPTIONS_FILTERS, OPTIONS_ACTIONS};