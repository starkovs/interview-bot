const questions = require('./questions.json');
const { Random } = require('random-js');

const getRandomTopic = (topic) => {
    const random = new Random();
    if(topic !='random choice'){
       return topic;
    }
    return Object.keys(questions)[random.integer(0,Object.keys(questions).length-1)];
}

const getRandomQuestion = (topic) => {
    const random = new Random();
    const questionTopic = topic.toLowerCase();
    
    const randomQuestionIndex = random.integer(
        0,
        questions[questionTopic].length - 1,
    );

    return questions[questionTopic][randomQuestionIndex];
}

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find((question) => question.id === id);

    if(!question.hasOptions){
        return question.answer;
    }

    return question.options.find((option) => option.isCorrect).text;
};

module.exports = { getRandomQuestion, getCorrectAnswer, getRandomTopic };