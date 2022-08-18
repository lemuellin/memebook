const formatTime = (string) => {
    let year = string.slice(0,4);
    let month = string.slice(5,7);
    let day = string.slice(8,10);

    let time = month + "/" + day + "/" + year;
    return time;
}

export default formatTime;