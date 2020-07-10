export function getRandomThrow() {
    let value = Math.ceil(Math.random() * 3);

    if (value === 1) {
        return value = 'rock';

    } else if (value === 2) {
        return value = 'paper';

    } else {
        return value = 'scissors';
    }
}
