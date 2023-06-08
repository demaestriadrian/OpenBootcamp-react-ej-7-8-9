

export default class Contact {
    constructor({name, surname, email, connected = true, img}) {
        this.name = name
        this.surname = surname
        this.email = email
        this.connected = connected
        this.img = img
    }
}