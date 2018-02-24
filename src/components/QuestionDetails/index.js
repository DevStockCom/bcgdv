import React from 'react';
import API from '../../api';
import './styles.css';

export default class QuestionDetails extends React.Component {
    state = {
        data: null,
        selectedAnswer: null
    };

    get totalVotes() {
        return this.state.data.choices.reduce((total, choice) => {
            total += choice.votes;
            return total;
        }, 0);
    }

    componentDidMount() {
        this.fetchQuestionsDetails();
    }

    getPercentage = (votes) => {
        return parseFloat(votes * 100 / this.totalVotes).toFixed(2);
    };

    selectAnswer = (url) => {
        const selectedAnswer = this.extractChoiceIdFromUrl(url);
        this.setState({ selectedAnswer });
    };

    extractChoiceIdFromUrl = (url) => {
        return url.split('/').pop();
    };

    handleVote = () => {
        API.vote(this.props.match.params.id, this.state.selectedAnswer)
            .then(() => this.setState({ selectedAnswer: null}))
            .then(this.fetchQuestionsDetails);
    };

    fetchQuestionsDetails = () => {
        return API.fetchQuestionDetails(this.props.match.params.id).then((data) => {
            this.setState({ data });
        });
    };



    renderQuestionChoices() {
        return this.state.data.choices.map((data, i) => {
            return (
                <li onClick={()=> this.selectAnswer(data.url)} key={i}
                    className={'question-details__choices-list__item ' + (this.state.selectedAnswer === this.extractChoiceIdFromUrl(data.url) ? 'question-details__choices-list__item--active' : '')}>
                    <span className="question-details__choices-list__item__name">{data.choice}</span>
                    <span className="question-details__choices-list__item__votes">{data.votes}</span>
                    <span className="question-details__choices-list__item__percentage">{this.getPercentage(data.votes)}%</span>
                    <span className="question-details__choices-list__item__percentage-bar">
                        <progress value={data.votes} max={this.totalVotes}></progress>
                    </span>
                </li>
            )
        })
    }

    render() {
        if (!this.state.data) {
            return <h1>Loading...</h1>;
        }

        return (
            <div className="question-details">
                <h1 className="question-details__header">Question Details</h1>
                <div className="question-details__question">
                    <p>Question: <b>{this.state.data.question}</b></p>
                </div>
                <ul className="question-details__choices-list">
                    {this.renderQuestionChoices()}
                </ul>
                <button className="question-details__vote-button" disabled={!this.state.selectedAnswer} onClick={this.handleVote}>VOTE</button>
            </div>

        )
    }
}