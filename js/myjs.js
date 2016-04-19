function search() {
    var searchTerm = $('#sear').val();
    if (searchTerm != "") {
        window.location = "https://www.google.com/#q=" + searchTerm + " site:*.rit.edu"
    } else {
        alert("Search too board plaase provide at least one term!")
    }

}

function ani(that) {
    $(that).animate({
        boxShadow: '0 0 30px #44f'
    })
}

function animateOff(that) {
    $(that).animate({
        boxShadow: '0 0 10px #000'
    })
}

function ave(ele, temp) {
    $(ele).avgrund({
        width: 380, // max is 640px
        height: 280, // max is 350px
        showClose: false, // switch to 'true' for enabling close button
        showCloseText: '', // type your text for close button
        closeByEscape: true, // enables closing popup by 'Esc'..
        closeByDocument: true, // ..and by clicking document itself
        holderClass: '', // lets you name custom class for popin holder..
        overlayClass: '', // ..and overlay block
        enableStackAnimation: false, // another animation type
        onBlurContainer: '', // enables blur filter for specified block
        openOnEvent: true, // set to 'false' to init on load
        setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
        onLoad: function(elem) {}, // set custom call before popin is inited..
        onUnload: function(elem) {}, // ..and after it was closed
        template: temp // or function (elem) { }, or $('.content')
    });


}

function feather(that) {
    document.createElement('div');
}


$(document).ready(function() {

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage'],
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['First', 'Second', 'Third'],
        navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: false,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize: false,
        sectionsColor: ['#ccc', 'rgba(4, 146, 204, 0.29)'],
        paddingTop: '0em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        autoScrolling: false,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });

    $("a[rel^='prettyPhoto']").prettyPhoto();

    $('a').click(function(event) {
        $('a').removeClass('selected');
        $(this).addClass('selected');
        event.preventDefault();
    });

    //get about 
    myXhr('get', {
        path: '/about'
    }, '#people').done(function(msg) {
        var para = document.createElement("p");
        var node = document.createTextNode(msg.description);
        para.appendChild(node);
        $("#quote").append(para);
        //console.log(msg.description);
    });

    //footer object
    myXhr('get', {
        path: '/footer'
    }, '#people').done(function(json)

        {

            $('.social').append('<h2 id = "social_title" class = "orange">' + json.social.title + '</h2>');
            $('.social').append('<hr></hr>');
            $('.social').append('<div id = "headline">' + json.social.tweet + '</div>');
            $('.social').append('<div id = "by">by:' + json.social.by + '</div>');
            $('.social').append('</br></br>');
            $('.social').append('<ul> <li><a href="' + json.social.twitter + '"><img id = "twtImg" onmouseover="ani(this)" onmouseout="animateOff(this)" src="images/twitter.png"></a></li> <li><a href="' + json.social.facebook + '"><img onmouseover="ani(this)" onmouseout="animateOff(this)" src="images/facebook.png"></a></li></ul> ');

            // $('#social-presence').append('<div id="social"><a class="facebookBtn smGlobalBtn" href="#" ></a><a class="twitterBtn smGlobalBtn" href="#" ></a></div>'),


            // title = '<h3>' + json.social.title + '</h3>';
            // tweet = '<p>' + json.social.tweet + '</br>' + json.social.by + '</br>' + json.social.twitter + '</br>' + json.social.facebook + '</p>';
            // console.log(title + tweet);
            $.each(json.quickLinks, function(key, value) {
                links = "<a class = 'text-link' href=" + value.href + ">" + value.title + "</a> </br> </br>";
                $("#links").append(links);
            });
            footer = '</br><h2 class = orange>' + json.copyright.title + '<hr></hr>' + '</h2>' + '<p>' + json.copyright.html + '</p>';
            $("#copyright").append(footer);
        });

    //get people
    myXhr('get', {
        path: '/people/'
    }, '#people').done(function(people) {
        //$('#test').append("<ul class='gallery clearfix' id = 'gallery'></ul>");
        for (cnt = 0; cnt < people.faculty.length; cnt++) {
            //faculty

            //<a href="#" data-featherlight="#app">Open element in lightbox</a>


            $('#faculty').append(
                $('<div/>')
                .addClass("box2")
                .attr('id', 'box2')
                .append('<li><a herf="#" data-featherlight="<h2>' + people.faculty[cnt].name + '</h2><p>' + people.faculty[cnt].title + '</p><p>' + people.faculty[cnt].email + '</p>" rel="prettyPhoto[ajax]"><img class = "imgfac" onmouseover="ani(this)" onmouseout="animateOff(this)" src="' + people.faculty[cnt].imagePath + '?ajax=true" width="60" height="60" alt="' + people.faculty[cnt].name + '" /></a></li>')
                //.
                //click(function(){
                //alert(this.id),
                //$(this).trigger('a')

                //})
            );

            //   var $div = $("<div>", {class: "box2"});
            // $('$div').append('<li><a href="'+people.faculty[cnt].imagePath+'" rel="prettyPhoto[ajax]"><img src="'+people.faculty[cnt].imagePath+'?ajax=true" width="60" height="60" alt="'+people.faculty[cnt].name+'" /></a></li>');
            // $('#faculty').append($div);
        }
        //staff
        for (cnt = 0; cnt < people.staff.length; cnt++) {
            $('#staff').append(
                $('<div/>')
                .addClass("box2")
                .append('<li><a herf="#" data-featherlight="<h2>' + people.staff[cnt].name + '</h2><p>' + people.staff[cnt].title + '</p><p>' + people.staff[cnt].email + '</p>" rel="prettyPhoto[ajax]"><img class = "imgfac" onmouseover="ani(this)" onmouseout="animateOff(this)" src="' + people.staff[cnt].imagePath + '?ajax=true" width="60" height="60" alt="' + people.staff[cnt].name + '" /></a></li>')
            );
        }
        $.each(people.faculty, function(key, value) {
            value.username;
            value.name;
            value.tagline
            value.imagePath;
            value.title;
            value.website;
            value.office;
            value.phone;
            value.email;
            value.twitter;
            value.facebook;
        });
        $.each(people.staff, function(key, value) {
            value.username;
            value.name;
            value.tagline
            value.imagePath;
            value.title;
            value.website;
            value.office;
            value.phone;
            value.email;
            value.twitter;
            value.facebook;
        });
    });

    //get research
    myXhr('get', {
        path: '/research/'
    }, '#people').done(function(research) {
        //byInterestArea
        $.each(research.byInterestArea, function(key, val) {
            $('#reasearchTag').append('<li class = "col-md-2 col-xs-4 research-item" onmouseover="ani(this)" onmouseout="animateOff(this)"> <a href="#" data-featherlight="<h3>' + val.areaName + '</h3> <p>' + val.citations + '</p>"> <div class = "content"> <h5 class = "reasearchh5">' + val.areaName + '</br> <li class="fa fa-gg fa-2x nineRemove"> </li> </h5> </div> </a> </li>');
        });
        $.each(research.byFaculty, function(key, val) {
            $('#reasearchTag1').append('<li class = "col-md-2 col-xs-4 research-item" onmouseover="ani(this)" onmouseout="animateOff(this)"> <a href="#" data-featherlight="<h3>' + val.facultyName + '</h3> <p>' + val.citations + '</p>"> <div class = "content"> <h5 class = "reasearchh5">' + val.facultyName + '</br> <li class="fa fa-gg fa-2x nineRemove"> </li> </h5> </div> </a> </li>');
        });
        var colors = ["red", "green", "blue"];
        var rand = Math.floor(Math.random() * colors.length);
        $('.research-item').css("background-color", colors[rand]);


    });

    //get degrees 
    myXhr('get', {
        path: '/degrees/'
    }, '#people').done(function(degreeJson) {
        //undergraduates
        $('#ugrad').append('<div id = "accordion" class = "accordion"> </div>');

        $.each(degreeJson.undergraduate, function(key, value) {
            $('#accordion').append('<h3>' + value.title + '</h3');
            $('#accordion').append('<div href="#" data-featherlight="<h3>Concentrations</h3><p>' + value.concentrations + '</br></p>"> ' + value.description + '</div>');
            $('#ui-id-2').append('<div> ' + value.concentrations[key] + '</div>');

            //value.degreeName +'</br>' + value.title +'</br>' + value.description)
        });

        // 	   <div id="accordion">
        //   <h3>First header</h3>
        //   <div>First content panel</div>
        //   <h3>Second header</h3>
        //   <div>Second content panel</div>
        // </div>

        // $('#ugrad').append(value.degreeName +'</br>' + value.title +'</br>' + value.description);
        // //console.log(value.degreeName + value.title + value.description);
        // $.each(value.concentrations, function(key, value) {
        // 	//console.log(value);
        // });

        //Graduates
        $("#accordion").accordion();
        $('#grad').append('<div id = "accordion1" class = "accordion"> </div>');
        $.each(degreeJson.graduate, function(key, value) {
            $('#accordion1').append('<h3>' + value.title + '</h3');
            $('#accordion1').append('<div href="#" data-featherlight="<h3>Concentrations</h3><p>' + value.concentrations + '</br></p>" >' + value.description + '</div>');
            $.each(value.concentrations, function(key, value) {
                //$('#minor').append('</br>' + value);
            });
        });
        $("#accordion1").accordion();

    });

    //get minors 
    myXhr('get', {
        path: '/minors/'
    }, '#people').done(function(minors) {
        $('#min').append('<div id = "accordionMinor" class = "accordion"> </div>');
        $.each(minors, function(key, value) {
            $('#accordionMinor').append('<h3>' + value.title + '</h3');
            $('#accordionMinor').append('<div href="#" data-featherlight="<h3>Courses:</h3><p>' + value.courses + '</br></p><p>' + value.note + '</p>" > ' + value.description + '</div>');
            //$('#min').append(value);
        });
        $("#accordionMinor").accordion();

        //});

    });


    //get resources
    myXhr('get', {
        path: '/resources/'
    }, '#people').done(function(resources) {
        $('#tit').append('<h2 class = "orange txtCentre">' + resources.title + '</h2>');
        $('#tit').append('<h4 class = "orange txtCentre">' + resources.subTitle + '</h4>');


        $('#row1').append('<div class="flip"> <div class="front"> <img src="images/resources.jpg" alt="" /></div> <div class="back"><h3>' + resources.studentServices.title + '</h3><p>' + resources.studentServices.academicAdvisors.description + '</p></div> </div>');
        $('#row2').append('<div class="flip"> <div class="front"> <img src="images/abroad.jpg" alt="" /></div> <div class="back" style="background-color:red;"><h3>' + resources.studyAbroad.title + '</h3><p>' + resources.studyAbroad.description + '</p></div> </div>');
        $('#row3').append('<div class="flip"> <div class="front"> <img src="images/amb.jpg" alt="" /></div> <div class="back"><h3>' + resources.studentAmbassadors.title + '</h3><img src = ' + resources.studentAmbassadors.ambassadorsImageSource + '></img></div> </div>');
        $('#row1').append('<div class="flip"> <div class="front"> <img src="images/coop.jpg" alt="" /></div> <div class="back" style="background-color:green;"><p>' + resources.coopEnrollment.title + '</br>' + resources.coopEnrollment.enrollmentInformationContent[0].description + '</></div> </div>');
        $('#row2').append('<div class="flip"> <div class="front"> <img src="images/form.png" alt="" /></div> <div class="back" style="background-color:purple;"><h4><a href="' + resources.forms.graduateForms[0].href + '">' + resources.forms.graduateForms[0].formName + '</a><a href="' + resources.forms.graduateForms[1].href + '">' + resources.forms.graduateForms[1].formName + '</a><a href="' + resources.forms.graduateForms[2].href + '">' + resources.forms.graduateForms[2].formName + '</a><a href="' + resources.forms.graduateForms[3].href + '">' + resources.forms.graduateForms[3].formName + '</a><a href="' + resources.forms.graduateForms[4].href + '">' + resources.forms.graduateForms[4].formName + '</a><a href="' + resources.forms.graduateForms[5].href + '">' + resources.forms.graduateForms[5].formName + '</a></h4></div> </div>');
        $('#row3').append('<div class="flip"> <div class="front"> <img src="images/lab.jpg" alt="" /></div> <div class="back" style="background-color:green;"><h4>' + resources.tutorsAndLabInformation.title + '</br>' + resources.tutorsAndLabInformation.description + '</br>' + '<a href="' + resources.tutorsAndLabInformation.tutoringLabHoursLink + '">Hours and More</a></h4></div> </div>');
        $(function() {
            $(".flip").flip({
                trigger: 'hover',
                axis: 'x'
            });
        });

    });

    //get employment
    myXhr('get', {
        path: '/employment/'
    }, '#people').done(function(employement) {
        $('#app').append('<div id="Career_info">');
        $('#app').append('<div class="heading" id = "emp">');
        $('#emp').append('<h2 class = "orange txtCentre">' + employement.introduction.title + '</h2>');
        $('#emp').append('<div class="row stats-content" id = "q">');
        $.each(employement.introduction.content, function(key, value) {
            $('#q').append('<h4 class="orange txtCentre" >' + value.title + '</h4> <hr>');
            $('#q').append('<p>' + value.description + '</p><br>');
        });

        for (cnt = 0; cnt < employement.degreeStatistics.statistics.length; cnt++) {

            console.log(employement.degreeStatistics.statistics[0].value);
            console.log(employement.degreeStatistics.statistics[0].description);
            console.log(employement.employers.title);
            console.log(employement.careers.careerNames[0]);
        }

        $('#q').append('<div class="row" id = "statRow">');
        $('#app').append('<br><ul class="highlights row"><li class="row E-item"><span class="emp"><h4 class = "orange txtCentre">' + employement.employers.title + '</h4></span><hr><h5 class="employer-name">' + employement.employers.employerNames[0] + '</h5><h5 class="employer-name">' + employement.employers.employerNames[1] + '</h5><h5 class="employer-name">' + employement.employers.employerNames[2] + '</h5><h5 class="employer-name">' + employement.employers.employerNames[3] + '</h5><h5 class="employer-name">' + employement.employers.employerNames[4] + '</h5><h5 class="employer-name">' + employement.employers.employerNames[6] + '</h5> </li><li class="row E-item"><span class="emp"><h4 class = "orange txtCentre">' + employement.careers.title + '</h4></span><hr><h5 class="employer-name">' + employement.careers.careerNames[0] + '</h5><h5 class="employer-name">' + employement.careers.careerNames[1] + '</h5><h5 class="employer-name">' + employement.careers.careerNames[2] + '</h5><h5 class="employer-name">' + employement.careers.careerNames[3] + '</h5><h5 class="employer-name">' + employement.careers.careerNames[4] + '</h5><h5 class="employer-name">' + employement.careers.careerNames[5] + '</h5></li>*Employers/Careers are randomly pulled from our recent graduates</ul>');

        $('#q').append('<div class="col-md-3 col-sm-12 col-xs-12 stats-item minor-item" id = "Box1"> <h2 class="stats-num">' + employement.degreeStatistics.statistics[0].value + '</h2><h6 class="st_num_foot">' + employement.degreeStatistics.statistics[0].description + '</h6></div>');
        $('#q').append('<div class="col-md-3 col-sm-12 col-xs-12 stats-item minor-item" id = "Box2"><h2 class="stats-num">' + employement.degreeStatistics.statistics[1].value + '</h2><h6 class="st_num_foot">' + employement.degreeStatistics.statistics[1].description + '</h6></div>');
        $('#q').append('<div class="col-md-3 col-sm-12 col-xs-12 stats-item minor-item" id = "Box3"><h2 class="stats-num">' + employement.degreeStatistics.statistics[2].value + '</h2><h6 class="st_num_foot">' + employement.degreeStatistics.statistics[2].description + '</h6></div>');
        $('#q').append('<div class="stats-item col-md-3 col-sm-12 col-xs-12 minor-item " id = "Box4"><h2 class="stats-num">' + employement.degreeStatistics.statistics[3].value + '</h2><h6 class="st_num_foot">' + employement.degreeStatistics.statistics[3].description + '</h6></div>');



        $.each(employement, function(key, value) {

            console.log(value.introduction,
                value.title,
                value.description,
                value.note);
            $.each(value.courses, function(key, value) {
                console.log(value);
            });

        })

        //$('#coop').append('<a href="http://www.example.com" data-featherlight="iframe">Open example.com in an iframe</a>');
        //$('#coop').append('<div id = "tablecoop" </div>');
        // $('#coop').append('<aside id="default-popup" id = "pop" class="avgrund-popup"> </aside>');
        //$('#coop').append('<a href="#" data-featherlight="#tablecoop">Open element in lightbox</a>');
        $(employement.coopTable.coopInformation).each(function(index, element) {
            //console.log("q");
            //	$(employement.coopTable).each(function(index, element){

            $('#pop').append('<tr><td> ' + element.employer + ' </td> <td> ' + element.degree + ' </td> <td> ' + element.city + ' </td> <td> ' + element.term + ' </td></tr>');

        })
        $('#coop').append('<a href="#" id="show" class="button left">Show it</a>');
        //$("#tablecoop").css("visibility", "hidden");
        // $("#tablecoop").hide();

        $(function() {
            $('#show').avgrund({
                template: '<p>So implement your design and place content here! If you want to close modal, please hit "Esc", click somewhere on the screen or use special button.</p>' +
                    '<div>' +
                    '<a href="http://github.com/voronianski/jquery.avgrund.js" target="_blank" class="github">Avgrund on Github</a>' +
                    '<a href="http://twitter.com/voronianski" target="_blank" class="twitter">Twitter</a>' +
                    '<a href="http://dribbble.com/voronianski" target="_blank" class="dribble">Dribbble</a>' +
                    '</div>'
            });
        });

    });




    //      <div id="Career_info">
    //                    	
    // <div class="row stats-content">
    // 		<h4 class="orange">Employment</h4>
    //   							<hr>
    //   <p>IST graduates are heavily sought after by the professional tech industry. This is by design. We’ve been building relationships with employers for over 2 decades by continuously producing high caliber graduates. RIT’s reputation extends beyond Rochester, with <span class="orange">95% of our students landing a job within the first 6 months after graduation.</span> It’s not uncommon for students to have offers before they even leave RIT.</p>
    //   <br>
    //  <div class="row" id = "statRow">
    //    <div class="col-md-3 col-sm-12 col-xs-12 stats-item minor-item" id = "Box1">
    //      <h2 class="stats-num">$80,000</h2>
    //      <h6 class="st_num_foot">Average salary with one of our degrees (glassdoor.com)</h6>
    //    </div>
    //     <div class="col-md-3 col-sm-12 col-xs-12 stats-item minor-item" id = "Box2">
    //       <h2 class="stats-num">36th</h2>
    //       <h6 class="st_num_foot">Rank among the Top 50 Best Computing Colleges in the U.S. (businessinsider.com)</h6>
    //     </div>
    //     <div class="col-md-3 col-sm-12 col-xs-12 stats-item minor-item" id = "Box3">
    //       <h2 class="stats-num">35%</h2>
    //       <h6 class="st_num_foot">Percent of all of the web traffic used by mobile devices in the U.S. (thenextweb.com)</h6>
    //     </div>
    //     <div class="stats-item col-md-3 col-sm-12 col-xs-12 minor-item " id = "Box4">
    //       <h2 class="stats-num">1.11 Billion GB</h2>
    //       <h6 class="st_num_foot">Information in the form of internet traffic in 24 hours (mbaonline.com)</h6>
    //     </div>
    //     <br>
    //   </div>

    //   <br>
    //   <h4 class="orange">Cooperative Education</h4>
    //   <hr>
    //   <p>Cooperative education experiences, or co-ops, are an opportunity for students to build on their classroom skills in a real world environment. Co-ops are more than just an internship. Students get paid to work alongside industry professionals in leading tech companies, learning on the job and assisting with actual company projects. All undergraduate students are required to take 2 co-ops prior to graduation. Students typically take a co-op during their sophomore or junior year. For more information about co-ops, including course prerequisites and how to enroll in a co-op,<span class="orange"> please refer to our<a href="#ResourcesSection"> resources</a> page. </span></p>
    // </div>



    //       <ul class="highlights row">
    //               <li class="row E-item">

    //                   <span class="emp"><h4>Employers</h4></span>
    //                   <hr>
    //                     <h5 class="employer-name">Studio LLC</h5><h5 class="employer-name">T-Mark International</h5><h5 class="employer-name">Argus Information and Advisory Services</h5><h5 class="employer-name">Gross Automation</h5><h5 class="employer-name">Patch.com</h5><h5 class="employer-name">Agrez Consulting Inc.</h5>              </li>
    //               <li class="row E-item">
    //                   <span class="emp"><h4>Careers</h4></span>
    //                   <hr>
    //                     <h5 class="employer-name">Front End Developer</h5><h5 class="employer-name">Assistant Database Consultant</h5><h5 class="employer-name">Malware / Chat Online Support</h5><h5 class="employer-name">Technical Solutions Engineer</h5><h5 class="employer-name">Senior Web Programmer</h5><h5 class="employer-name">Velocity Software Engineer</h5>              </li>*Employers/Careers are randomly pulled from our recent graduates
    //         </ul>
    // </div>
    //                         <!-- <div id = "map">
    //                    		<iframe src="http://ist.rit.edu/api/map/">
    // 			  <p>Your browser does not support iframes.</p>
    // 			</iframe>
    //                    </div> -->
    //                    <!-- <div id="accordion">
    // 		  <h3>First header</h3>
    // 		  <div>First content panel</div>
    // 		  <h3>Second header</h3>
    // 		  <div>Second content panel</div>
    // 		</div> -->




    //get map
    // $.ajax({
    //     type: 'get',
    //     url: 'proxy.php',
    //     cache: false,
    //     data: {
    //         path:'/map?key=AIzaSyAI5Cz8sS80AOYNwAfCVjnMWH1G3D_ei4U/'
    //     },
    //     dataType: 'html',
    //     success: function(Map) {
    //         $(".intro").html(Map);
    //         //console.log(msg.description);
    //     },
    //     error: function(err) {
    //        throw err;
    //     }
    // });

    //get contact form
    $.ajax({
        type: 'get',
        url: 'proxy.php',
        cache: false,
        data: {
            path: '/contactForm'
        },
        dataType: 'html',
        success: function(contactForm) {
            //console.log(contactForm);
            $("#contact").html(contactForm);
        },
        error: function(err) {
            throw err;
        }
    });

    //get news
    myXhr('get', {
        path: '/news/'
    }, '#people').done(function(news) {
        $('#contact').append('<div id = "news" class = ""></div>');

        $('#news').append('<a href = # data-featherlight="<h3>News</h3><p>' + news.year[1].date + '</br> <p> ' + news.year[1].description + '</p></p>" >News</a>');

    });



    /////////////////////////////////
    //utilities
    //data should look like {path:}
    //getorPost, data, idforSpinner)
    function myXhr(t, d, idForSpinner) {
        return $.ajax({
                type: t,
                cache: false,
                async: true,
                url: 'proxy.php',
                data: d,
                dataType: 'json',
                beforeSend: function() {
                    $(idForSpinner).append('<img src = "gears.gif" classs = "spin"/>');
                }
            }).always(function() {
                //kill spinner
                $(idForSpinner).find('.spin').fadeOut(2000, function() {
                    $(this).remove()
                });
            })
            .fail(function() {
                //handle failures
            });
    }

    //left nav hide and show the title. 
    $("#testappend").hover(function() {
        $("#navspan").append($("<span> Home</span>"));
        $("#newsspan").append($("<span> News</span>"));
        $("#contactspan").append($("<span> Contact</span>"));
        $("#applyspan").append($("<span> Apply</span>"));
        //$("#navspan").append( $("<span id = "navspan">Navigation</span>") );
    }, function() {
        $("#navspan").find("span:last").remove();
        $("#newsspan").find("span:last").remove();
        $("#contactspan").find("span:last").remove();
        $("#applyspan").find("span:last").remove();
    });



    //iframe for maps 
    //   $('<iframe>', {
    //   	width="600",
    // height="450",
    // frameborder="0" style="border:0"
    // src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB8Ry0hOMPT4r8FPxu_59krIC8n3wKMBFA
    // 						&q=Space+Needle,Seattle+WA'
    //    }).appendTo('#map');




});