var likeCount = [0,0,0];
function clickLike1(){
    likeCount[0]++;
    var likes = document.querySelector("#likes1");
    likes.innerText = likeCount[0] + " like(s)";
}

function clickLike2(){
    likeCount[1]++;
    var likes = document.querySelector("#likes2");
    likes.innerText = likeCount[1] + " like(s)";
}

function clickLike3(){
    likeCount[2]++;
    var likes = document.querySelector("#likes3");
    likes.innerText = likeCount[2] + " like(s)";
}