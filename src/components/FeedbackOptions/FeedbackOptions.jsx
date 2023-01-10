import '../FeedbackOptions/FeedbackOptions.styled.css';

export const FeedbackOptions = ({ options, onIncrement }) => {
  return options.map(feedback => (
    <button key={feedback} type="button" onClick={() => onIncrement(feedback)}>
      {feedback}
    </button>
  ));
};

// export const FeedbackOptions = ({ options, onIncrement }) => {
//   return (
//     <>
//       <div className="Controls">
//         <button name="good" value={good} type="button" onClick={onIncrement}>
//           Good
//         </button>
//         <button
//           name="neutral"
//           value={neutral}
//           type="button"
//           onClick={onIncrement}
//         >
//           Neutral
//         </button>
//         <button name="bad" value={bad} type="button" onClick={onIncrement}>
//           Bad
//         </button>
//       </div>
//     </>
//   );
// };
