"use strict";
var Status;
(function (Status) {
    Status[Status["Progress"] = 0] = "Progress";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Winner"] = 2] = "Winner";
})(Status || (Status = {}));
