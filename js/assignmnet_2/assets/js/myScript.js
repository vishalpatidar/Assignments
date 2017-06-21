$(document).ready( function() {
    var loadedPageNo = [];
    //load content on scroll
    $(window).scroll( function() {
        var blockCount, pageId, totalHeight, pageIndex, footerHeight, footerTop;

        totalHeight  =  $(window).scrollTop() + $(window).height();
        footerTop    = $('#footer').offset().top;
        footerHeight = footerTop + $('#footer').outerHeight();
        blockCount   = $('.block').length;
        pageId       = (blockCount/10)+1;
        pageIndex    = loadedPageNo.indexOf(pageId);

        if ( !( totalHeight < footerTop || $(window).scrollTop() > footerHeight) && !( pageIndex > -1) ) {
            if ( pageId <= 10 ) {
                loadedPageNo.push(pageId);
                loadPosts(pageId);
            }
        }
    });
});

//loads posts data
function loadPosts(pageNo) {
    //localStorage.removeItem("postsPage"+pageNo);
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("postsPage"+pageNo)) {
            displayData(pageNo);
        } else {
            $('#loading').css("display","block");
            var url = "https://jsonplaceholder.typicode.com/posts?_page="+pageNo;
            $.get(url, {},function( data, status ){
                if (status == "success") {
                    localStorage.setItem("postsPage" + pageNo, JSON.stringify(data));
                    displayData(pageNo);
                    $('#loading').css("display", "none");
                }
            }, "json");
        }
    }
}

//display posts data
function displayData(pageNo) {
    var postObj, txt;
    postObj  = $.parseJSON(localStorage.getItem("postsPage"+pageNo));
    txt      = "";

    $.each(postObj, function(idx, obj) {
        txt += "<div class='block col-sm-4' id='post-" + obj.id + "'>";
        txt += "<p>" + obj.id + "</p>";
        txt += "<h4>" + obj.title + "</h4>";
        txt += "<p class='limited-text'>" + obj.body + "</p>";
        txt += "<div class='read-more'><button class='btn btn-lg btn-success' data-toggle='modal'" + "data-target='#myModal' " + "onclick='showModal(" + obj.id + " , " + pageNo + ")'>Read More</button></div>";
        txt += "</div>";
    });

    $("#posts").append(txt);
}

//display data of the post in modal
function showModal(postId, pageId) {
    var postObj;
    var i = 0;
    postObj = $.parseJSON(localStorage.getItem("postsPage" + pageId));
    $.each(postObj, function(idx, obj) {
        if (obj.id === postId) {
            $('#modal-title').text(obj.title);
            $('#modal-body').text(obj.body);
            return;
        }
    });
}
