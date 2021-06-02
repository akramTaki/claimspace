const colors = {
    white: {
        1: "#fff"
    },
    gray: {
        1: "#F8F8F8",
        2: "#BCBCBC"
    },
    blue: {
        1: "#0E80F1"
    },
    black: {
        1: "#21272A",
        2: "#546E7A"
    }
}

const picker = (colorName = "white", density = 1) => {
    return colors[colorName][density];
}

export default picker;