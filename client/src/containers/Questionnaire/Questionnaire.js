import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import apiClient from '../../helpers/apiClient';

class Questions extends React.Component {
    constructor(props) {
        super();
        this.state = {
            questions: []
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
    
    render() {
        return (
            <div>
                {this.state.questions.map(question => {
                    return (
                        <QuestionCard
                            question={question} />
                    )
                })}
            </div>
        );
    }
}

export default Questions;  