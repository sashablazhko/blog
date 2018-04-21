import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';

const renderField = ({ input, label, type, meta: { touched, error, warning, invalid } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} className="form-control" />
    <div className="text-help">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class PostNew extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  onSubmit(props) {
    this.props.createPost(props);
    // this.context.router.push('/');
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { handleSubmit, pristine, reset, submitting } = this.props;
    /* eslint-enable no-unused-vars */

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        <Field name="title" type="text" component={renderField} label="Title" />
        <Field name="categories" type="text" component={renderField} label="Categories" />
        <Field name="content" type="text" component={renderField} label="Content" />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories!';
  }
  if (!values.content) {
    errors.content = 'Enter a content!';
  }

  return errors;
}

PostNew.defaultProps = {
  createPost: null
};

PostNew.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  reset: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  submitting: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  createPost: PropTypes.func
};

export default compose(
  connect(null, { createPost }),
  reduxForm({
    form: 'PostNewToken',
    validate
  })
)(PostNew);
