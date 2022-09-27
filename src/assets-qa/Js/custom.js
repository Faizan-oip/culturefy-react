// Hamza Js
$('.main-event-div').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
});
$('.med-cam-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
});



// Campaign Ad Btns
$(document).ready(function(){
    $('.cmp-btns button').click(function(){
        $(this).addClass('clicked');
    })
})

// Campaign Generate Btn

$(document).ready(function(){
    $('.rev-campaign').hide();
    $('.btn-generate').click(function(){
    $(this).remove();
    $('.rev-campaign').show();
    $('.slider-camp.slick-initialized').slick('refresh');
    });
});

// Select2 Js
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

// Top Profile Menu
$(document).ready(function(){
    $('.profile-box').hide(0);
    $('li.profile-img img').first().click(function(){
        $('.profile-box').slideToggle(300);
    });
});

// Create Survey Add Question Dropdown Btn
$(document).ready(function(){
    $('.prim-btn.add-btn').click(function(){
        $(this).toggleClass('active');
        $('.dropdown-addlist').toggleClass('show');
    });
});

//Boxes Check Button Js

$(document).ready(function(){
    $('.poss-content label').click(function(){
        $(this).parents('.poss-content').parents('.poss-box').toggleClass('show-box');
    });
});



$('.caret-icon').on('click', function () {
    $('.sub-menu').slideUp();
    var togg = $(this).parent().next('.sub-menu')
    if ($(togg).css('display') == 'none') {
        togg.slideDown();
        
        $('.navLink-qa').removeClass('active-nav');
        $(this).parent().parent().addClass('active-nav')
    }else{
        togg.slideUp();
    }
});


$(".team a").click(function () {
  $(".team-menu").toggleClass("activated");
  $(".right-wrap").toggleClass("opened");
});

$(".task a").click(function () {
  $(".task-menu").toggleClass("activated");
  $(".right-wrap").toggleClass("opened");
});

$(".recent-files a").click(function () {
  $(".recent-files-menu").toggleClass("activated");
  $(".right-wrap").toggleClass("opened");
});

$(".brand-assets a").click(function () {
  $(".brand-assets-menu").toggleClass("activated");
  $(".right-wrap").toggleClass("opened");
});

$(".chat a").click(function () {
  // $(".brand-assets-menu").toggleClass("activated");
  $(".chatbox").toggleClass("opened");
});

$(".chat-header").click(function () {
  // $(".brand-assets-menu").toggleClass("activated");
  $(".chatbox").toggleClass("opened");
});
// CHARTS JS QA
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Views', 'Followers', 'Likes', 'Comments'],
        ['20 Feb', 750, 500, 400, 300],
        ['21 Feb', 750, 500, 400, 300],
        ['22 Feb', 750, 500, 400, 300],
        ['23 Feb', 1000, 900, 400, 300],
        ['24 Feb', 2100, 500, 1100, 300],
        ['25 Feb', 2100, 500, 1100, 300],
        ['26 Feb', 2100, 500, 1100, 300],

    ]);
    var options = {
        chart: {
            // title: 'Company Performance',
            // subtitle: 'Views, Followers, Likes, and Comments: 2014-2017',
        },
        colors: ['#BF161F', '#000000', '#2394AE', '#F5A41D'],
        legend: {
            position: 'bottom',
            borderRadius: '30px',
            textStyle: {
                color: '#696974',
                fontSize: '14px'
            }
        },

    };
    var chart = new google.charts.Bar(document.getElementById('site_statics_chart_qa_days'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(siteStaticsChartWeeks);
function siteStaticsChartWeeks() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Views', 'Followers', 'Likes', 'Comments'],
        ['20 Feb', 750, 500, 400, 300],
        ['21 Feb', 750, 500, 400, 300],
        ['22 Feb', 750, 500, 400, 300],
        ['23 Feb', 1000, 900, 400, 300],
        ['24 Feb', 2100, 500, 1100, 300],
        ['25 Feb', 2100, 500, 1100, 300],
        ['26 Feb', 2100, 500, 1100, 300],
    ]);
    var options = {
        colors: ['#BF161F', '#000000', '#2394AE', '#F5A41D'],
        legend: {
            position: 'bottom',
            borderRadius: '30px',
            textStyle: {
                color: '#696974',
                fontSize: '14px'
            }
        },
    };
    var chart = new google.charts.Bar(document.getElementById('siteStaticsChartWeeks'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}





google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(recogChart);
function recogChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Recognized'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);
    var options = {
        pieHole: 0.6,
        legend: 'none'
    };
    var chart = new google.visualization.PieChart(document.getElementById('recogChart'));
    chart.draw(data, options);
}



var optionsProgress = {
    chart: {
        height: 300,
        type: 'radialBar',
    },
    series: [23],
    labels: ['Recognized'],
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#F5A41D'],
    },
}
var progresChart = new ApexCharts(document.querySelector("#progresChart"), optionsProgress);
progresChart.render();








// HAMZA JS 
$(document).ready(function () {
    $('.all-skills p span').click(function () {
        $(this).parent('p').fadeOut();
    });
});





// AYUB JS 
// Banner Box Verticle Slider
$('.banner-rightbox').slick({
    vertical: true,
    autoplay: false,
    autoplaySpeed: 2000,
    //   variableWidth: true,
    //   centerMode: true,
    // centerPadding: '60px',
    infinite: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
});

// Courses Slider
$('.course-slider').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    // centerMode: true,
    // centerPadding: '0px',
});

// Instructor Box  Slider
$('.inst-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
});


// Brands Culture  Slider

var $slider = $('.bcs-main-content');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('span');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    var str= $(sliderCounter).text(currentSlide + ' / ' +slidesCount);
    $('.slide-arrows .slide-number').html( str );
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.slide-arrows .arrow-left',
    nextArrow: '.slide-arrows .arrow-right',
  });

//   Slider In Popup

    $('.modal.bcs-modal').on('shown.bs.modal', function (e) {
        $('.bcs-main-content').slick('setPosition');
    });
}

// Brand Modal Workspace Box
$(document).ready(function(){
    $('.bcs-tab-content  .wsbox').click(function(){
        $(this).toggleClass('active');
    });
});


// Notification Dropdown

function settitle(e) {
    var text = document.getElementById('select-btn');
    text.innerHTML = e.textContent
}



// Pagination
var items = $('.learn-wraper.explore .exp-wraper');
var numItems = items.length;
var perPage = 3;
items.slice(perPage).hide();
$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo; Prev",
    nextText: "Next &raquo;",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});

// function myFunction() {
//     var element = document.querySelector('.poss-content label')
//     element.classList.toggle("show-box");
//   }

 
// Campaign Date filter Dropdown
$(document).ready(function(){
    $('.filters-wraper').hide();
    $('.filter-date').click(function(){
        $('.filters-wraper').slideToggle(500);
    })
})





var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
    fileInput.value = '';
    console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
    console.log(" > " + fileInput.value)
    uploadIcon.innerHTML = 'check_circle';
    dragDropText.innerHTML = 'File Dropped Successfully!';
    document.querySelector(".label").innerHTML = ` Upload Files <i class="fa fa-download" aria-hidden="true"></i> <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
    uploadButton.innerHTML = `Upload`;
    fileName.innerHTML = fileInput.files[0].name;
    fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
    let isFileUploaded = fileInput.value;
    if(isFileUploaded != '') {
        if (fileFlag == 0) {
            fileFlag = 1;
            var width = 0;
            var id = setInterval(frame, 50);
            function frame() {
                if (width >= 390) {
                    clearInterval(id);
                    uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
                } else {
                    width += 5;
                    progressBar.style.width = width + "px";
                }
            }
        }
    } else {
        cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
    }
});

cancelAlertButton.addEventListener("click", () => {
    cannotUploadMessage.style.cssText = "display: none;";
});

if(isAdvancedUpload) {
    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
        draggableFileArea.addEventListener(evt, e => {
            e.preventDefault();
            e.stopPropagation();
        })
    );

    ["dragover", "dragenter"].forEach( evt => {
        draggableFileArea.addEventListener(evt, e => {
            e.preventDefault();
            e.stopPropagation();
            uploadIcon.innerHTML = 'file_download';
            dragDropText.innerHTML = 'Drop your file here!';
        });
    });

    draggableFileArea.addEventListener("drop", e => {
        uploadIcon.innerHTML = 'check_circle';
        dragDropText.innerHTML = 'File Dropped Successfully!';
        document.querySelector(".label").innerHTML = `or drag and drop  Upload Files <i class="fa fa-download" aria-hidden="true"></i> <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
        uploadButton.innerHTML = `Upload`;
        
        let files = e.dataTransfer.files;
        fileInput.files = files;
        console.log(files[0].name + " " + files[0].size);
        console.log(document.querySelector(".default-file-input").value);
        fileName.innerHTML = files[0].name;
        fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
        uploadedFile.style.cssText = "display: flex;";
        progressBar.style.width = 0;
        fileFlag = 0;
    });
}

removeFileButton.addEventListener("click", () => {
    uploadedFile.style.cssText = "display: none;";
    fileInput.value = '';
    uploadIcon.innerHTML = 'file_upload';
    dragDropText.innerHTML = 'or drag and drop';
    document.querySelector(".label").innerHTML = ` Upload Files <i class="fa fa-download" aria-hidden="true"></i> <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
    uploadButton.innerHTML = `Upload`;
});
// Banner Box Verticle Slider


// Campaign Box  Slider
