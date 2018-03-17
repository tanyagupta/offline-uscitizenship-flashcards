/* <!--<link href="/static/tgportfolio/assets/favion.ico" rel="icon" type="image/x-icon">--> */
var all_data=[];
var keys={};

var start_time = new Date();

var  intervalID;// = window.setInterval(display_time, 1000);
var times=0;



/* Fetch from our API */

/* Indexeddb functions */
var idbApp = (function() {
  'use strict';

  //check for support
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return;
  }

  var dbPromise = idb.open('civicstest', 1, function(upgradeDb) {
  switch (upgradeDb.oldVersion) {
    case 0:
    upgradeDb.createObjectStore('questions', {keyPath: 'id'});
    upgradeDb.createObjectStore('capitals', {keyPath: 'acronym'});
  }
});


  function getQuestions() {

    dbPromise.then(function(db) {
      var tx = db.transaction('questions', 'readonly');
      var store = tx.objectStore('questions');
      //console.log(store.getAll())
      return store.getAll();
    })

  }

function addQuestions(items){




const api_url = "https://script.google.com/macros/s/AKfycbwyzooED9Ob5Egct3tvFuILRxsQNUjfJeHlAk9X5HOpaML1mApk/exec";
fetch(api_url)
  .then (response => {
                        //console.log(response);
                        return response.json()
                      })  // .then(function(response){return response.json}
  .then(items => {

                  let data_mod = []
                  for (const i in items){
                    let one_data={};
                    one_data["id"]=items[i][5];
                    const qs = items[i][3].split("*");
                    one_data["question"]=qs[0];

                    one_data["is_location_dependent"]=items[i] && items[i][8] || false;
                    one_data["answer"]= items[i]["is_location_dependent"] ? "Depends on your location" : qs[qs.length-2];
                     one_data["role_name"] = (items[i] && items[i][9] && items[i][9].length>0) ? (items[i][9]) : false;

                    data_mod.push(one_data)

                  }
                var items=data_mod;

  dbPromise.then(function(db) {
  var tx = db.transaction('questions', 'readwrite');
  var store = tx.objectStore('questions');
//console.log(items)

return Promise.all(items.map(function(item) {
  //  console.log('Adding item: ', item);
    return store.add(item);
  })
).catch(function(e) {
  tx.abort();
  console.log(e);
}).then(function() {
  console.log('All items added successfully!');
});
})
})

}

/* start*/

function addCapitals(){
const api_url_caps = "https://script.google.com/macros/s/AKfycbwyzooED9Ob5Egct3tvFuILRxsQNUjfJeHlAk9X5HOpaML1mApk/exec?capital=c";
fetch(api_url_caps)
  .then (response => {
                        //console.log(response);
                        return response.json()
                      })  // .then(function(response){return response.json}
  .then(items => {

  dbPromise.then(function(db) {
  var tx = db.transaction('capitals', 'readwrite');
  var store = tx.objectStore('capitals');
  var res=[]
  for (var i in items){
  //console.log(i)
  var temp = {}
  temp[i]=items[i]
  //console.log(temp)
//    res.push(temp)  //for some reason this does not work, need to explore, probably should push state acronym as a value instead of key
   var temp=items[i]
   temp["acronym"]=i
  res.push(items[i])
  }
//console.log(res)

return Promise.all(res.map(function(item) {
    //console.log('Adding capitals: ', item);
    return store.add(item);
  })
).catch(function(e) {
  tx.abort();
  console.log(e);
}).then(function() {
  console.log('All capitals added successfully!');
});
})
})


}
/* end*/


return {
    dbPromise: (dbPromise),
     getQuestions: (getQuestions),
     addQuestions: (addQuestions),
      addCapitals: (addCapitals)
}
})();

idbApp.addQuestions()
idbApp.addCapitals()

/* Start code */
var start_html = '<ul><li>Learn the citizenship civics questions with our digital flash cards</li>'+
'<li>Hit the \"Next\" button to get a new flash card</li><li>Use left and right button to go back to previously viewed cards</li></ul>'+
'<button type=\"button\" id=\"start_page\" onclick=\"start_page()\" class=\"btn btn-primary btn-block btn btn-outline-primary\">Start</button>'

//$.get('/get_politicians?who='+keys[index]["role_name"]+'&state='+msg, function(data) { var x = JSON.parse(data); $("#answer_div").html(x["data"][0] && x["data"][0]["name"]+"<p class='small_text'> <a target='_blank' href='https://www.usa.gov/elected-officials'>More</a></p>" || "DC does not have "+keys[index]["role_name"]+" <a target='_blank' href='https://www.usa.gov/elected-officials'>More</a>")})

function show_service_list(what){

   $.get("/resources?what="+what, function(data) {
   var x = (JSON.parse(data))["data"];
   var result=[]
   for (var i in x){
      var temp=[] ;
     // temp.push('<small>'+x[i][0]+'</small>')
      if(Number(i) !==0 ){ temp.push('<small><a href="'+x[i][1]+'" target="_new">'+x[i][0]+'</a></small>') }
      else{temp.push('<small>'+x[i][1])+'</small>'}
      temp.push('<small>'+x[i][2]+'</small>')
      result.push(temp);

   }



   var html = make_table_html(result,"service_providers");
   $('#display_items').html(html);
   $('#service_providers').DataTable();



});
}

function show_video_list(what){

   $.get("/resources?what="+what, function(data) {
   var x = (JSON.parse(data))["data"];
   var result=[]
   for (var i in x){
      var temp=[] ;
     // temp.push('<small>'+x[i][0]+'</small>')
      if(Number(i) !==0 ){ temp.push('<small><a href="'+x[i][1]+'" target="_new">'+x[i][0]+'</a></small>') }
      else{temp.push('<small>'+x[i][1])+'</small>'}
      temp.push('<small>'+x[i][2]+'</small>')
      result.push(temp);

   }



   var html = make_table_html(result,"video_providers");
   $('#display_items').html(html);
   $('#video_providers').DataTable();



});
}

function show_news_list(what){

   $.get("/resources?what="+what, function(data) {
   var x = (JSON.parse(data))["data"];
   var result=[]
   for (var i in x){
      var temp=[] ;
      temp.push('<small>'+x[i][0]+'</small>')
      if(Number(i) !==0 ){ temp.push('<small><a href="'+x[i][1]+'" target="_new">link</a></small>') }
      else{temp.push('<small>'+x[i][1])+'</small>'}
      temp.push('<small>'+x[i][2]+'</small>')
      result.push(temp);

   }



   var html = make_table_html(result,"news_providers");
   $('#display_news').html(html);
   $('#news_providers').DataTable();



});
}


function start_page(){
$("#quiz_div").css({"font-size": "100%"});
intervalID = window.setInterval(display_time, 1000);
//$.get( "https://script.google.com/macros/s/AKfycbwyzooED9Ob5Egct3tvFuILRxsQNUjfJeHlAk9X5HOpaML1mApk/exec", function( data ) {

var data;
var dbPromise = idb.open('civicstest', 1, function(upgradeDb) {
switch (upgradeDb.oldVersion) {
  case 0:
  upgradeDb.createObjectStore('questions', {keyPath: 'id'});
}
});


dbPromise.then(function(db){
  var tx = db.transaction('questions', 'readwrite');
  var store = tx.objectStore('questions');
  return store.getAll();

}).then(function(data){

//(data)
 $("#pbar").show();
 $('#pbar').css({"background-color":"grey"});
 const START =0;
 //const START =18;
// const END = 2;
 const END = data.length -1;
 var questions_not_shown=0
 //("I am here")
 var the_pointers=[]
 for (var i=START+1;i<=END;i++) {
    the_pointers.push(i);
    questions_not_shown+= ","+i;
  }

sessionStorage.setItem ('questions_not_shown', questions_not_shown);

sessionStorage.setItem ('difficult',"")
sessionStorage.setItem ('difficult_ucis',"")
sessionStorage.setItem ("dif_counter","0")
sessionStorage.setItem("random_counter","0")

sessionStorage.setItem("current_display_index","0");
sessionStorage.setItem("questions_shown","");
//(data[0])
//console.log(data);
//console.log("data for html")
 for (var i in data){
   var temp={};
   //console.log(data[i])
/*
   temp["ucis_id"] = data[i][5]
   temp["id"]=i
   temp["item"] = data[i][0]
   temp["parent"] = data[i][1]
   temp["color"] = data[i][2];
   temp["ucis_id"] = data[i][5]
   temp["quiz"] = make_quiz(data[i][3]) || ""
   temp["video_id"] = data[i][4] || ""
   temp["is_location_dependent"] =(data[i] && data[i][8]) || false;

   temp["role_name"] = (data[i] && data[i][9] && data[i][9].length>0) ? (data[i][9]) : false;

   temp["capital"] = (data[i] && data[i][10])==="capital" || false;

   temp["has_children"] = data[i][3].length===0;
*/
  temp["id"]=i;
  temp["ucis_id"]=data[i]["id"];
  temp["question"]=data[i]["question"];

  temp["is_location_dependent"] =data[i]["is_location_dependent"];
  temp["answer"]= temp["is_location_dependent"] ? "depends on your location" : data[i]["answer"];
   temp["role_name"] = (data[i] && data[i]["role_name"]) ? (data[i]["role_name"]) : false;

  // temp["last_parent"] = false;
  all_data.push(temp)
  var res=[]
  for (var i in all_data){
  // res.push("Q."+all_data[i]["ucis_id"]+": "+all_data[i]["item"])
   res.push("Q."+all_data[i]["ucis_id"]+": "+all_data[i]["question"])

  }

 }

var quiz_only_data=[]
for (var i in all_data){
  //console.log(all_data[i])
  //console.log("here")

 keys[all_data[i]["id"]]=all_data[i];
// keys[all_data[i]["question"]]=all_data[i];
// keys[all_data[i]["answer"]]=all_data[i];
// keys[all_data[i]["is_location_dependent"]]=all_data[i];
 //keys[all_data[i]]["role_name"]=all_data[i];
}

function make_quiz(string){
 var data = string.split("*")
 var result = {}
 result["question"]= data[0]
   for (var i=1;i<data.length-2;i++){
  result["op"+i] = data[i]
 }
 result["answer"]= data[data.length-2] || ""
return result
}

$("#quiz_div").html("") ;
$("#time_msg").html("");

play_random();

//})
})

}


function choose_index(direction,current_counter){

  var counter_array_str = sessionStorage.getItem("questions_shown").split(",");
  counter_array_str.shift();
  var counter_array = _.map(counter_array_str, Number);
  //(counter_array)
  var index_to_show;
   var curr = Number(counter_array.indexOf(current_counter));
   var curr_arr_len = counter_array.length
   //(curr);
  // (curr_arr_len);
  var flag =""

 console.log(`curr `+ curr)
 console.log(`counter_array `+ counter_array)


  if (direction == "next")
  {
   index_to_show = curr+1< curr_arr_len ? counter_array[curr+1] : -1
   //(curr+1===curr_arr_len)
   flag = curr===curr_arr_len-2 ? true : false
  }
  else if (direction == "previous"){
   index_to_show = curr-1>=0 ? counter_array[curr-1] : -1
   flag = curr===1 ? true : false;

  }

console.log(`index_to_show `+ index_to_show)
   return gen_html(index_to_show,direction,flag);

}




function get_next_q () {
 var questions_not_shown_str = sessionStorage.getItem("questions_not_shown");
 //(questions_not_shown_str)
  var questions_not_shown = questions_not_shown_str.split(",")

  var next_index =  Math.floor(Math.random() * ((questions_not_shown.length-1)-0+1)+0) ; //this generates a random number between 0 and 99 in other words Math.floor(Math.random()*(max-min+1)+min)


  var removed = questions_not_shown.splice (next_index,1); //array.splice(index, howmany, item1, ....., itemX)
  //(all_data[next_index]["id"])


  sessionStorage.setItem("questions_not_shown", questions_not_shown.toString());



  var questions_shown = sessionStorage.getItem("questions_shown")
  sessionStorage.setItem("questions_shown",questions_shown+","+removed[0]) //array of selected indices or removed item indices
  sessionStorage.setItem("current_display_index",removed)
  //(removed)
   return removed; // is an array with one element, that is how splice works
}




function play_random(){
      var next;var cbox_html=""; var string=""
      var next

      var val = $('#dif').val() ? $('#dif').val() : "";

      var ucis_val = val ? Number(val) + 1: "";
      var dif=false;


      var curr = sessionStorage.getItem('difficult');
      var curr_ucis = sessionStorage.getItem('difficult_ucis');

      if($("#dif").prop('checked')){

         var dif = curr.length !==0 ? curr+","+val : curr+val;
      var dif_ucis = curr.length !==0 ? curr_ucis+","+ucis_val : ucis_val
         sessionStorage.setItem ('difficult',dif)  //storing current difficult question
         sessionStorage.setItem ('difficult_ucis',dif_ucis)  //storing previous difficult question
        }

       var count = Number(sessionStorage.getItem("dif_counter"))


      if(arguments.length===0){
      next = get_next_q()[0] //this will be the ucis id minus 1 since the pointers start from 0 and the ucis ids start from 1. However the pointer and the id will be the same
        if(next.length===0) {next =0;// you are done
             $(".key_div").empty(); $("#quiz_div").html("Congratulations!! You have finished the questions. Click on Home to restart");
             $("#quiz_div").css({"font-size": "150%"});
             terminate(); $("#time_msg").html(""); return;}


         var id = all_data[next]["id"]


         var difficult = $("input[type='checkbox']").val()

      }
      else{//need to fix this


       var dif = sessionStorage.getItem("difficult");

       if(count===0){

       sessionStorage.setItem("questions_not_shown",dif);
       }
       count = count+1
       sessionStorage.setItem("dif_counter",String(count))

       next = get_next_q()[0]
        if(next.length===0) {
             next =0;// you are done
             $("#quiz_div").html("complete");
             $("#home").click();
             return;
             }



      }

       var random_count = Number(sessionStorage.getItem("random_counter"));
      //(random_count)
      gen_html(next)

      if (arguments.length>0){

        $("#show_previous_single").addClass("btn btn-outline-secondary");
        $("#show_ne").addClass("btn btn-outline-secondary")
        document.getElementById("show_previous_single").disabled = true;

         $("#show_ne").addClass("btn btn-outline-secondary")
        document.getElementById("show_ne").disabled = true;
      }


      if (random_count===0)
      {
       document.getElementById("show_previous_single").disabled = true;
        document.getElementById("show_ne").disabled = true;
        $("#show_previous_single").addClass("btn btn-outline-secondary");
        $("#show_ne").addClass("btn btn-outline-secondary")
      }
      else if (random_count===1){
        document.getElementById("show_ne").disabled = true;
        $("#show_previous_single").addClass("btn btn-outline-primary");
         document.getElementById("show_previous_single").disabled = false;
         document.getElementById("show_ne").disabled = true;
          $("#show_ne").addClass("btn btn-outline-secondary");
      }
      else{
       document.getElementById("show_previous_single").disabled = false;
        document.getElementById("show_ne").disabled = true;
        $("#show_previous_single").addClass("btn btn-outline-primary");
        $("#show_ne").addClass("btn btn-outline-primary")

      }

      if(arguments.length!==0){

       $("#show_next_single").hide();
          }
      random_count=random_count+1;
      sessionStorage.setItem("random_counter",String(random_count))



}







function gen_html(index,direction,flag){

  sessionStorage.setItem("current_display_index",index)
  //var ans = keys[index]["quiz"]["answer"]
  //var q = keys[index]["quiz"]["question"]
  //var ucis_id = all_data[index]["ucis_id"]
  //var id = all_data[index]["id"];
//console.log(keys)
//console.log("keys")
  var ans = keys[index]["answer"]
  var q = keys[index]["question"]
  var ucis_id =keys[index]["id"]
  var role_name =keys[index]["role_name"]
  //var id = all_data[index]["id"];
//console.log(keys[index])


  //var show_dropdown_state = all_data[index]["is_location_dependent"]
  var show_dropdown_state = keys[index]["is_location_dependent"]




  var current_counter = index


   var pre_button = '<div class="container"><button type="button" id="show_previous_single" onclick=\'choose_index("previous",'+current_counter+')\' class="btn btn-outline-primary"><i class="fa fa-arrow-left fa-1x color-fa" aria-hidden="true"></i></button></div>';


     var ne_button =  '<div class="container"><button type="button" id="show_ne" onclick=\'choose_index("next",'+current_counter+')\' class="btn btn-outline-primary"><i class="fa fa-arrow-right fa-1x" aria-hidden="true"></i></button></div>';
      var button = '<button type="button" id="show_next_single" onclick=\'play_random()\' class="btn btn-sm btn-outline-primary">Show next</button>';
      var tough="";
      var cbox_html=""
      var dif_qs = sessionStorage.getItem ('difficult_ucis').length > 0 ? "<h5>Difficult Question Numbers</h5>"+sessionStorage.getItem ('difficult_ucis') : ""

       var text_q= "question"
       var audio_button =  '<button type="button" id="play_q" onclick=\'play_audio('+index+',1)\' class="btn btn-sm btn-outline-primary">Play audio</button>';
       var text_a="answer"
       var audio_answer_button =  '<button type="button" id="play_a" onclick=\'play_audio('+index+',2)\' class="btn btn-sm btn-outline-primary">Hear answer</button>';
      var image = '<img title="Click to flip and see question/answer" width=\"35" height=\"35\" src=\'/static/images/arrow.png\'>'
      var markup;


       var drop_html = '<p class="small_text">The answer depends on the state you reside in. Select your state</p><select id="us_states">'



       var dbPromise = idb.open('civicstest', 1, function(upgradeDb) {
       switch (upgradeDb.oldVersion) {
         case 0:
         upgradeDb.createObjectStore('capitals', {keyPath: 'acronym'});
       }
       });

         dbPromise.then(function(db) {
           var tx = db.transaction('capitals', 'readonly');
           var store = tx.objectStore('capitals');
           //console.log(store.getAll())
           return store.getAll();
         }).then(function(state_data){

        //  console.log(state_data)






       for (var i in state_data){
        // console.log(state_data[i])
         drop_html=drop_html+'<option value="'+i+'">'+state_data[i]["name"]+'</option>'

       }

       drop_html=drop_html+'</select><br><button id="submit_state">See my '+role_name+'</button>'




       var no_flip_html = '<div class="flippable flip-container container-fluid";"><div class="flippable appcon ac-university"><div class="front">'+image+' <span><p class="center_text">UCIS Q#'+ucis_id+" "+q+drop_html+'</p><div id="answer_div"></div></span>'+'</div><div class="back"><span>'+image+'</span><br><p id="ans_text" class="center_text">'+'</p><br></div>'+'</div><div>';
       var flip_html = '<div class="flippable flip-container container-fluid" ontouchstart="this.classList.toggle(\'hover\');"><div id="flippable" class="flippable appcon ac-university"><div class="front">'+image+' <span><p class="center_text">UCIS Q#'+ucis_id+" "+q+'</p></span>'+'</div><div class="back"><span>'+image+'</span><br><p id="ans_text" class="center_text">'+'</p><br></div>'+'</div><div>'



      if (show_dropdown_state){

       markup ='<div class="container">'+'<div class="row ">' +no_flip_html +'</div>';
      }
       else{

         markup ='<div class="container">'+'<div class="row ">' +flip_html +'</div>';
       }





       $("#quiz_div").html(markup);

       $("#submit_state").on("click", function(e){
      //  console.log(e)

        // alert(e.target)
        console.log($( "#us_states option:selected" ))
        var num = $( "#us_states option:selected" ).val();
      //  msg = (state_data[msg]["acronym"])
//console.log(keys[index])
        msg = state_data[num]["acronym"]
        console.log(msg)
        if(keys[index]["role_name"] !== "capital"){
  /*        const url = 'https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?who='+keys[index]["role_name"]+'&state='+msg
          fetch(url)
            .then (response => {return response.json()})
            .then(data => console.log("We have data:" + data.status))
            .catch (err => {
              console.log("===we have an error===")
              console.log(err.stack)
            })
*/
          //console.log(keys[index])
        //  console.log(msg+"  msg")
          $.get('https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?who='+keys[index]["role_name"]+'&state='+msg,
          function(data) {
          //  console.log(data);


            var x = data;
            console.log(x)
            console.log("data")
            $("#answer_div").html("<p class='small_text'>"+x["data"][0] && x["data"][0]["name"]
            +"<a target='_blank' href='https://www.usa.gov/elected-officials'><small>&nbsp;(more)</a></small></p>" || "DC does not have "+keys[index]["role_name"]
          //  +" <a target='_blank' href='https://www.usa.gov/elected-officials'>More</a>"
          )})

        }
        else if(keys[index]["role_name"] === "capital"){

         $("#answer_div").html(state_data[num]["capital"])

        }
        else{
         alert(msg);
        }



})//object store access ends here





});


       $("#audio").html(audio_button+audio_answer_button);
       $("#change_q").html(button);
       $("#pre_q").html(pre_button);
       $("#ne_q").html(ne_button);


        $("#flippable").on("click",function(){
         $("#ans_text").html(ans)
         $("#ans_text").css({direction: "ltr"})

        $(this).toggleClass("flipme"); });
        $("#show_tough").click(function(){

          })


           if (flag===true && direction ==="previous"){

   document.getElementById("show_previous_single").disabled = true;
   $("#show_previous_single").addClass("btn btn-outline-secondary")

  }
    if (flag===true && direction ==="next"){
   document.getElementById("show_ne").disabled = true;
   $("#show_ne").addClass("btn btn-outline-secondary")

  }



}



function play_audio (index,type) {
  var string;
  if (type===1){
   string = keys[index]["question"]
  }else{
    string = keys[index]["answer"]
  }

  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 0; //0 to 2
  msg.lang = 'en-US';

  msg.text = string;
  speechSynthesis.speak(msg);


  msg.addEventListener("end", function() {

   });


}



function display_time() {


  var now= new Date();

  var num = now.getMinutes();
  var ms = now-start_time;



  var days, hours, minutes, seconds, x;
  x = ms / 1000;
  seconds = Math.floor(x % 60);
  x /= 60; //means x=x/60
  minutes = Math.floor(x % 60);
  x /= 60;
  hours = Math.floor(x % 24);
  x /= 24;
  days = Math.floor(x);
  //(sessionStorage.getItem("questions_shown"))


  var q_shown = sessionStorage.getItem("questions_shown").split(",")
  if(q_shown[0].length===0){q_shown.shift()}//first array item is blank string
  var num_q_shown = Number(q_shown.length);

  var q_nshown=sessionStorage.getItem("questions_not_shown").split(",")
  if (q_nshown[0].length===0){q_nshown.shift()}
  var num_q_not_shown;
  num_q_not_shown = Number(q_nshown.length);

  var num_q_total = 100;



   document.getElementById('time_msg').innerHTML =  "Time elapsed: "+hours+" hour(s) "+minutes+" minute(s) "+seconds+" second(s) "+"("+num_q_shown+" done "+(100-num_q_shown)+" left to do)";

    var perc=Math.round((num_q_shown/num_q_total)*100);
    updateProgress(perc)




  times++



}

function terminate(){
  window.clearInterval(intervalID);
  times=0;

  document.getElementById('time_msg').innerHTML = "";

$("#pbar").hide();

   $("#entry").val('Last question');
}


function updateProgress(percentage) {
    $('#pbar_inner').css("width", percentage + "%");
    $('#pbar_text').text(percentage + "%");
}


function typeAhead(availableTags) {

    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }

    $( "#kval" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });

  }
