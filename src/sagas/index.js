import { fork } from 'redux-saga/effects';
import auth from './auth';
import profile from './profile';
import plan from './plan';
import payment from './payment';
import notification from './notification';
import campaign from './campaign';
import rules from './rules';
import configuration from './configuration';
import elastic from './elastic';
import pageurl from './pageurl';
import webhooks from './webhooks';

  export default function* rootSaga() {
    yield [
      fork(auth),
      fork(profile),
      fork(plan),
      fork(payment),
      fork(notification),
      fork(campaign),
      fork(rules),
      fork(configuration),
      fork(elastic),
      fork(pageurl),
      fork(webhooks)
    ];
  }
