import React from 'react';
import axios from 'axios';
import QuestionCard from '../../components/QuestionCard/QuestionCard'

class Questions extends React.Component {
    constructor(props) {
        super();
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        axios.get('http://eribognal-server.herokuapp.com/api/questions')
            .then(this.updateQuestion)
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
                            question={question.title} />
                    )
                })}
            </div>
        );
    }
}

export default Questions;  