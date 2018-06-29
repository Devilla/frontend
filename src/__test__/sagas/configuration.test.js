import { call } from 'redux-saga/effects';
import * as api from '../../services/api';
import { fetchCampaignConfiguration } from '../../sagas/configuration';
import { action } from '../../ducks/configuration';
import { assert } from 'assert';


describe('(Campaign) MyComponent', () => {
  describe('fetchCampaignConfiguration()',() => {
    const generator = fetchCampaignConfiguration();
    console.log(action+'=================');
    it('should fetch the campaign configurations',() => {
      try {
        assert.deepEqual(generator.next().value , call(api.GET, `configuration/campaign/${action.campId}/${action.notifId}`));
      }
      catch (error) {
        console.log(error+'===================');
      }
    });
  });
}); 