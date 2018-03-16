import React, { PureComponent } from 'react';

export default class Main extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
      resp: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitAnswer = this.submitAnswer.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	};

	submitAnswer(event) {
		console.log(this.state.resp)
		event.preventDefault();
    this.setState({resp: this.state.value})
	};

	render() {
		return(
      <div className="root">
        <div className="topbar">
          <div className="title">Lucy Wonsower</div>
          <div className="directory">
            <div>About</div>
            <div>Resume</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
		)
	};
};
