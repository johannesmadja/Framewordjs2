"use strict";
var Status;
(function (Status) {
    Status[Status["Published"] = 0] = "Published";
    Status[Status["Unpunblished"] = 1] = "Unpunblished";
    Status[Status["Draft"] = 2] = "Draft";
})(Status || (Status = {}));
let state;
state = Status.Draft;
