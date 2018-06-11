import cx from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

class CustomButton extends Component {
    render() {
        const { fill, simple, pullRight, round, block, ...rest } = this.props;
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
            {rest.icon && rest.icon_pull!='right' && <Glyphicon glyph={rest.icon} />}
            {rest.children}
            {rest.icon && rest.icon_pull=='right' && <Glyphicon style={{padding: '0px 0px 0px 10px'}} glyph={rest.icon} />}
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
};

export default CustomButton;
