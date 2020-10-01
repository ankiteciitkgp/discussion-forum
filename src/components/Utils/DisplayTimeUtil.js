module.exports = (timestamp) => {
    let date = new Date(timestamp);
    let currDate = new Date();
    let diff = (currDate-date)/(1000);
    if (diff < 60) {
        return Math.floor(diff) + " s";
    }else if (diff/60 < 60) {
        return +Math.floor(diff/60) + " m";
    } else if (diff/3600 <24) {
        return + Math.floor(diff/3600) + " h";
    } else {
        return + Math.floor(diff/(3600*24)) + " d";
    }
};
