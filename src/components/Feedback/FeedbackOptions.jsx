import { PropTypes } from "prop-types"
import css from "../Feedback/FeedbackOptions.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div className={css.buttonWrapper}>
        {options.map((option, index) => { return <button type="button" key={index} onClick={onLeaveFeedback} name={option} className={css.optionBtn}>{option}</button>})}
    </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func,
}