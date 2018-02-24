import React from 'react';
import uniqid from 'uniqid';

import API from '../../api';
import './styles.css';

export default class QuestionCreate extends React.Component {
    state = {
        name: ''
    };

    handleSubmit = (e) => {
        // TODO change published_at format, create real choices
        const questionId = uniqid();
        e.preventDefault();
        API.createQuestion({
          question: this.state.name,
          published_at: Date.now(),
          url: `/questions/${questionId}`,
          choices: [{
              choice: 'X',
              url: `/questions/${questionId}/choices/1`
          }]
        });
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value});
    };

    render() {
        return (
            <div className="create-question">
                <h1 className="create-question__header">Create Question</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Question:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    {/* TODO add choices*/}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}