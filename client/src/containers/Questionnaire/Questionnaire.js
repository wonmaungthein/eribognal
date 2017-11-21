import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import apiClient from '../../helpers/apiClient';
import Send from 'material-ui-icons/Send';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


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
    handleSubmit = (event) => {
        event.preventDefault();
        apiClient.saveAnswer({
            questions: this.state.question,
            selectedAnswers: this.state.selectedAnswers

        })
            .then(() => {
                this.setState({
                    questions: "",
                    selectedAnswers: ""
                })
                this.props.history.push("/")
            })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="questionnaires">
                {this.state.questions.map((question, index) => {
                    return (
                        <QuestionCard key={index} questionId={index}
                            question={question}
                            selectedAnswer={this.state.selectedAnswers[question._id]}
                            onSelect={(event) => this.onSelect(question._id, event)} />
                    )
                })}
                <Button className={classes.button} raised color="primary" type="submit" value="Submit" onSubmit={this.handleSubmit}>
                    Send
                    <Send className={this.props.classes.rightIcon} />
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Questions);  