function changeElement(){
    var newName = document.querySelector("#nameChanged");
    newName.innerText = "Michael Jackson";
}

var connectionRequests = 2;
function removeUser1(){
    connectionRequests--;
    var currentConnectionRequests = document.querySelector(".badge");
    currentConnectionRequests.innerText = connectionRequests;
    var toddE = document.querySelector("#toddE");
    toddE.remove();
}

function removeUser2(){
    connectionRequests--;
    var currentConnectionRequests = document.querySelector(".badge");
    currentConnectionRequests.innerText = connectionRequests;
    var philE = document.querySelector("#philE");
    philE.remove();
}

var currentConnections = 418;
function increase(){
    currentConnections++;
    var increaseConnections = document.querySelector("#increase-connections");
    increaseConnections.innerText = currentConnections;
}