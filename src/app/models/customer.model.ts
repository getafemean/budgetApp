export interface Customer {
    name: string,
    cif: string,
    adress: string,
    cp: string,
    city: string,
    contact: {
        name: string,
        surname: string,
        phone: string,
        email: string
    },
}