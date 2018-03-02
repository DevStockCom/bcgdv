import React from 'react';
import { Link } from 'react-router-dom';

import API from '../../api';
import './styles.css';
import QuestionsListItem from '../QuestionsListItem';

export default class QuestionsList extends React.Component {
    state = {
        questions: []
    };

    componentDidMount() {
        API.fetchQuestions().then((questions) => {
            this.setState({ questions });
        })
    }

    render() {
        return (
            <div className="questions">
                <h1 className="questions__header">Questions</h1>
                <ul className="questions__list">
                    {this.state.questions.map((data, i) => <QuestionsListItem {...data} key={i}/>)}
                </ul>
            </div>
        )
    }
}