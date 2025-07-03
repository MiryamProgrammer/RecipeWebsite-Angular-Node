export interface User {
    _id: string,
    name: string,
    password: string,
    address: string,
    phone: string,
    isManager: boolean,
    favorites: Array<string>
}
