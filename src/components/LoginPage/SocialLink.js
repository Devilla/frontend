import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button'

function SocialLink({ provider }) {
  return (
    <a href={`http://localhost:1337/connect/${provider}`} className="link">
      <Button type="button" social={provider}>
        <div className="button-elements">
          <i className={`fa fa-${provider}-official`} />
          <span>
            {provider=='facebook'?'Continue with Facebook':'Continue with Google'}
          </span>
        </div>
      </Button>
    </a>
  );
}

SocialLink.propTypes = {
  provider: PropTypes.string.isRequired,
};

export default SocialLink;
