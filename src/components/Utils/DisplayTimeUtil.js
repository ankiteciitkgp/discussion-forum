module.exports = (timestamp) => {
    let date = new Date(timestamp);
    let currDate = new Date();
    let diffMinutes = (currDate-date)/(1000*60);
    if (diffMinutes < 1) {
        return "🕐 seconds ago";
    }else if (Math.floor(diffMinutes) === 1) {
        return "🕐 1 minute";
    } else if (diffMinutes < 60) {
        return "🕐 "+Math.floor(diffMinutes) + " minutes";
    }else if (Math.floor(diffMinutes) === 60) {
        return "🕐 1 hour";
    } else if (diffMinutes/60 <24) {
        return "🕐 " + Math.floor(diffMinutes/60) + " hours";
    }else if (Math.floor(diffMinutes/60) == 24) {
        return "🕐 1 day";
    } else {
        return "🕐 " + Math.floor(diffMinutes/(60*24)) + " days";
    }
};
