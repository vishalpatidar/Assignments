//loads posts data
function loadPosts(pageNo) {
    //localStorage.removeItem("postsPage"+pageNo);
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("postsPage"+pageNo)) {
            displayData(pageNo);
        } else {
            document.getElementById('loading').style.display = "block";
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts?_page="+pageNo, true);
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    localStorage.setItem("postsPage" + pageNo, this.responseText);
                    localStorage.setItem("postsPageLinks" + pageNo, this.getResponseHeader("Link"));
                    displayData(pageNo);
                    document.getElementById('loading').style.display = "none";
                }
            }
        }
    }
}

//display posts data
function displayData(pageNo) {
    var postObj, txt, linksObj, pageLinks, linksArray, linkText, src, i, linkDisabled, linkActive, newPageNo;
    postObj  = JSON.parse(localStorage.getItem("postsPage"+pageNo));
    //linksObj = localStorage.getItem("postsPageLinks" + pageNo);
    txt      = "";
    // count    = 0;
    for (x in postObj) {
        // if (count === 3 || count === 0) {
        //     txt += "<div class='row'>";
        // }
        txt += "<div class='block col-sm-4' id='post-" + postObj[x].id + "'>";
        txt += "<p>" + postObj[x].id + "</p>";
        txt += "<h4>" + postObj[x].title + "</h4>";
        txt += "<p class='limited-text'>" + postObj[x].body + "</p>";
        txt += "<div class='read-more'><button class='btn btn-lg btn-success' data-toggle='modal'" + "data-target='#myModal' " + "onclick='showModal(" + postObj[x].id + " , " + pageNo + ")'>Read More</button></div>";
        txt += "</div>";

        // count += 1;
        // if (count === 3) {
        //     txt += "</div>";
        //     count = 0;
        // }
    }

    document.getElementById("posts").insertAdjacentHTML( 'beforeend', txt );

    //for pagination
    /*if (linksObj) {
        pageLinks  = "";
        linkText   = "";
        i          = 0;
        linksArray = linksObj.split(",");
        pageLinks  += "<ul class='pagination'>";

        for ( i; i < linksArray.length; i++) {

            src = linksArray[i].split(";");
            linkText = src[1].replace("rel=","").replace(/\"/g, "").replace(/\s/g, "");
            linkSrc = src[0].substring(1, src[0].length-1); console.log(linkSrc);
            newPageNo = decodeURIComponent(linkSrc.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent("_page").replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));

            if ( pageNo == newPageNo ) {
                linkActive = "active";
            } else {
                linkActive = "";
            }

            pageLinks += "<li class='" + linkActive + "'><a href='#' onclick='loadPosts(" + newPageNo + ")' "+ src[1] + ">"+linkText+"</a></li>";
        }

        pageLinks += "</ul>";
    }
    document.getElementsByClassName("page-links")[0].innerHTML = pageLinks;
    document.getElementsByClassName("page-links")[1].innerHTML = pageLinks;*/

}

//display data of the post in modal
function showModal(postId, pageId) {
    var postObj;
    var i = 0;
    postObj = JSON.parse(localStorage.getItem("postsPage" + pageId));
    for ( i; i < postObj.length; i++) {
        if (postObj[i].id === postId) {
            document.getElementById('modal-title').innerHTML = postObj[i].title;
            document.getElementById('modal-body').innerHTML = postObj[i].body;
            break;
        }
    }
}

var loadedPageNo = [];
//load content on scroll
window.onscroll = function() {
    var blockCount, pageId;
    var viewportheight = window.innerHeight;
    var offsetTop      = document.getElementById('footer').getBoundingClientRect();

    blockCount = document.querySelectorAll('.block').length;
    pageId     = (blockCount/10)+1;

    if ( (offsetTop.top - viewportheight+30) < 0 && !(loadedPageNo.indexOf(pageId) > -1) ) {
        if ( pageId <= 10 ) {
            loadedPageNo.push(pageId);
            loadPosts(pageId);
            console.log(viewportheight);
            console.log(offsetTop.top);
        }
    }
};
