import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherFetchData } from '../../redux/modules/weather';

class Main extends Component {
	componentDidMount = () => {
		this.props.weatherData();
	};

	render() {
		console.log(this.props);
		return <div>main</div>;
	}
}

const mapDispatchToProps = dispatch => ({
	weatherData: () => dispatch(weatherFetchData())
});

export default connect(
	null,
	mapDispatchToProps
)(Main);
