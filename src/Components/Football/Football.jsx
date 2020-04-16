import React, { Component } from 'react'
import './Football.css';

import { dayta } from './mockData.json'

const FOOTBALL_API = {
  key: process.env.REACT_APP_FOOTBALL_API_KEY,
  url: "http://api.football-data.org/v2/competitions/2021/standings"
};

// const MCKDATA = dayta;

export class Football extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      standings: [],
      hasErrors: false
    };
  }

  componentDidMount() {
    // this.setState({
    //   loading: false,
    //   standings: MCKDATA,
    //   hasErrors: false
    // });

    fetch(FOOTBALL_API.url, {
      method: 'GET',
      headers: { 'X-Auth-Token': FOOTBALL_API.key }
    })
      .then(res => res.json())
      .then(response => {
        if (response) {
          let data = response.standings[0].table;
          this.setState({
            loading: false,
            standings: data,
            hasErrors: false
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ hasErrors: true, loading: false });
      });
  }

  clubName = (name) => {
    return name == null ? '' : name.slice(0, 3).toUpperCase();
  }

  render() {

    const tableRows = this.state.standings.map((club) =>
      <tr key={club.team.id}>
        <th className="no-right-padding" scope="row">{club.position}</th>
        <td>
          <span className="badge badge-image-container" data-size="25">
            <img
              className="badge-image badge-image--25"
              src={club.team.crestUrl}
              alt={club.team.name}
              height="18"
            />
          </span>
          <span className="long">{this.clubName(club.team.name)}</span>
        </td>
        <td>{club.playedGames}</td>
        <td>{club.won}</td>
        <td>{club.draw}</td>
        <td>{club.lost}</td>
        <td>{club.points}</td>
      </tr>
    );

    return (
      <div className="card p-0">
        <div className="football-container scrollbar" id="style-1">
          <div className="card-body">
            <h5 className="pl-2 card-title">Premier League (2019-20)</h5>
            {(this.loading === true) ? ('') : (
              <table className="table table-borderless table-hover white-table">
                <thead>
                  <tr>
                    <th scope="col">Pos</th>
                    <th scope="col" className="pleft-4">Club</th>
                    <th scope="col">P</th>
                    <th scope="col">W</th>
                    <th scope="col">D</th>
                    <th scope="col">L</th>
                    <th scope="col">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows}
                </tbody>
              </table>
            )}
          </div>
        </div >
      </div >
    )
  }
}

export default Football
