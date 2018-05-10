import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

class CustomButton extends Component {
    render() {
        const { fill, simple, pullRight, round, block, ...rest } = this.props;
        console.log(rest, "=================>rest");
        const btnClasses = cx({
            'btn-fill': fill,
            'btn-simple': simple,
            'pull-right': pullRight,
            'btn-block': block,
            'btn-round': round
        });

        return (
          <Button
                className={btnClasses}
                {...rest}
            >
            {rest.icon && <Glyphicon glyph={rest.icon} />}
            {rest.children}
          </Button>
        );
  }
}

CustomButton.propTypes = {
    fill: PropTypes.bool,
    simple: PropTypes.bool,
    pullRight: PropTypes.bool,
    block: PropTypes.bool,
    round: PropTypes.bool
}

export default CustomButton;
