import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import apiClient from '../../helpers/apiClient';

class Questions extends React.Component {
    constructor(props) {
        super();
        this.state = {
            questions: [],
            selectedAnswer: '-1'
        };
    }

    componentDidMount() {
        apiClient.getQuestions()
            .then(this.updateQuestion);
    }

    updateQuestion = (response) => {
        this.setState({
            questions: response.data
        })
        
    }
    onSelect = (event) => {
        console.log('value returned:' + event.target.value)
        this.setState({
            selectedAnswer: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                {this.state.questions.map((question, index) => {
                    return (
                        <QuestionCard key={index} questionId={index}
                            selectedAnswer={this.state.selectedAnswer}
                            onSelect={this.onSelect}
                            question={question} />
                    )
                })}
            </div>
        );
    }
}

export default Questions;  