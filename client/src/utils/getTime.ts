export default function getTimeSince(ogDate: Date) {

    // if `ogTime` is less than 1 hour after nowTime, call get time in minutes
    // if `ogTime` is more than 1 hour after nowTime, call get time in hours
    // if `ogTime` is more than 24 hours after nowTime, call get time in days
    // if `ogTime` is more than 1 month after nowTime, call get time in months

    // const getMinutes = () => {
    //     return nowTime.getMinutes() - testTime.getMinutes();
    // }
    
    const currentDate = new Date();
    const timeDifference = ogDate.getTime() - currentDate.getTime();

    // Calculate the time units
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    } else if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }



    // const d1 = new Date(Date.parse("2017-05-02T10:45"));

    // var getDuration = function (d1, d2) {
    //     d3 = new Date(d2 - d1);
    //     d0 = new Date(0);

    //     return {
    //         getHours: function () {
    //             return d3.getHours() - d0.getHours();
    //         },
    //         getMinutes: function () {
    //             return d3.getMinutes() - d0.getMinutes();
    //         },
    //         getMilliseconds: function () {
    //             return d3.getMilliseconds() - d0.getMilliseconds();
    //         },
    //         toString: function () {
    //             return this.getHours() + ":" +
    //                 this.getMinutes() + ":" +
    //                 this.getMilliseconds();
    //         },
    //     };
    // }

    // diff = getDuration(d1, d2);

    // console.log(diff.toString());
}