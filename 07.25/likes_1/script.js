var likeCount = 0;
function clickLike(){
    likeCount++;
    var likes = document.querySelector("#likes");
    likes.innerText = likeCount + " like(s)";
}