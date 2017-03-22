import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

import {main, survey, singleAnswerQuestion, multyAnswerQuestion, scaledAnswerQuestion, answerAggregator} from './components/main/main';
import surveyMicroservice from './services/survey';
import questionMicroservice from './services/question';
import answerMicroservice from './services/answer';
import aggregationMicroservice from './services/aggregation';

import '../styles/app.scss';

const MODULE_NAME = 'App';

angular.module(MODULE_NAME, [
    uiBootstrap
])
.component('main', main())
.component('survey', survey())
.component('singleAnswerQuestion', singleAnswerQuestion())
.component('multyAnswerQuestion', multyAnswerQuestion())
.component('scaledAnswerQuestion', scaledAnswerQuestion())
.component('answerAggregator', answerAggregator())
.service('surveyMicroservice', surveyMicroservice)
.service('questionMicroservice', questionMicroservice)
.service('answerMicroservice', answerMicroservice)
.service('aggregationMicroservice', aggregationMicroservice)
;

angular.bootstrap(document, [MODULE_NAME]);