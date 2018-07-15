 $(document).ready(function(){
    var projectdetails = [
        {
            name:       'WEbRTC Video-Calling',
            description:'A peer-to-peer web-based video calling application built entirely using WebRTC and Node.js.',
            url:        'video-calling.html'
        },
        {
            name:        'HOXIFY-Hoax if why?',
            description: 'Android application made for finding the news whether it is Hoax/fake or not built using Android studio,Bootstrap and php.',
            url:          'hoaxify.html' 
        },
        {
            name :        'Snow-world',
            description:  'A simple web based game that can be played using Keyboard arrow for the character motion build using JavaScript(phaser) and mongoDb for Teknack 2018',
            url:           'snow-world.html'
        },
        {
            name:         'LT-Status',
            description:  'A website for local Tain user for checking the crowd of each compartment and Move to appropriate Boogie for their convieance build uisng HTML/CSS and php',
            url:          'ltstatus.html'
        },
        {
            name:          'Grammar Development',
            description:   'A simple web application to lear Garmmar in most interactive and fun way, build using Bootstrap, Javascript, Jquery and Php',
            url:           'grammar.html'
        }];

   for (var moreinfo of projectdetails){
       var div =` 
                <div class="col l4 m6 s12">
                <div class="card white">
                    <div class="card-content" style="height:200px">
                        <span class="card-title">${moreinfo.name}</span>
                        <p style="text-align: justify; text-justify: inter-word;">${moreinfo.description}</p>
                    </div>
                    <div class="card-action">
                        <center><a href="${moreinfo.url}" class="btn-flat waves-effect light-green darken-4 white-text">View More</a><center>
                    </div>
                </div>
            </div>
            `;

            $('#project-list').append(div);
   }     
        
    $('.sidenav').sidenav({draggable:true});


});



