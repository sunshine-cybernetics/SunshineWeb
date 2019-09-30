import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';

const TextInput = props => {
  const { id, type, label, isTextArea, value, onChangeText, textAreaHeight } = props;
  return (
    <div style={{ marginLeft: 15, marginRight: 15, flex: 1 }}>
      <form>
        <label
          htmlFor={id}
          style={{ ...styles.textInputLabel, width: isTextArea ? `100%` : undefined }}
        >
          {label}
          {isTextArea ? (
            <textarea
              style={{ width: `100%`, height: textAreaHeight }}
              minLength={3}
              value={value}
              onChange={evt => onChangeText(evt.target.value)}
            />
          ) : (
            <>
              <input
                id={id}
                type={type}
                style={styles.textInput}
                onChange={evt => onChangeText(evt.target.value)}
                minLength={3}
                maxLength={40}
                value={value}
              />
              <span style={{ display: `none`, fontSize: 10 }} className="validation-message">
                {`The ${id} you entered is not valid`}
              </span>
            </>
          )}
        </label>
      </form>
    </div>
  );
};

TextInput.defaultProps = {
  isTextArea: false,
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  textAreaHeight: PropTypes.number.isRequired,
};

export default TextInput;
