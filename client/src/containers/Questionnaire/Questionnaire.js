import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import apiClient from '../../helpers/apiClient';
import Send from 'material-ui-icons/Send';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Spinner from '../../components/Spinner/Spinner'


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Questions extends React.Component {
    constructor(props) {
        super();
        this.state = {
            questions: [],
            answers: [],
            isLoading: false,
            selectedAnswers: {}

        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        apiClient.getQuestions()
            .then(this.showQuestions);
    }

    showQuestions = (response) => {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                questions: response.data
            })
        }, 1000)
    }
    onSelect = (question, event) => {
        const value = event.target.value;
        const selectedOption = question.options.find(option => {
            return option.value === value;
        });

        question.options.map(option => option.selected = false)
        selectedOption.selected = true;


        const selectedAnswers = this.state.selectedAnswers;
        selectedAnswers[question.questionId] = event.target.value;

        this.setState({
            selectedAnswers
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true
        })
        apiClient.saveAnswer({
            answers: this.state.questions
        })
            .then(() => {
                setTimeout(() => {
                    this.setState({ isLoading: false });
                    this.props.history.push("/");
                }, 1000)

            })
    }

    render() {
        const { classes } = this.props;
        if (this.state.isLoading) {
            return <Spinner />
        } else {
            return (
                <div className="questionnaires">
                    {this.state.questions.map((question, index) => {
                        return (
                            <QuestionCard key={index} questionId={index}
                                question={question}
                                selectedAnswer={this.state.selectedAnswers[question.questionId]}
                                onSelect={(event) => this.onSelect(question, event)} />
                        )
                    })}
                    <Button className={classes.button} raised color="primary" type="submit" value="Submit" onClick={this.handleSubmit}>
                        Send
                    <Send className={this.props.classes.rightIcon} />
                    </Button>
                </div>
            );
        }
    }
}

export default withStyles(styles)(Questions);  