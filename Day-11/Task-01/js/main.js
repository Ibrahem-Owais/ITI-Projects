var PlayerOne = "Paper";
var PlayerTwo = "Rock";

if (PlayerOne === PlayerTwo) {
    console.log("pleas select another");
} else if (
    (PlayerOne === "Rock" && PlayerTwo === "Paper") ||
    (PlayerOne === "Paper" && PlayerTwo === "Rock")
) {
    console.log("PlayerOne wins over Rock!");
} else if (
    (PlayerOne === "Rock" && PlayerTwo === "scissors") ||
    (PlayerOne === "scissors" && PlayerTwo === "Rock")
) {
    console.log("Rock wins over scissors!");
} else if (
    (PlayerOne === "Paper" && PlayerTwo === "scissors") ||
    (PlayerOne === "scissors" && PlayerTwo === "Paper")
) {
    console.log("PlayerTwo wins over Paper!");
} else {
    console.log("Invalid choice entered.");
}