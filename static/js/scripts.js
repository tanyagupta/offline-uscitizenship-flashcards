/* <!--<link href="/static/tgportfolio/assets/favion.ico" rel="icon" type="image/x-icon">--> */
var all_data=[];
var keys={};

var start_time = new Date();

var  intervalID;// = window.setInterval(display_time, 1000);
var times=0;

const START =0;
const END = 99;
var questions_not_shown=0
var the_pointers=[]
for (var i=START+1;i<=END;i++) {
   the_pointers.push(i);
   questions_not_shown+= ","+i;
 }

 sessionStorage.setItem ('all_questions', questions_not_shown);
 sessionStorage.setItem ('questions_not_shown', questions_not_shown);
 //console.log(sessionStorage.getItem ('questions_not_shown'))

 sessionStorage.setItem("random_counter","0")

 sessionStorage.setItem("current_display_index","0");
 sessionStorage.setItem("questions_shown","");


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


function get_next(){
$("#answer").html("")

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



 for (var i in data){
   var temp={};
  temp["id"]=i;
  temp["ucis_id"]=data[i]["id"];
  temp["question"]=data[i]["question"];

  temp["is_location_dependent"] =data[i]["is_location_dependent"];
  temp["answer"]= temp["is_location_dependent"] ? "depends on your location" : data[i]["answer"];
   temp["role_name"] = (data[i] && data[i]["role_name"]) ? (data[i]["role_name"]) : false;

  all_data.push(temp)

 }
//console.log(all_data)
var quiz_only_data=[]
for (var i in all_data){

 keys[all_data[i]["id"]]=all_data[i];
}


  gen_html()

//})
})

}


function get_previous(){
  var all_questions = sessionStorage.getItem("all_questions").split(",")
  var index = Number(sessionStorage.getItem("gone"))
  get_next(all_questions[index-1])


}

function choose_index(direction,current_counter){

  var current_counter = sessionStorage.getItem("current_display_index");


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
  //console.log(questions_shown)
  //console.log(removed)
   return removed; // is an array with one element, that is how splice works
}




function play_random(){

/*
      var next;var cbox_html=""; var string=""
      var next
      var dif=false;


       var count = Number(sessionStorage.getItem("dif_counter"))

      if(arguments.length===0){
      next = get_next_q()[0] //this will be the ucis id minus 1 since the pointers start from 0 and the ucis ids start from 1. However the pointer and the id will be the same




        if(next.length===0) {
              next =0;// you are done
             $(".key_div").empty(); $("#quiz_div").html("Congratulations!! You have finished the questions. Click on Home to restart");

             return;
           }
         var id = all_data[next]["id"]
      }
      else{
        var dif = sessionStorage.getItem("difficult");
       if(count===0){
       sessionStorage.setItem("questions_not_shown",dif);
       }
       count = count+1



       next = get_next_q()[0]


        if(next.length===0) {
             next =0;// you are done
             $("#quiz_div").html("complete");
             $("#home").click();
             return;
             }



      }

       var random_count = Number(sessionStorage.getItem("random_counter"));
*/

/*
      random_count=random_count+1;
      sessionStorage.setItem("random_counter",String(random_count))

*/

}







function gen_html(index,direction,flag){

 var vals = sessionStorage.getItem("questions_not_shown").split(",")
//console.log(vals)
 vals.shift();
var gone =vals[0]
 sessionStorage.setItem("gone",gone)

 sessionStorage.setItem("questions_not_shown",vals.toString())

 index=gone

  var ans = keys[index]["answer"]
  var q = keys[index]["question"]
  var ucis_id =keys[index]["id"]
  var role_name =keys[index]["role_name"]
  var show_dropdown_state = keys[index]["is_location_dependent"]
  var current_counter = index
  document.getElementById("question").innerHTML = "Question: "+ucis_id+" "+q


  $( "#show-answer" ).click(function() {
    $("#answer").html(ans)
  });

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

});

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



  var q_shown = sessionStorage.getItem("questions_shown").split(",")
  if(q_shown[0].length===0){q_shown.shift()}//first array item is blank string
  var num_q_shown = Number(q_shown.length);

  var q_nshown=sessionStorage.getItem("questions_not_shown").split(",")
  if (q_nshown[0].length===0){q_nshown.shift()}
  var num_q_not_shown;
  num_q_not_shown = Number(q_nshown.length);

  var num_q_total = 100;
  times++

}
