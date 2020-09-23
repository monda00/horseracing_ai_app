import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import getRaces from '../../actions/races';

import Race from './Race';

export class Races extends Component {
  static propsTypes = {
    races: PropTypes.object.isRequired,
    getRaces: PropTypes.func.isRequired,
    totalRaces: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  componentDidMount() {
    this.props.getRaces(this.state.activePage);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.getRaces(pageNumber);
  }

  render() {
    const listRaces = this.props.races.map((race) => (
      <tr key={race.race_id}>
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
              <th>会場</th>
              <th>距離</th>
              <th>日付</th>
              <th>結果</th>
              <th>予測</th>
              <th>tmp</th>
            </tr>
          </thead>
          <tbody>{listRaces}</tbody>
        </table>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={20}
          totalItemsCount={this.props.totalRaces}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item bg-secondary"
          linkClass="page-link bg-secondary"
          activeClass="active bg-dark"
          activeLinkClass="active bg-dark"
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  races: state.races.races,
  totalRaces: state.races.totalRaces,
  itemsCountPerPage: state.races.itemsCountPerPage,
});

export default connect(mapStateToProps, { getRaces })(Races);
