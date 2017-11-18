import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import apiClient from '../../helpers/apiClient';

class Questions extends React.Component {
    constructor(props) {
        super();
        this.state = {
            questions: [],
            selectedAnswers: {}

        };
    }

    componentDidMount() {
        apiClient.getQuestions()
            .then(this.showQuestions);
    }

    showQuestions = (response) => {
        this.setState({
            questions: response.data
        })

    }
    onSelect = (questionId, event) => {
        const selectedAnswers = this.state.selectedAnswers;
        selectedAnswers[questionId] = event.target.value;

        this.setState({
            selectedAnswers
        })
    }

    render() {
        return (
            <div>
                {this.state.questions.map((question, index) => {
                    return (
                        <QuestionCard key={index} questionId={index}
                            question={question}
                            selectedAnswer={this.state.selectedAnswers[question._id]}
                            onSelect={(event) => this.onSelect(question._id, event)} />
                    )
                })}
            </div>
        );
    }
}

export default Questions;  