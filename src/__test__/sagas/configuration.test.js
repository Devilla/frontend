import { call } from 'redux-saga/effects';
import * as api from '../../services/api';
import { fetchCampaignConfiguration, fetch, create, update, reviewRedirect } from '../../sagas/configuration';
import { action } from '../../ducks/configuration';
import { assert } from 'assert';

describe('(Campaign) MyComponent', () => {
  describe('create()',() => {
    const generator = create();
    console.log(action+'=================');
    it('should create the campaign configurations',() => {
      try {
        assert.deepEqual(generator.next().value , call(api.POST, 'configuration', action.configuration));
      }
      catch (error) {
        console.log(error+'===================');
      }
    });
  });
});

describe('(Campaign) MyComponent', () => {
  describe('update()',() => {
    const generator = update();
    console.log(action+'=================');
    it('should update the campaign configurations',() => {
      try {
        assert.deepEqual(generator.next().value , call(api.PUT, `configuration/${action.configuration.id}`, action.configuration));
      }
      catch (error) {
        console.log(error+'===================');
      }
    });
  });
});

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

describe('(Campaign) MyComponent', () => {
  describe('fetch()',() => {
    const generator = fetch();
    console.log(action+'=================');
    it('should fetch',() => {
      try {
        assert.deepEqual(generator.next().value , call(api.GET, `configuration/${action.campId}`));
      }
      catch (error) {
        console.log(error+'===================');
      }
    });
  });
});
