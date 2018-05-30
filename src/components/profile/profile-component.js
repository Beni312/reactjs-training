import { actions } from '../../store/reducers/profileReducer';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './profile-component.css';

class Profile extends Component {
	render() {
		return (
			<Card className="col-md-3">
				<CardImg src={this.props.pictureUrl}/>
				<CardBody>
					<CardTitle>{this.props.username}</CardTitle>
					<CardText>
						Full name: {this.props.firstName + ' '} {this.props.lastName}
					</CardText>
				</CardBody>
			</Card>
		);
	}
}

Profile.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	username: PropTypes.string,
	pictureUrl: PropTypes.string
};

class ProfileComponent extends Component {
	componentDidMount() {
		this.props.getProfiles();
	}

	render() {
		console.log(this.props);
		if (this.props.loading) {
			return (
				<div>loading...</div>
			)
		} else if (this.props.error) {
			return (
				<div className="errorMessage">
					{this.props.error}
				</div>
			);
		} else {
			return (
				<div className="row">
					{this.props.profiles.map((item, i) => <Profile firstName={item.firstName} lastName={item.lastName} username={item.username} pictureUrl={item.pictureUrl} key={i}/>)}
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		profiles: state.profile.profiles,
		loading: state.profile.loading,
		error: state.profile.error
	}
};

const mapDispatchToProps = (dispatch) => ({
	getProfiles: () => dispatch(actions.getProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);