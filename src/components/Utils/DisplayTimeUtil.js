module.exports = (timestamp) => {
    let date = new Date(timestamp);
    let currDate = new Date();
    let diffMinutes = (currDate-date)/(1000*60);
    if (diffMinutes < 1) {
        return "🕐 a few seconds ago";
    } else if (diffMinutes < 60) {
        return "🕐 "+Math.floor(diffMinutes) + " minutes";
    } else if (diffMinutes/60 <24) {
        return "🕐 " + Math.floor(diffMinutes/60) + " hours";
    } else {
        return "🕐 " + Math.floor(diffMinutes/(60*24)) + " days";
    }
};
