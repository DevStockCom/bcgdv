import axios from 'axios';

import Config from './config';

export default {
    fetchQuestions: () => {
        return fetch(Config.api_url + '/questions').then(response => response.json());
    },

    fetchQuestionDetails: (id) => {
        return fetch(Config.api_url + '/questions/' + id).then(response => response.json());
    },

    createQuestion: (payload) => {
        // TODO
        console.log('TODO', payload);
    },

    vote: (questionId, choiceId) => {
        return axios.post(`${Config.api_url}/questions/${questionId}/choices/${choiceId}`);
    }
}