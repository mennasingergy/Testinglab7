
const getUsers = async () => {
    // Normally, this would interact with a database or API
    return [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
};

module.exports = getUsers; // Make sure this is properly exported
