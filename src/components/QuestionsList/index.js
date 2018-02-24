import React from 'react';
import { Link } from 'react-router-dom';

import API from '../../api';
import './styles.css';

export default class QuestionsList extends React.Component {
    state = {
        questions: []
    };

    componentDidMount() {
        API.fetchQuestions().then((questions) => {
            this.setState({ questions });
        })
    }

    renderQuestions() {
        return this.state.questions.map((data, i) => {
            let publishedAt = new Date(data.published_at).toLocaleDateString();
            return (
                    <li key={i} className="questions__list__item">
                        <h3><Link to={data.url}>{data.question}</Link></h3>
                        <div>
                            <span>Published at: </span>
                            <span>{publishedAt}</span>
                        </div>
                        <div>
                            <span>Available choices:</span>
                            <span>{data.choices.length}</span>
                        </div>
                    </li>
            )
        })
    }

    render() {
        return (
            <div className="questions">
                <h1 className="questions__header">Questions</h1>
                <ul className="questions__list">
                    {this.renderQuestions()}
                </ul>
            </div>
        )
    }
}