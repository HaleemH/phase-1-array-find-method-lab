// code your solution here
function superbowlWin(arg) {
    let winner = arg.find(item => item.result === "W")
    if (winner.result != "W") {
        return 'undefined' 
    } else { return winner.year};
}


