import template from './survey.html';

import singleAnswerQuestion from '../questions/singleAnswerQuestion/singleAnswerQuestion';
import multyAnswerQuestion from '../questions/multyAnswerQuestion/multyAnswerQuestion';
import scaledAnswerQuestion from '../questions/scaledAnswerQuestion/scaledAnswerQuestion';

let survey = () => {
    return {
        templateUrl: template,
        bindings: {
            'surveyGuid': '@'
        },
        controller: ($scope, $http, $injector, $attrs, surveyMicroservice, $rootScope) => {
            let surveyModel = {};

            $scope.survey = surveyMicroservice.getSurveyByGuid($attrs.surveyGuid);

            $scope.$on('SingleAnswerQuestion:answerQuestion', (event, answer) => {
                let questionId = Object.keys(answer)[0];

                if (surveyModel['SingleAnswerQuestion'] == undefined) {
                    surveyModel['SingleAnswerQuestion'] = {};
                }

                surveyModel['SingleAnswerQuestion'][questionId] = answer[questionId];
            });

            $scope.$on('MultyAnswerQuestion:answerQuestion', (event, answer) => {
                let questionId = Object.keys(answer)[0];

                if (surveyModel['MultyAnswerQuestion'] == undefined) {
                    surveyModel['MultyAnswerQuestion'] = {};
                }

                surveyModel['MultyAnswerQuestion'][questionId] = answer[questionId];
            });

            $scope.$on('ScaledAnswerQuestion:answerQuestion', (event, answer) => {
                let questionId = Object.keys(answer)[0];

                if (surveyModel['ScaledAnswerQuestion'] == undefined) {
                    surveyModel['ScaledAnswerQuestion'] = {};
                }

                surveyModel['ScaledAnswerQuestion'][questionId] = answer[questionId];
            });

            $scope.submitSurvey = () => {
                let form = $scope['survey' + $scope.survey.id];

                document.getElementById('survey' + $scope.survey.id).reset();

                $rootScope.$broadcast('Survey:submitSurvey', surveyModel);

                form.$setPristine();
                form.$setUntouched();
            };
        }
    };
};

export {survey, singleAnswerQuestion, multyAnswerQuestion, scaledAnswerQuestion};