const reachDestination = (distance, speed) => {
    const howLong = distance / speed;
    const roundUp = Math.ceil(howLong / 0.5) * 0.5;
    return `I should be there in ${roundUp} hours.`
};

module.exports = reachDestination;
