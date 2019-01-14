import React from "react"
import Facade from "../facade/Facade";
import GenericTable from "../utils/GenericTable"

export default class Table extends React.Component {
    constructor() {
        super()
        this.state = { data: null }
    }

    async componentDidMount() {
        this.update()
    }

    update = async () => {
        var data = await Facade.getAll()
        this.setState({ data })
    }

    render() {
        return (
            <>
                <h1>Table</h1>
                <GenericTable data={this.state.data} idName="id" update={this.update} URI={Facade.getURI()} remove edit />
            </>
        )
    }
}

