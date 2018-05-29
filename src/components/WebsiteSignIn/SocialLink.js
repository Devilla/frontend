import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button'
import { base } from 'services/api';

function SocialLink({ provider }) {
  return (
    <a href={`${base}connect/${provider}`} className="link">
      <Button type="button" social={provider}>
        <div className="button-elements">
          <i className={`fa fa-${provider=='facebook'?provider:'google-plus'}-official`} />
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
