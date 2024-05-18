"use strict";
// 2024-05-08T13:37:38.027201+0000
// yyyy-mm-ddThh:mm:ss.ms+timezone
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestamp = void 0;
var getTimestamp = function () {
    var timestamp;
    var timestampJSON;
    // new Date
    var date = new Date();
    // Date and Time Components
    var year = date.getFullYear().toString().padStart(4, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var hour = date.getHours().toString().padStart(2, '0');
    var minute = date.getMinutes().toString().padStart(2, '0');
    var second = date.getSeconds().toString().padStart(2, '0');
    var millisecond = date.getMilliseconds().toString().padStart(6, '0');
    // Timezone offset
    var timezoneOffset = (+date.getTimezoneOffset()).toString();
    timestamp = "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second, ".").concat(millisecond).concat(timezoneOffset);
    timestampJSON = {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        timezoneOffset: timezoneOffset
    };
    return { timestamp: timestamp, timestampJSON: timestampJSON };
};
exports.getTimestamp = getTimestamp;
