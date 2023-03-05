const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    text: document.querySelector("#p1Display")
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    text: document.querySelector("#p2Display")
};

const select = document.querySelector("#playto");
let winScore = 3;
let isGameOver = false
const resetButton = document.querySelector("#reset")


function handleGameScore(player, otherPlayer) {
    if (!isGameOver) {
        player.score++;
        if (player.score >= winScore && player.score >= otherPlayer.score + 2) {
            isGameOver = true;
            player.text.classList.add("winner");
            otherPlayer.text.classList.add("loser");
            player.button.disabled = true;
            otherPlayer.button.disabled = true;
        }
        player.text.textContent = player.score;
    }
}
p1.button.addEventListener("click", () => {
    handleGameScore(p1, p2);
})

p2.button.addEventListener("click", () => {
    handleGameScore(p2, p1);
})

select.addEventListener("change", function () {
    winScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.text.textContent = p.score;
        p.text.classList.remove("winner", "loser");
        p.button.disabled = false;
    }
}