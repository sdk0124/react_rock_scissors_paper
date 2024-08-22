const WINS = {
    rock : 'scissor',
    scissor : 'paper',
    paper : 'rock'
};

const HAND = ['rock', 'scissor', 'paper'];

export function compareHand(me, other) {
    if (WINS[me] === other)
        return 1;
    else if (WINS[other] === me)
        return -1;
    else
        return 0;
}

export function getRandomNextHand() {
    const idx = Math.floor(Math.random() * HAND.length)
    return HAND[idx];
}