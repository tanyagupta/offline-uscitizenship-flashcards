/* <!--<link href="/static/tgportfolio/assets/favion.ico" rel="icon" type="image/x-icon">--> */
const GLOBALS = {
  all_data:[],
  all_capitals:[],
  dropdownhtml:"",
  num_questions:0,
  seq:[],
  all_politicians:{},
  SequenceController : function (sequence) {

    var outside = {}
    let current =0;

    function get_next () {
      current ++;
      if (current > (sequence.length -1))
        current = sequence.length
      return sequence[current]

    }
    function get_previous () {
      current --;
      if (current <0)
        current =0; // no more prevs
      return sequence[current]

    }
    function get_current () {

      return sequence[current]

    }
    outside['next'] = get_next;
    outside['prev'] = get_previous;
    outside['current'] = get_current;
    return outside
  }


}



var idb =

function(){

   'use strict';

   //check for support
   if (!('indexedDB' in window)) {
     console.log('This browser doesn\'t support IndexedDB');
     return;
   }

   var dbPromise = idb.open('civicstest', 1, function(upgradeDb) {

     switch (upgradeDb.oldVersion) {
     case 0:

     if (!upgradeDb.objectStoreNames.contains('questions')) {
       upgradeDb.createObjectStore('questions', {keyPath: 'id'});
       addQuestions()

     }
     if (!upgradeDb.objectStoreNames.contains('capitals')) {
       upgradeDb.createObjectStore('capitals', {keyPath: 'acronym'});
       addCapitals()
      }
      if (!upgradeDb.objectStoreNames.contains('politicians')) {
       upgradeDb.createObjectStore('politicians', {autoIncrement:true});
       addPoliticians()
      }




   }
 });


   function getQuestions() {
    return dbPromise.then(function(db) {
      var tx = db.transaction('questions', 'readonly');
      var store = tx.objectStore('questions');
      return store.getAll();
    });


   }

      function getPoliticians() {
    return dbPromise.then(function(db) {
      var tx = db.transaction('politicians', 'readonly');
      var store = tx.objectStore('politicians');
      return store.getAll();
    });


   }

   function addPoliticians(){
    const api_url = "https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?politicians=a"  ;
    fetch(api_url)
             .then (response => {

                                   return response.json()
                                 })  // .then(function(response){return response.json}
             .then(items => {

                             let data_mod = []

                            items=items.data

                             for (let i in items)
                             {

                               let one_data={};
                               one_data["role"]= items[i][0]==='Governors' ? 'governor' : items[i][0] ;
                               one_data["state"]=items[i][1];
                               one_data["name"]=items[i][2];
                               data_mod.push(one_data)

                             }



             dbPromise.then(function(db)
             {

                   var tx = db.transaction('politicians', 'readwrite');
                   var store = tx.objectStore('politicians');



                 return Promise.all(data_mod.map(function(item) {
                     return store.add(item);
                   })
                 ).catch(function(e) {
                   tx.abort();
                   console.log(e);
                 }).then(function() {
                   console.log('All politicians added successfully!');
                 });


           });

         });



   }


   function addQuestions(items){
           const api_url = "https://script.google.com/macros/s/AKfycbwyzooED9Ob5Egct3tvFuILRxsQNUjfJeHlAk9X5HOpaML1mApk/exec";
           fetch(api_url)
             .then (response => {

                                   return response.json()
                                 })  // .then(function(response){return response.json}
             .then(items => {

                             let data_mod = []

                             for (const i in items)
                             {
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


             dbPromise.then(function(db)
             {

                   var tx = db.transaction('questions', 'readwrite');
                   var store = tx.objectStore('questions');


                 return Promise.all(items.map(function(item) {

                     return store.add(item);
                   })
                 ).catch(function(e) {
                   tx.abort();
                   console.log(e);
                 }).then(function() {
                   console.log('All questions added successfully!');
                 });


           });

         });
         }

         function getCapitals(){
            return dbPromise.then(function(db) {
            var tx = db.transaction('capitals', 'readonly');
            var store = tx.objectStore('capitals');
            return store.getAll()

    });


         }

         function getCapitalsByKey(){
            return dbPromise.then(function(db) {
            var tx = db.transaction('capitals', 'readonly');
            var store = tx.objectStore('capitals');
//            return store.getAll()
            return store.getAll().then(function(data){
               let caps ={}
                for (let i in data){

                    caps[data[i]["acronym"]]=data[i]

                }

                return caps
            })

    });


         }


         function addCapitals(){
         const api_url_caps = "https://script.google.com/macros/s/AKfycbwyzooED9Ob5Egct3tvFuILRxsQNUjfJeHlAk9X5HOpaML1mApk/exec?capital=c";
         fetch(api_url_caps)
           .then (response => {

                                 return response.json()
                               })  // .then(function(response){return response.json}
           .then(items => {

           dbPromise.then(function(db) {
           var tx = db.transaction('capitals', 'readwrite');
           var store = tx.objectStore('capitals');

           GLOBALS.all_capitals=items;

           var res =[]
            for (let i in items){
                var temp =items[i]
                temp.acronym = i
                res.push(items[i])
            }




         return Promise.all(res.map(function(item) {

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




 /* start*/


 /* end*/


 return {
     dbPromise: (dbPromise),
      getQuestions: (getQuestions),
      addQuestions: (addQuestions),
       addCapitals: (addCapitals),
        addPoliticians: (addPoliticians),
        getPoliticians: (getPoliticians),
        getCapitals: (getCapitals),
        getCapitalsByKey: (getCapitalsByKey)

     }



}()

$("#start").prop("disabled",false);
 $("#get_previous").prop("disabled",true);
$("#show_answer").prop("disabled",true);
$("#get_next").prop("disabled",true);

function get_politician_name(){
    idb.getCapitalsByKey().then(function(data){

    let state =  $( "#us_states" ).val()
    const q =  ($( "#question" ).text()).substring(5,9).trim();
    var role;

    switch(q) {
    case "Q#20":
       role="senator"
        break;
    case "Q#23":
        role="representative"
        break;
    case "Q#43":
        role="governor"
        break;
     case "Q#44":
        role="capital"
        break;
    }

    state=state.trim();

    const code = role+"_"+state;

    var html=""
     var audio =  '&nbsp;<img onclick="play_audio(3)" class="audio_icon" alt="audio" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVDhPldIxS4JRGMXxJ6s5oyloTGjQycFJWp2iICgkclCEphZBBHFpaPArNPYF2hpqjpaI1mgKERoqioIgqv9zn3vjIjfJAz8894Wj76vKmJQwb3WyrOETDXeyLGDR6t/RT3zDN/b0gs8OnrHrToks4wE6jMcz/rWCJ2y5E6mh7d0iDOPxFfpWZR0vyOrhC/EgFsYrGCLc8gX2taRGQfzMdVxalS6OtaRGQTxexcCqNHGmJTUK4nEPp1blEEdaPpAaqjDexDvKyEC/2Cokh6J3jtT4BBtWpYM7hJ/vN3O4wehYM4sDvKKgF1JZwj1Gxy1cI+9OY6Lv/Ihtd7JMef+K/oOmraYi8gMNVlYpGeXoYQAAAABJRU5ErkJggg==">'

    if(GLOBALS.all_politicians && GLOBALS.all_politicians[code] && role !=="capital"){
    //&& GLOBALS.all_politicians[code][0]["name"]){

     html = "<p>The "+role+" of "+data[state]["name"]+" is "+GLOBALS.all_politicians[code][0]["name"]+" *<a target='_blank' href='https://www.usa.gov/elected-officials'>more</a></p>"
     html=html+audio
    }
    else if (role === "capital" &&  data[state] && data[state]["capital"]){
      html = data[state]["capital"]
      html = html+audio
    }

    else{
     html = state+" does not have a "+role
    html = html+audio
    }

    $("#answer_text").html(html)
    return html
    })

}








function start(){


    $("#answer").hide()

    idb.getQuestions().then(function(data)
    {
        GLOBALS.num_questions = data.length
        for (var i in data)
        {
          var temp={};
          temp["id"]=i;
          temp["ucis_id"]=data[i]["id"];
          temp["question"]=data[i]["question"];
          temp["is_location_dependent"] =data[i]["is_location_dependent"];
          temp["answer"]= temp["is_location_dependent"] ? "depends on your location" : data[i]["answer"];
           temp["role_name"] = (data[i] && data[i]["role_name"]) ? (data[i]["role_name"]) : false;
          GLOBALS.all_data.push(temp)
        }
        var quiz_only_data=[]
        GLOBALS.seq = GLOBALS.SequenceController (GLOBALS.all_data);
        return display_elems(GLOBALS.seq.current())
    })

     idb.getPoliticians().then(function(data)
    {

        for (var i in data)
        {

          GLOBALS.all_politicians[data[i]["role"].toLowerCase()+"_"+data[i]["state"]]=[data[i]]



        }



    })




 $("#get_previous").prop("disabled",false);
$("#show_answer").prop("disabled",false);
$("#get_next").prop("disabled",false);

}


function getcurrent(){
  return  display_elems(GLOBALS.seq.current())

}

function getprevious(){
  return  display_elems(GLOBALS.seq.prev())
}

function getnext(){
  return  display_elems(GLOBALS.seq.next())
}


function display_elems(elems){

    $("#question").html("UCIS Q#"+elems["ucis_id"]+": "+elems["question"])
    $("#question").append('&nbsp;<img onclick="play_audio(0)" class="audio_icon" alt="audio" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVDhPldIxS4JRGMXxJ6s5oyloTGjQycFJWp2iICgkclCEphZBBHFpaPArNPYF2hpqjpaI1mgKERoqioIgqv9zn3vjIjfJAz8894Wj76vKmJQwb3WyrOETDXeyLGDR6t/RT3zDN/b0gs8OnrHrToks4wE6jMcz/rWCJ2y5E6mh7d0iDOPxFfpWZR0vyOrhC/EgFsYrGCLc8gX2taRGQfzMdVxalS6OtaRGQTxexcCqNHGmJTUK4nEPp1blEEdaPpAaqjDexDvKyEC/2Cokh6J3jtT4BBtWpYM7hJ/vN3O4wehYM4sDvKKgF1JZwj1Gxy1cI+9OY6Lv/Ihtd7JMef+K/oOmraYi8gMNVlYpGeXoYQAAAABJRU5ErkJggg==">')
    $("#question").append("<p>"+elems["ucis_id"]+"/"+GLOBALS.num_questions+"</p>")
    $("#answer").hide();


  if (elems["is_location_dependent"]){
         let html = '<p class="small_text">The answer depends on the state you reside in. Select your state</p><select onchange="get_politician_name()" id="us_states"><optgroup> <option disabled selected value> -- select an option -- </option>'


        idb.getCapitals().then(function(data){

            for (var i in data){

                html = html + '<option  id="'+data[i]["acronym"]+'"'+' value="'+data[i]["acronym"]+'">'+data[i]["name"]+'</option>'
            }
            html = html+"</optgroup></select>"

            $("#answer_text").html(html)


            })


    }
    else{
        $("#answer_text").html(elems["answer"]);
          $("#answer_text").append('&nbsp;<img onclick="play_audio(1)" class="audio_icon" alt="audio" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVDhPldIxS4JRGMXxJ6s5oyloTGjQycFJWp2iICgkclCEphZBBHFpaPArNPYF2hpqjpaI1mgKERoqioIgqv9zn3vjIjfJAz8894Wj76vKmJQwb3WyrOETDXeyLGDR6t/RT3zDN/b0gs8OnrHrToks4wE6jMcz/rWCJ2y5E6mh7d0iDOPxFfpWZR0vyOrhC/EgFsYrGCLc8gX2taRGQfzMdVxalS6OtaRGQTxexcCqNHGmJTUK4nEPp1blEEdaPpAaqjDexDvKyEC/2Cokh6J3jtT4BBtWpYM7hJ/vN3O4wehYM4sDvKKgF1JZwj1Gxy1cI+9OY6Lv/Ihtd7JMef+K/oOmraYi8gMNVlYpGeXoYQAAAABJRU5ErkJggg==">')

        }


  }

function showanswer(){

  $("#answer").show();
}





function play_audio (code) {
  console.log(code)
  var string;
  if (code===0){
    string = GLOBALS.seq.current().question
  }
  else if(code ===1){
  string=GLOBALS.seq.current().answer
  console.log(string)
  }
  else{
   string = $("#answer_text").text();

   if(string.indexOf('*',0) !== -1){
     string = string.substr(0,string.indexOf('*',0) )
   }

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
