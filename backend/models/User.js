class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    save() {
        // Logic to save the user to the database
    }

    static find(username) {
        // Logic to find a user by username
    }

    static update(username, updatedData) {
        // Logic to update user information
    }

    static delete(username) {
        // Logic to delete a user
    }
}

module.exports = User;