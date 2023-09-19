
export const getToken = () => {
    try {
        const citesa = JSON?.parse(localStorage.getItem('persist:portal') ?? '{}')
        const token = JSON?.parse(citesa.userData)?.token
        return token
    }
    catch (e) {
        return undefined
    }
}