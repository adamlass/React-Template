import React from "react"

import GenericCreate from "../utils/GenericCreate"
import Facade from "../facade/Facade"

//change this
var keys = {
    name:"text",
    birth: "date",
    death: "date",
    species:"text",
}

export default () => (
    <GenericCreate URI={Facade.getURI()} keys={keys} />
)