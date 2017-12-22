import React from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import apiClient from '../../helpers/apiClient';
import Send from 'material-ui-icons/Send';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Spinner from '../../components/Spinner/Spinner'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

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
            savedAnswers: {},
            isLoading: false,
            selectedAnswers: {}
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        apiClient.getQuestions().then(this.showQuestions);
        const answersJSON = JSON.parse(localStorage.getItem('answers'));
        if (answersJSON) {
            const savedAnswers = answersJSON;
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    savedAnswers
                })
            }, 1000)
        }
    }

    showQuestions = (response) => {
        this.setState({
            questions: response.data,
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

        const body = { answers: this.state.questions };
        const data = this.state.savedAnswers;

        if (data) {
            body._id = data._id;
        }
        apiClient.saveAnswer(body)
            .then((response) => {
                this.setState({
                    open: true,
                    error: undefined,
                    isLoading: true
                })
                const data = response.data;
                localStorage.setItem("answers", JSON.stringify(data))
            })
            .then(() => {
                setTimeout(() => {
                    this.setState({ isLoading: false });
                    this.props.history.push("/");
                }, 1000)
            })
            .catch((error) => {
                this.setState({
                    open: true,
                    error,
                })
            })
    };

    handleRequestCloseError = () => {
        this.setState({
            open: false,
            isLoading: false,
        });
    }

    handleRequestClose = () => {
        this.props.history.push("/")
        this.setState({
            open: false,
            isLoading: false,
        });
    }

    showConfirmation = () => {
        if (!this.state.open) return null;
        const { fullScreen } = this.props;
        if (this.state.error) {
            return (
                <Dialog
                    open={this.state.open}
                    onRequestClose={this.handleRequestCloseError}
                >
                    <DialogTitle>{"Error"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            An error has happened, make sure you have answered all the questions!
					 </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestCloseError} color="primary">
                            OK
			 </Button>
                    </DialogActions>
                </Dialog>
            )
        } else {
            return (<Dialog
                fullScreen={fullScreen}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
            >

                <DialogTitle>{"Thank You"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You have successfully submitted your answers
			</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleRequestClose} color="primary">
                        OK
			</Button>
                </DialogActions>
            </Dialog>);
        }
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
                    {this.showConfirmation()}
                </div>
            );
        }
    }
}




export default withStyles(styles)(Questions);  