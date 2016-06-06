define([
'taoQtiItem/qtiCreator/widgets/states/factory',
'taoQtiItem/qtiCreator/widgets/interactions/states/Answer',
'taoQtiItem/qtiCreator/widgets/interactions/helpers/answerState'
], function(stateFactory, Answer, answerStateHelper){
    'use strict';
    var ExtendedTextInteractionStateAnswer = stateFactory.extend(Answer, function(){

        // By default, select the correct state when entering response edition.
        this.widget.changeState('correct');

    }, function(){

    });
    return ExtendedTextInteractionStateAnswer;
});
