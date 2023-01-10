function saturdayFun(activity = "roller-skate") {
    const fullFunStatement = `This Saturday, I want to ${activity}!`;
    return fullFunStatement;
};

const mondayWork = function (activity = `go to the office`) {
    const fullWorkStatement = `This Monday, I will ${activity}.`;

    return fullWorkStatement;
}

function wrapAdjective(string = "*") {
    return function(adjective = "special") {
        const newString = `You are ${string}${adjective}${string}!`;
        return newString;
    }
}