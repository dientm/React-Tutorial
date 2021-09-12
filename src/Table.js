import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <theader>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </theader>
  )
}


class Table extends Component {
  render() {

    const { characterData } = this.props


    const TableBody = () => {
      const rows = this.props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td> {row.name} </td>
            <td> {row.job} </td>
            <td>
              <button onClick={() => this.props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        )
      })

      return (
        <tbody> {rows} </tbody>
      )
    }

    const Table = (props) => {
      const {characterData, removeCharacter} = props;
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      )
    }

    return (
      <Table />
    )
  }
}

export default Table