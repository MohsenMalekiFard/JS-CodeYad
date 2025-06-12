//Object1 media


var Course = {
    Title:"JavaScript";
    Teacher:"Mohsen";
    Level:1;
    views:0;
    updateviews:function () {
        return ++Course.views;
    }
}

console.log(views);

Course.updateviews();

console.log(views);
