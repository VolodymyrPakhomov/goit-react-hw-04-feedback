import '../FeedbackOptions/FeedbackOptions.styled.css';

export const FeedbackOptions = ({ options, onIncrement }) => {
  return options.map(feedback => (
    <button key={feedback} type="button" onClick={() => onIncrement(feedback)}>
      {feedback}
    </button>
  ));
};
