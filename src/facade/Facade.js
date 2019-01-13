import { handleHttpErrors, makeOptions } from "./FacadeUtils";

const URI = ""


class Facade{
    get = async () => {
        try {
            const res = await fetch(URI)
            console.log(res)
            const json = await handleHttpErrors(res)
            return json
        } catch (error) {
            return error
        }
    }
}

export default new Facade()