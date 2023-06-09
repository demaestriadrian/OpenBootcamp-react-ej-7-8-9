import { v4 as uuid } from "uuid"

export default class Contact {
    constructor({name = '', surname = '', email = '', connected = true, img = ''} = {}) {
        this.id = uuid()
        this.name = name
        this.surname = surname
        this.email = email
        this.connected = connected
        this.img = img
    }
}   