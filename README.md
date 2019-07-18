# The Lord of The Rings Project

This project is about visualisation of information relating to the Lord Of The Rings (lotr) books and films. This project covers character information, film information and information on the races and words in the lotr. I have used d3,dc and crossfilter libraries among others to show this information, and make it more   interactive and therefore user friendly.

## UX

The website is aimed at people various  people, of whom may have multiple interests. First there is fans of lotr  who would like to find out more information about lotr books and films, but do not wish to trawl through rows and columns of information. The idea was to create a single page website that allows a certain level of interactivity to get the viewer to be an active participant in the website. In the mock-ups I decided to create the first section of the website to have a black-background and a single image of the 'ring'. The concept behind this would be for users to be intrigued by such a minimalist introduction to the site and therefore they would want to see more.

![mock-up](C:\Users\Tom\Desktop\lord-of-the-rings-character-data\mock-up.jpg)



The users who have interest in facts and knowledge can have an in depth look at various aspects of the films or words used in the stories in a quick and simple way. if users would like to look at stats for example on film budgets and revenues they can simply look at the bar graphs. and click on the interactive parts thus showing the user information quickly.  The factions page has been included as I felt that this is an important aspect of any information data base as it gives the user a brief introduction to those races and factions that would be talked about so rather than a user seeking information from other sources and leaving the website, they can get that information direct. As a user I want to see as much information as possible and therefore the layout has been designed in such away that as much information can be taken in as quickly as possible, therefore the graphs have been made to a scale and sized in such away that four graphs can be seen at the same time. 

## Features

The nav-bar is an important feature and has been created using bootstrap. This means that the Navbar has been fixed to the top of the browsers page, thus giving access to all parts of the website at any point, through the use of anchor tags. The menu is a drop-down and so it takes up less space. 

```html
  <nav class="navbar navbar-default fixed-top">
        <div class="container-fluid">
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    Information 
  </button>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#main-header">Home</a></li>
                    <li><a href="#primary-heading-realms">Realms Data</a></li>
                    <li><a href="#character-heading">Character Data</a></li>
                    <li><a href="#film-heading">Movie Data</a></li>
                    <li><a href="#word-heading">Word Data</a></li>

                </ul>
            </div>
        </div>
    </nav>

</head>
```

 

One of the features I have included is the onclick event targeted at the ring img, the idea behind this was to was to create an initial interactive feature that would draw in the user, on the click event the words slowly fade in as they do on the movie and in the books. This code was created using JQuery.

```javascript
   $("#the-ring").click(function() {
        $("#the-ring-quote-1st-line").fadeIn(1000, function() {
            $("#the-ring-quote-2nd-line").fadeIn(1000, function() {
                $("#the-ring-quote-3rd-line").fadeIn(1000, function() {
                    $("#the-ring-quote-4th-line").fadeIn(1000)
                });
            });
        });
    });
});
```

The second set of features was to add modals targeting the images of the different races, this was done to allow more space or real-estate on the  screen by not having large elements taking up room. A Font Awesome icon (the information icon)  was also added to each of the main headings of each section, this was done for the same reason as above.

I have a full picture display background using pictures that have been sourced from the internet this adds to the sense of character of the website. The coding for this is below.

```css
.bg-realms {
    background: url(../images/elven-home.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: 1000;
    padding-bottom: 30px;
    width: 100vw;
    min-height: 100vh;
}
```

 



Features also include the graphs themselves that have been rendered using d3, dc and crossfilter. This has allowed for information to be taken from a file source, in this case a csv file and then be rendered as an svg. These allow for a lot of interaction between data therefore allowing users to click on certain graph values, these will then be highlighted in other graphs.

### Future Features

These include more button functions that allow the user to access additional information in all sections, also the use of sub-categories in the Race section that allows the user to see more detail about the races, using sub-headings in drop-down menus.

## Technologies

- JQuery  library- this allows for manipulation of the DOM speeding up the process of development, instead of using JavaScript 

- D3.js - is a JavaScript library that allows the user to manipulate svg's using HTML and CSS

- DC.js - is a library that allows you to access large datasheets and then render them using D3.js with pre-built charts

- Crossfilter - allows these charts to be interactive and dependent on each other

- JavaScript - is a programming language for HTML and with CSS is one of the main parts of the WWW

- Bootstrap 3 - this allows developers to create well organised websites that are easier to position the HTML elements. It has a number of features such as the grid-system, positioning, mobile-responsive and many more

     

## Testing

A HTML validator https://validator.w3.org/nu/#textarea has been used to validate the code.

A JavaScript validator https://jshint.com/ has been used to validate the code.

The website has been tested for responsiveness using Google Chrome Development tools. It has been accessed using a mobile phone and an Ipad to see how the browser reacts to different browser sizes and it is fully functioning (however please not that svgs and d3, dc are not designed tobe responsive or to be used on small screens). This has been achieved through the use of Bootstrap 3 classes and media queries

All graphs have been thoroughly tested for their responsiveness, if one aspect of a graph is clicked on the other graphs respond as they should. 

A bug that has been thoroughly looked at and that is seemingly unknown for the cause of is when the 'two towers' in the film section graphs is selected (clicked on), instead of just the 'two towers' data being highlighted responsively by the other graphs in the section  another value is highlighted 'the hobbit' . Any suggestions by developers would be very much appreciated the js can be found in movies.js.

The ring click-event works on multiple browsers and in different browser settings.

the faction/race list and its images work in multiple browsers and has been made responsive through the use of media-queries. 

the graphs for the movie data have been adapted using JS so that they do not bring up the information in the data that contains all both trilogies information, as i felt that this went against the point of the highlighting the individual film data.

An interesting bug was that some of the key, value pairs in the information had no information in them and therefore distorted the graphs, showing the information as a set of un-named values, this bug was overcome using js as shown in the code below.

```javascript
function gender(ndx) {
    var dim = ndx.dimension(function(d) {
        if (d.gender === '') {
            d.gender = 0;
            return null;
        }
        else {
            return d.gender;
        }
    });
```

##  

## Deployment

Website was deployed using GitHub, to do this follow these instructions

1. go to the GitHib repository  
2. under the repositories name click settings
3. go to GitHub pages (scroll down)
4. click on the drop-down menu under source and click on master branch
5. click save

## Credits

Much credit has to go to the members of slack as without their patience in answering questions i would not of been able to do some of the things i have a done.

Credit has to go to the tutor team, Niel, Haley and Nakita for there guidance in fixing bugs

The images where all located on google images, to each of these un-named artists thank you.

A big thank you has to go to the online community stackoverflow, and W3schools who provided lots of information.





