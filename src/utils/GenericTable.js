import React from "react"

import { Table } from "react-bootstrap"

export default class GenericTable extends React.Component {
    constructor() {
        super()
    }


    render() {
        if (this.props.data) {
            var data = this.props.data
            var first = data[1]
            var thead = Object.keys(first).map(e => (
                <th>{e}</th>
            ))
            var content = data.map(e => (
                <tr>
                    {Object.values(e).map((val) => (
                        <td>{val}</td>
                    ))}
                </tr>
            ))

        }

        return (
            <Table>
                <thead>
                    <tr>
                        {thead}
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </Table>
        )
    }
}