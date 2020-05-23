import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getRaces from '../../actions/races';

import Race from './Race';

export class Races extends Component {
  static propsTypes = {
    races: PropTypes.array.isRequired,
    getRaces: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getRaces();
  }

  render() {
    const listRaces = this.props.races.map((race) => (
      <tr key={race.id}>
        <Race race={race} />
      </tr>
    ));

    return (
      <>
        <h2>レース一覧</h2>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>レース名</th>
              <th>日付</th>
              <th>結果</th>
              <th>予測</th>
            </tr>
          </thead>
          <tbody>{listRaces}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  races: state.races.races,
});

export default connect(mapStateToProps, { getRaces })(Races);
