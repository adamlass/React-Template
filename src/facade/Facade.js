import { handleHttpErrors, makeOptions } from "./FacadeUtils";

const URI = "http://localhost:8084/Webapp-Template/api/gitrepos"
const URI2 = "http://localhost:8084/Webapp-Template/api/gitrepos/name"


class Facade{
    getRepos = async () => {
        try {
            const res = await fetch(URI)
            console.log(res)
            const json = await handleHttpErrors(res)
            return json
        } catch (error) {
            return error
        }
    }
    getRepo = async (name) => {
        try {
            const res = await fetch(URI2 + "/" + name)
            console.log(res)
            const json = await handleHttpErrors(res)
            return json
        } catch (error) {
            return error
        }
    }
}

export default new Facade()