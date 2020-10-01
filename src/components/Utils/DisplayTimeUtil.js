module.exports = (timestamp) => {
    let date = new Date(timestamp);
    let currDate = new Date();
    let diffMinutes = (currDate-date)/(1000*60);
    if (diffMinutes < 1) {
        return "s";
    }else if (Math.floor(diffMinutes) === 1) {
        return "1 m";
    } else if (diffMinutes < 60) {
        return +Math.floor(diffMinutes) + " m";
    }else if (Math.floor(diffMinutes) === 60) {
        return "1 h";
    } else if (diffMinutes/60 <24) {
        return + Math.floor(diffMinutes/60) + " h";
    }else if (Math.floor(diffMinutes/60) === 24) {
        return "1 day";
    } else {
        return + Math.floor(diffMinutes/(60*24)) + " d";
    }
};
