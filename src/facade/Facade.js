import { handleHttpErrors, makeOptions } from "./FacadeUtils";

const URI = "http://localhost:8084/Webapp-Template/api/pets"


class Facade{
    //Don't delete
    getURI = () =>{
        return URI
    }

    getAll = async () => {
        try {
            const res = await fetch(URI)
            console.log(res)
            const json = await handleHttpErrors(res)
            return json
        } catch (error) {
            alert("Status: " + error.status + "\nFull Error: " + JSON.stringify(error.fullError))
        }
    }

    //Don't delete
}

export default new Facade()