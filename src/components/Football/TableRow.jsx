import React from 'react'

const TableRow = ({club}) => {
  return (
    <tr key={club.team.id}>
        <th className="no-right-padding" scope="row">
            {club.position}
        </th>
        <td>
            <span
                className="badge badge-image-container"
                data-size="25"
            >
                <img
                    className="badge-image badge-image--25"
                    src={club.team.crest}
                    alt={club.team.name}
                    height="18"
                />
            </span>
            <span className="long">
                {club.team.tla}
            </span>
        </td>
        <td>{club.playedGames}</td>
        <td>{club.won}</td>
        <td>{club.draw}</td>
        <td>{club.lost}</td>
        <td>{club.points}</td>
    </tr>
  )
}

export default TableRow