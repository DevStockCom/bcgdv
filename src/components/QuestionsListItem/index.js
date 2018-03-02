import React from 'react';
import { Link } from 'react-router-dom';

export default class QuestionsList extends React.Component {

    render() {
        let publishedAt = new Date(this.props.published_at).toLocaleDateString();
        return (
                <li className="questions__list__item">
                    <h3><Link to={this.props.url}>{this.props.question}</Link></h3>
                    <div>
                        <span>Published at: </span>
                        <span>{publishedAt}</span>
                    </div>
                    <div>
                        <span>Available choices:</span>
                        <span>{this.props.choices.length}</span>
                    </div>
                </li>
        )
    }
}