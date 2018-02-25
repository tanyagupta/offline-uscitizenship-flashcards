/* <!--<link href="/static/tgportfolio/assets/favion.ico" rel="icon" type="image/x-icon">--> */
var all_data=[];
var keys={};

var start_time = new Date();

var  intervalID;// = window.setInterval(display_time, 1000);
var times=0;


var data = [['What is the supreme law of the land?',6,'#6baed6','What is the supreme law of the land?*Supreme Court rules*Do unto others*The Constitution*The Penal Code*The Constitution*','OSWl5ldEv6w',1,27,26],['What does the Constitution do?',7,'plum','What does the Constitution do?*Describes the process we use to select the President*Protects basic rights of Americans*Identifies the obligations of the citizens*Describes what a citizen is*Protects basic rights of Americans*','OSWl5ldEv6w',2,28,26],['The idea of self-government is in the first three words of the Constitution. What are these words?',7,'salmon',
'The idea of self-government is in the first three words of the Constitution. What are these words?*We the People*We the government*Freedom is ours*Liberty, equality, fraternity*We the People*','OSWl5ldEv6w',3,29,26],['What is an amendment?',8,'gold','What is an amendment?*A change to the rule of law*Any law that 80% of the Senate votes for*A new fundamental right for citizens*A change to the Constitution*A change to the Constitution*','OSWl5ldEv6w',4,30,26],['What do we call the first ten amendments to the Constitution?',8,'goldenrod','What do we call the first ten amendments to the Constitution?*The 10 amendments*The Bill of Rights*The rule of law*The rights of citizens*The Bill of Rights*','OSWl5ldEv6w',5,31,26],
['What is one right or freedom from the First Amendment?',8,'#3182bd','What is one right or freedom from the First Amendment?*The right to free speech*The right to vote*The right to carry arms*The right to assemble militia*The right to free speech*','OSWl5ldEv6w',6,32,26],['How many amendments does the Constitution have?',8,'#6baed6','How many amendments does the Constitution have?*Eleven*Twenty three *twenty-seven*Four*twenty-seven*','OSWl5ldEv6w',7,33,26],['What did the Declaration of Independence do?',9,'#9ecae1','What did the Declaration of Independence do?*Abolished slavery*Declared 4th of July as a holiday*Made Lincoln president*Declared our independence from Great Britain*Declared our independence from Great Britain*','OSWl5ldEv6w',8,34,26],
['What are two rights in the Declaration of Independence?',9,'#a1d99b','What are two rights in the Declaration of Independence?*The right to carry guns, the right to a phone call*The right to a phone call, the right not to pay taxes*The right to freedom of speech, the right to vote*The right to life, the right to liberty*The right to life, the right to liberty*','OSWl5ldEv6w',9,35,26],['What is freedom of religion?',7,'blue','What is freedom of religion?*You can practice any religion, or not practice a religion*The State must not support any religion*You must not wear any religion signs or ornaments in public*All religions are equal before law*You can practice any religion, or not practice a religion*','OSWl5ldEv6w',10,36,26],['What is the economic system in the United States?',7,'red','What is the economic system in the United States?*Political Economy*Segmented Capitalism*Macroeconomic System*Market Economy*Market Economy*','OSWl5ldEv6w',11,37,26],['What is the “rule of law”?',7,'orange','What is the “rule of law”?*The Supreme Court is more powerful than the House and the Senate*Supreme Court judges cannot go to jail*No one is above the law*Police are given special exemptions*No one is above the law*','OSWl5ldEv6w',12,38,26],['Name one branch or part of the government',11,'yellow','Name one branch or part of the government*The Governor*The Executive Branch*The Police*The Marines*The Executive Branch*','OSWl5ldEv6w',13,39,26],['What stops one branch of government from becoming too powerful?',7,'#6baed6','What stops one branch of government from becoming too powerful?*Nothing, they are all independent*The Supreme Court*The President holds the final authority on everything*Separation of Powers*Separation of Powers*','OSWl5ldEv6w',14,40,26],['Who is in charge of the executive branch?',11,'orange','Who is in charge of the executive branch?*The President*The Speaker of the House*The Senate*CEOs*The President*','OSWl5ldEv6w',15,41,26],['Who makes federal laws?',14,'blue','Who makes federal laws?*The State*The President*The Supreme Court*Senate and the House of Representatives*Senate and the House of Representatives*','OSWl5ldEv6w',16,42,26],['What are the two parts of the U.S. Congress?',12,'#6baed6','What are the two parts of the U.S. Congress?*The Senate and the House of Representatives*The Senate and the Judiciary*The White House and the Blair House*The Democrats and the Republicans*The Senate and the House of Representatives*','OSWl5ldEv6w',17,43,26],['How many U.S. Senators are there?',12,'#dadaeb','How many U.S. Senators are there?*Sixty*Eighty-eight*One hundred *Ninety-nine*One hundred *','OSWl5ldEv6w',18,44,26],['We elect a U.S. Senator for how many years?',12,'#9ecae1','We elect a U.S. Senator for how many years?*Two*Six*Three*For life*Six*','OSWl5ldEv6w',19,45,26],['The House of Representatives has how many voting members?',12,'#756bb1','The House of Representatives has how many voting members?*Sixty *Four hundred and forty *One hundred *Four hundred thirty-five *Four hundred thirty-five *','OSWl5ldEv6w',21,47,26],['We elect a U.S. Representative for how many years?',12,'#9e9ac8','We elect a U.S. Representative for how many years?*Three*Six*Two*For life*Two*','OSWl5ldEv6w',22,48,26],['Who does a U.S. Senator represent?',12,'salmon','Who does a U.S. Senator represent?*All the people of the latitde/longitude you live in*All the citizens of the US*All the people of the state*All the people of the county you live in*All the people of the state*','OSWl5ldEv6w',24,50,26],['Why do some states have more Representatives than other states?',12,'gold','Why do some states have more Representatives than other states?*Because they were the original territories*Because they have more money*Because they have more people*Because they were part of the north durign civil war*Because they have more people*','OSWl5ldEv6w',25,51,26],['We elect a President for how many years?',11,'goldenrod','We elect a President for how many years?*Four years*Two years*Six years*For life*Four years*','OSWl5ldEv6w',26,52,26],['In what month do we vote for President?',11,'#3182bd','In what month do we vote for President?*January*February*November*March*November*','OSWl5ldEv6w',27,53,26],['What is the name of the President of the United States now?',11,'#6baed6','What is the name of the President of the United States now?*Barack Obama*George W Bush*Donald Trump*Bruce Springsteen*Donald Trump*','OSWl5ldEv6w',28,54,26],['What is the name of the Vice President of the United States now?',11,'#9ecae1','What is the name of the Vice President of the United States now?*Dick Cheney*Al Gore*Mike Pence*Joseph R. Biden*Mike Pence*','OSWl5ldEv6w',29,55,26],['If the President can no longer serve, who becomes President?',11,'#c7e9c0','If the President can no longer serve, who becomes President?*The Speaker of the House*The Vice President*The most senior senator*The Army chief of staff*The Vice President*','OSWl5ldEv6w',30,56,26],['If both the President and the Vice President can no longer serve, who becomes President?',11,'#756bb1','If both the President and the Vice President can no longer serve, who becomes President?*The most senior senator*Army chief of staff*the Speaker of the House*The Minority Whip*the Speaker of the House*','OSWl5ldEv6w',31,57,26],['Who is the Commander in Chief of the military?',11,'#9e9ac8','Who is the Commander in Chief of the military?*The most senior senator*Army chief of staff*The secretary of defense*The President*The President*','OSWl5ldEv6w',32,58,26],['Who signs bills to become laws?',11,'#bcbddc','Who signs bills to become laws?*The Supreme Court*The Whitehouse Chief of staff*The Secretary of Justice*The President*The President*','OSWl5ldEv6w',33,59,26],['Who vetoes bills?',11,'plum','Who vetoes bills?*The President*The Vetoer in Chief*The Senate*The House*The President*','OSWl5ldEv6w',34,60,26],['What does the President’s Cabinet do?',11,'salmon','What does the President’s Cabinet do?*Stores his clothes*Decides foreign policy*Advises the President*Passes laws*Advises the President*','OSWl5ldEv6w',35,61,26],['What are two Cabinet-level positions?',11,'gold','What are two Cabinet-level positions?*Secretary of Minority Affairs, Secretary of Judicial Reform*Secretary of Judicial Reform, Secretary of Commerce*Secretary of Commerce, Secretary of Defense*Secretary of Religious Affairs,  Secretary of Defense*Secretary of Commerce, Secretary of Defense*','OSWl5ldEv6w',36,62,26],['What does the judicial branch do?',13,'goldenrod','What does the judicial branch do?*Vetoes bills*Decides if a law goes against the Constitution*Declares wars*Provides health care*Decides if a law goes against the Constitution*','OSWl5ldEv6w',37,63,26],['What is the highest court in the United States?',13,'#3182bd','What is the highest court in the United States?*The Supreme Court*The Chief State Court*The Excecutive Court*The Congress Court*The Supreme Court*','OSWl5ldEv6w',38,64,26],['How many justices are on the Supreme Court?',13,'#6baed6','How many justices are on the Supreme Court?*Two*Six*Forty*Nine*Nine*','OSWl5ldEv6w',39,65,26],['Who is the Chief Justice of the United States now?',13,'#9ecae1','Who is the Chief Justice of the United States now?*William Rehnquist*Ruth Bader Ginsburg*Warren E. Burger*John G Roberts*John G Roberts*','OSWl5ldEv6w',40,66,26],['Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',14,'#a1d99b','Under our Constitution, some powers belong to the federal government. What is one power of the federal government?*Declare a state of snow emergency*Pass a bill of attainder or ex post facto law*Print money*The writ of habeas corpus during peace time*Print money*','OSWl5ldEv6w',41,67,26],['Under our Constitution, some powers belong to the states. What is one power of the states?',14,'blue','Under our Constitution, some powers belong to the states. What is one power of the states?*Provide schooling and education*Regulate interstate commerce*Set standards of weights and measures*Raise and maintain an army and navy*Provide schooling and education*','OSWl5ldEv6w',42,68,26],['What are the two major political parties in the United States?',12,'yellow','What are the two major political parties in the United States?*The Evangelists and the Agnostics*The Green Party and the Democratic Party*The Republican Party and the Libertarians*The Democratic Party and the Republican Party*The Democratic Party and the Republican Party*','OSWl5ldEv6w',45,71,26],['What is the political party of the President now?',11,'#6baed6','What is the political party of the President now?*The Democratic Party*The Republican Party*The Green Party*The Libertarian*The Republican Party*','OSWl5ldEv6w',46,72,26],['What is the name of the Speaker of the House of Representatives now?',12,'orange','What is the name of the Speaker of the House of Representatives now?*Paul D. Ryan*John Boehner*Nancy Pelosi*J. Dennis Hastert*Paul D. Ryan*','OSWl5ldEv6w',47,73,26],['There are four amendments to the Constitution about who can vote. Describe one of them.',8,'blue','There are four amendments to the Constitution about who can vote. Describe one of them.*Places restrictions on the quartering of soldiers  during the voting process*Citizens eighteen and older can vote*Prohibits unreasonable searches and seizures  during voting*Candians can vote*Citizens eighteen and older can vote*','OSWl5ldEv6w',48,74,26],['What is one responsibility that is only for United States citizens?',26,'#6baed6','What is one responsibility that is only for United States citizens?*Can give birth to US citizens*Has the resposnibility to ensure a fair and speedy public trial by jury*Fight in a war on the behalf of the United States of America*Vote in a federal election*Vote in a federal election*','OSWl5ldEv6w',49,75,26],['Name one right only for United States citizens.',9,'#dadaeb','Name one right only for United States citizens.*The right to trial by jury *Run for federal office*The right not to pay excessive fines and excessive bail*The right to manufacture and sell alcohol *Run for federal office*','OSWl5ldEv6w',50,76,26],['What are two rights of everyone living in the United States?',9,'#9ecae1','What are two rights of everyone living in the United States?*Freedom of expression, freedom of speech*Engage in anti-government activities, freedom of speech*The right to deny services to non citizens, engage in anti-government activities*The right to use racial preferences in providing housing, engage in anti-government activities*Freedom of expression, freedom of speech*','OSWl5ldEv6w',51,77,26],['What do we show loyalty to when we say the Pledge of Allegiance?',26,'#c7e9c0','What do we show loyalty to when we say the Pledge of Allegiance?*The Senate, the President, and the Judiciary*The Constitution*The United States *Our forefathers*The United States *','OSWl5ldEv6w',52,78,26],['What is one promise you make when you become a United States citizen?',26,'#756bb1','What is one promise you make when you become a United States citizen?*Never to become a citizen of another country in the future*Give up loyalty to other countries*Never drink and drive*Always vote unless prevented by ill health*Give up loyalty to other countries*','OSWl5ldEv6w',53,79,26],['How old do citizens have to be to vote for President?',26,'#9e9ac8','How old do citizens have to be to vote for President?*Twenty-one*Sixteen*Eighteen*Nineteen *Eighteen*','OSWl5ldEv6w',54,80,26],['What are two ways that Americans can participate in their democracy?',26,'plum','What are two ways that Americans can participate in their democracy?*Carry arms*Get federal insurance*Vote*Practice hate speech*Vote*','OSWl5ldEv6w',55,81,26],['When is the last day you can send in federal income tax forms?',26,'salmon','When is the last day you can send in federal income tax forms?*February 13*March 13*December 31*April 15*April 15*','OSWl5ldEv6w',56,82,26],['When must all men register for the Selective Service?',26,'gold','When must all men register for the Selective Service?*Between eighteen and twenty-six*All men are not required to register for the Selective Service*Between sixteen and twenty-six*At age twenty-seven*Between eighteen and twenty-six*','OSWl5ldEv6w',57,83,26],['What is one reason colonists came to America?',15,'goldenrod','What is one reason colonists came to America?*Ability to buy land*To find gold*To spread atheism*Escape persecution*Escape persecution*','OSWl5ldEv6w',58,84,26],['Who lived in America before the Europeans arrived?',15,'#3182bd','Who lived in America before the Europeans arrived?*The Protestants*The Chinese*American Indians*The Catholics*American Indians*','OSWl5ldEv6w',59,85,26],['What group of people was taken to America and sold as slaves?',16,'#6baed6','What group of people was taken to America and sold as slaves?*Africans*The South Asians*The Native Americans from Latin America*People of Arab descent*Africans*','OSWl5ldEv6w',60,86,26],['Why did the colonists fight the British?',16,'#9ecae1','Why did the colonists fight the British?*They wanted to drink coffee, not tea, leading to the Boston tea party*Colonists who were a member of the British Parliament had to travel to Britian to enact laws*They didn’t have self-government*The reimbursement from the British Government for the wars fought by the colonists were not sufficient*They didn’t have self-government*','OSWl5ldEv6w',61,87,26],['Who wrote the Declaration of Independence?',17,'#c7e9c0','Who wrote the Declaration of Independence?*Thomas Jefferson*George Washington*Benjamin Franklin*Abraham Lincoln*Thomas Jefferson*','OSWl5ldEv6w',62,88,26],['When was the Declaration of Independence adopted?',17,'#756bb1','When was the Declaration of Independence adopted?*July 4, 1667*July 4, 1776*December 25, 1891*July 4, 1773*July 4, 1776*','OSWl5ldEv6w',63,89,26],['There were 13 original states. Name three.',17,'#9e9ac8','There were 13 original states. Name three.*Rhode Island,Connecticut, New York*Virginia, Alabama, Hawaii*California, New York, Indiana*Delaware, Texas, Rhode Island*Rhode Island,Connecticut, New York*','OSWl5ldEv6w',64,90,26],
['What happened at the Constitutional Convention?',17,'#bcbddc','What happened at the Constitutional Convention?*The first draft of the Constition was written, to be finalized two years later*The Constitution was written*The Democrats and Republicans met to discuss the Constitution*The Founding Fathers met with citizens*The Constitution was written*','OSWl5ldEv6w',65,91,26],['When was the Constitution written?',18,'plum','When was the Constitution written?*1810*1787*1776*1778*1787*','OSWl5ldEv6w',66,92,26],['The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',17,'salmon','The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.*Benjamin Franklin*John Adams*George Washington*Alexander Hamilton*Alexander Hamilton*','OSWl5ldEv6w',67,93,26],['What is one thing Benjamin Franklin is famous for?',17,'gold','What is one thing Benjamin Franklin is famous for?*Discovered Australlia*Wrote the Federalist Papers*Youngest member of the Constitutional Convention*First Postmaster General of the United States*First Postmaster General of the United States*','OSWl5ldEv6w',68,94,26],['Who is the “Father of Our Country?',18,'goldenrod','Who is the “Father of Our Country?*John Adams*George Washington*Abraham Lincoln*Benjamin Franklin*George Washington*','OSWl5ldEv6w',69,95,26],['Who was the first President?',18,'#3182bd','Who was the first President?*Abraham Lincoln*Alexander Hamilton*John Jay*George Washington*George Washington*','OSWl5ldEv6w',70,96,26],['What territory did the United States buy from France in 1803?',16,'#6baed6','What territory did the United States buy from France in 1803?*Louisiana*Texas*Nevada*Virginia*Louisiana*','OSWl5ldEv6w',71,97,26],['Name one war fought by the United States in the 1800s.',19,'#9ecae1','Name one war fought by the United States in the 1800s.*War of 1912*Second Heroin War*Comanche War*Mexican-American War*Mexican-American War*','OSWl5ldEv6w',72,98,26],['Name the U.S. war between the North and the South.',19,'#a1d99b','Name the U.S. war between the North and the South.*The Civil Rights War*The Consitutional War*the Civil War*The War of Independence*the Civil War*','OSWl5ldEv6w',73,99,26],['Name one problem that led to the Civil War.',19,'blue','Name one problem that led to the Civil War.*Economic Reasons*The assasination of Abraham Lincoln*Control over rivers*Disagreement on Banking regulations*Economic Reasons*','OSWl5ldEv6w',74,100,26],['What was one important thing that Abraham Lincoln did?',19,'red','What was one important thing that Abraham Lincoln did?*Established the first banking system in the country*Approved the rules of war, followed thereafter by every US President*Emancipation Proclamation*Established the post of the Vice President*Emancipation Proclamation*','OSWl5ldEv6w',75,101,26],['What did the Emancipation Proclamation do?',19,'orange','What did the Emancipation Proclamation do?*Freed the slaves*Gave women the right to vote*Allowed the non native population to vote*Gave women the right to divorce their husbands, subject to approval by the local court*Freed the slaves*','OSWl5ldEv6w',76,102,26],['What did Susan B. Anthony do?',20,'yellow','What did Susan B. Anthony do?*Won property ownership rights *Became the first female Senator*Wrote the federalist papers*Fought for women’s rights*Fought for women’s rights*','OSWl5ldEv6w',77,103,26],['Name one war fought by the United States in the 1900s.',20,'#6baed6','Name one war fought by the United States in the 1900s.*Utah War*Navajo War*Second Opium War*World War I*World War I*','OSWl5ldEv6w',78,104,26],['Who was President during World War I?',20,'orange','Who was President during World War I?*Martin Van Buren*Woodrow Wilson*John Tyler*Zachary Taylor*Woodrow Wilson*','OSWl5ldEv6w',79,105,26],['Who was President during the Great Depression and World War II?',20,'blue','Who was President during the Great Depression and World War II?*Martin Van Buren*John Tyler*Franklin D. Roosevelt*Zachary Taylor*Franklin D. Roosevelt*','OSWl5ldEv6w',80,106,26],['Who did the United States fight in World War II?',20,'#6baed6','Who did the United States fight in World War II?*Japan, Germany, Italy*China, Belgium, Italy*Japan, Russia, China*Germany, Poland, Japan*Japan, Germany, Italy*','OSWl5ldEv6w',81,107,26],['Before he was President, Eisenhower was a general. What war was he in?',20,'#dadaeb','Before he was President, Eisenhower was a general. What war was he in?*Border War of 1909*World War II*Posey War of 1923*Korean War of 1950*World War II*','OSWl5ldEv6w',82,108,26],['During the Cold War, what was the main concern of the United States?',20,'#9ecae1','During the Cold War, what was the main concern of the United States?*Communism*Poverty*Terrorism*Civil Rights*Communism*','OSWl5ldEv6w',83,109,26],['What movement tried to end racial discrimination?',20,'#c7e9c0','What movement tried to end racial discrimination?*The Boxer Rebellion*The Quaker Movement*The Civil Rights Movement*The Bannock Movement*The Civil Rights Movement*','OSWl5ldEv6w',84,110,26],['What did Martin Luther King, Jr. do?',20,'#756bb1','What did Martin Luther King, Jr. do?*Built one of the leading railroads in the country*Came up with scientific discoveries that led to the cure for small pox*Worked for equality for all Americans*Became one of the most highly lauded suffragettes of his time*Worked for equality for all Americans*','OSWl5ldEv6w',85,111,26],['What major event happened on September 11, 2001, in the United States?',21,'#9e9ac8','What major event happened on September 11, 2001, in the United States?*Pearl Harbor bombing*The Iraq War*Terrorists attacked the United States*The Afghanistan war started*Terrorists attacked the United States*','OSWl5ldEv6w',86,112,26],['Name one American Indian tribe in the United States.',15,'plum','Name one American Indian tribe in the United States.*Sioux*Cayenne*Ui Maine *Partholonians*Sioux*','OSWl5ldEv6w',87,113,26],['Name one of the two longest rivers in the United States.',22,'salmon','Name one of the two longest rivers in the United States.*Hudson, Embudo*Chattahooche, Canoe*Missouri, Mississippi*Delaware, Mississippi*Missouri, Mississippi*','OSWl5ldEv6w',88,114,26],['What ocean is on the West Coast of the United States?',22,'gold','What ocean is on the West Coast of the United States?*Atlantic *Indian*Pacific*Hawaiin*Pacific*','OSWl5ldEv6w',89,115,26],['What ocean is on the East Coast of the United States?',22,'goldenrod','What ocean is on the East Coast of the United States?*Pacific*Mississippi*Atlantic*Bay of Biscayne*Atlantic*','OSWl5ldEv6w',90,116,26],['Name one U.S. territory.',23,'#3182bd','Name one U.S. territory.*Bermuda*Bahamas*Guam*Solomon Islands*Guam*','OSWl5ldEv6w',91,117,26],['Name one state that borders Canada.',23,'#6baed6','Name one state that borders Canada.*Wyoming*Ohio*South Dakota*Oregon*Ohio*','OSWl5ldEv6w',92,118,26],['Name one state that borders Mexico.',23,'#9ecae1','Name one state that borders Mexico.*California*Wyoming*Arkansas*Alabama*California*','OSWl5ldEv6w',93,119,26],['What is the capital of the United States?',23,'#c7e9c0','What is the capital of the United States?*New York*Atlanta*Houston*Washington D.C.*Washington D.C.*','OSWl5ldEv6w',94,120,26],['Where is the Statue of Liberty?',23,'#756bb1','Where is the Statue of Liberty?*Washington DC*Liberty Island*LA*Maryland*Liberty Island*','OSWl5ldEv6w',95,121,26],['Why does the flag have 13 stripes?',24,'#9e9ac8','Why does the flag have 13 stripes?*The stripes represent the 13 founding fathers*The stripes represent the 13 articles of the consitution*The stripes represent the 13 fundamental rights* The stripes represent the original colonies* The stripes represent the original colonies*','OSWl5ldEv6w',96,122,26],['Why does the flag have 50 stars?',24,'#bcbddc','Why does the flag have 50 stars?*Each star represents a senator for a total of 50 senators*Each star represents a state*Each star represents the first district that was represented in the United States*The total of 50 stars reflects that we can have no more than 50 amendments to the United States constitution*Each star represents a state*','OSWl5ldEv6w',97,123,26],['What is the name of the national anthem?',24,'plum','What is the name of the national anthem?*The Star-Spangled Banner*America (My Country, Tis of Thee)*America the Beautiful*God Bless America*The Star-Spangled Banner*','OSWl5ldEv6w',98,124,26],['When do we celebrate Independence Day?',25,'salmon','When do we celebrate Independence Day?*August 12*September 9*June 5*July 4*July 4*','OSWl5ldEv6w',99,125,26]
,['Name two national U.S. holidays.',25,'gold','Name two national U.S. holidays.*Presidents’ Day, Memorial Day*National Literacy Day, Presidential Day*Heritage Day, Victoria Day*Remembrance Day, Boxing Day*Presidents’ Day, Memorial Day*','OSWl5ldEv6w',100,126,26]
,['What is the capital of your state?',14,'orange','What is the capital of your state?*Depends on your location*Annapolis*Augusta*Depends on your location*','OSWl5ldEv6w',44,70,26,true,,"capital"],
['Who is one of your state’s U.S. Senators now?',12,'#c7e9c0','Who is one of your state’s U.S. Senators now?*Depends on your location*Ben Cardin*location+search;;;;;;;;;*Tom Cotton*Depends on your location*','OSWl5ldEv6w',20,46,26,true,"senators"],
['Name your U.S. Representative.',12,'plum','Name your U.S. Representative.*Depends on your location*location+search;;;;;;;;;*Mark Sanford*Kristi Noem*Depends on your location*','OSWl5ldEv6w',23,49,26,true,"reps"]
,['Who is the Governor of your state now?',14,'red','Who is the Governor of your state now?*Depends on your location*Larry Hogan*Doug Ducey*Depends on your location*','OSWl5ldEv6w',43,69,26,true,"governors"]]




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
 for (var i in data){
   var temp={};

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

  // temp["last_parent"] = false;
  all_data.push(temp)
  var res=[]
  for (var i in all_data){
   res.push("Q."+all_data[i]["ucis_id"]+": "+all_data[i]["item"])

  }

 }
//(all_data)
var quiz_only_data=[]
for (var i in all_data){
 keys[all_data[i]["id"]]=all_data[i]
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
var state_data = {
  "AL": {
    "name": "Alabama",
    "capital": "Montgomery",
    "lat": "32.361538",
    "long": "-86.279118"
  },
  "AK": {
    "name": "Alaska",
    "capital": "Juneau",
    "lat": "58.301935",
    "long": "-134.419740"
  },
  "AZ": {
    "name": "Arizona",
    "capital": "Phoenix",
    "lat": "33.448457",
    "long": "-112.073844"
  },
  "AR": {
    "name": "Arkansas",
    "capital": "Little Rock",
    "lat": "34.736009",
    "long": "-92.331122"
  },
  "CA": {
    "name": "California",
    "capital": "Sacramento",
    "lat": "38.555605",
    "long": "-121.468926"
  },
  "CO": {
    "name": "Colorado",
    "capital": "Denver",
    "lat": "39.7391667",
    "long": "-104.984167"
  },
  "CT": {
    "name": "Connecticut",
    "capital": "Hartford",
    "lat": "41.767",
    "long": "-72.677"
  },
  "DC": {
    "name": "District of Columbia",
    "capital": "D.C. is not a state and does not have a capital",
    "lat": " 38.889931",
    "long": "-77.009003"
  },
  "DE": {
    "name": "Delaware",
    "capital": "Dover",
    "lat": "39.161921",
    "long": "-75.526755"
  },
  "FL": {
    "name": "Florida",
    "capital": "Tallahassee",
    "lat": "30.4518",
    "long": "-84.27277"
  },
  "GA": {
    "name": "Georgia",
    "capital": "Atlanta",
    "lat": "33.76",
    "long": "-84.39"
  },
  "HI": {
    "name": "Hawaii",
    "capital": "Honolulu",
    "lat": "21.30895",
    "long": "-157.826182"
  },
  "ID": {
    "name": "Idaho",
    "capital": "Boise",
    "lat": "43.613739",
    "long": "-116.237651"
  },
  "IL": {
    "name": "Illinois",
    "capital": "Springfield",
    "lat": "39.783250",
    "long": "-89.650373"
  },
  "IN": {
    "name": "Indiana",
    "capital": "Indianapolis",
    "lat": "39.790942",
    "long": "-86.147685"
  },
  "IA": {
    "name": "Iowa",
    "capital": "Des Moines",
    "lat": "41.590939",
    "long": "-93.620866"
  },
  "KS": {
    "name": "Kansas",
    "capital": "Topeka",
    "lat": "39.04",
    "long": "-95.69"
  },
  "KY": {
    "name": "Kentucky",
    "capital": "Frankfort",
    "lat": "38.197274",
    "long": "-84.86311"
  },
  "LA": {
    "name": "Louisiana",
    "capital": "Baton Rouge",
    "lat": "30.45809",
    "long": "-91.140229"
  },
  "ME": {
    "name": "Maine",
    "capital": "Augusta",
    "lat": "44.323535",
    "long": "-69.765261"
  },
  "MD": {
    "name": "Maryland",
    "capital": "Annapolis",
    "lat": "38.972945",
    "long": "-76.501157"
  },
  "MA": {
    "name": "Massachusetts",
    "capital": "Boston",
    "lat": "42.2352",
    "long": "-71.0275"
  },
  "MI": {
    "name": "Michigan",
    "capital": "Lansing",
    "lat": "42.7335",
    "long": "-84.5467"
  },
  "MN": {
    "name": "Minnesota",
    "capital": "Saint Paul",
    "lat": "44.95",
    "long": "-93.094"
  },
  "MS": {
    "name": "Mississippi",
    "capital": "Jackson",
    "lat": "32.320",
    "long": "-90.207"
  },
  "MO": {
    "name": "Missouri",
    "capital": "Jefferson City",
    "lat": "38.572954",
    "long": "-92.189283"
  },
  "MT": {
    "name": "Montana",
    "capital": "Helana",
    "lat": "46.595805",
    "long": "-112.027031"
  },
  "NE": {
    "name": "Nebraska",
    "capital": "Lincoln",
    "lat": "40.809868",
    "long": "-96.675345"
  },
  "NV": {
    "name": "Nevada",
    "capital": "Carson City",
    "lat": "39.160949",
    "long": "-119.753877"
  },
  "NH": {
    "name": "New Hampshire",
    "capital": "Concord",
    "lat": "43.220093",
    "long": "-71.549127"
  },
  "NJ": {
    "name": "New Jersey",
    "capital": "Trenton",
    "lat": "40.221741",
    "long": "-74.756138"
  },
  "NM": {
    "name": "New Mexico",
    "capital": "Santa Fe",
    "lat": "35.667231",
    "long": "-105.964575"
  },
  "NY": {
    "name": "New York",
    "capital": "Albany",
    "lat": "42.659829",
    "long": "-73.781339"
  },
  "NC": {
    "name": "North Carolina",
    "capital": "Raleigh",
    "lat": "35.771",
    "long": "-78.638"
  },
  "ND": {
    "name": "North Dakota",
    "capital": "Bismarck",
    "lat": "48.813343",
    "long": "-100.779004"
  },
  "OH": {
    "name": "Ohio",
    "capital": "Columbus",
    "lat": "39.962245",
    "long": "-83.000647"
  },
  "OK": {
    "name": "Oklahoma",
    "capital": "Oklahoma City",
    "lat": "35.482309",
    "long": "-97.534994"
  },
  "OR": {
    "name": "Oregon",
    "capital": "Salem",
    "lat": "44.931109",
    "long": "-123.029159"
  },
  "PA": {
    "name": "Pennsylvania",
    "capital": "Harrisburg",
    "lat": "40.269789",
    "long": "-76.875613"
  },
  "RI": {
    "name": "Rhode Island",
    "capital": "Providence",
    "lat": "41.82355",
    "long": "-71.422132"
  },
  "SC": {
    "name": "South Carolina",
    "capital": "Columbia",
    "lat": "34.000",
    "long": "-81.035"
  },
  "SD": {
    "name": "South Dakota",
    "capital": "Pierre",
    "lat": "44.367966",
    "long": "-100.336378"
  },
  "TN": {
    "name": "Tennessee",
    "capital": "Nashville",
    "lat": "36.165",
    "long": "-86.784"
  },
  "TX": {
    "name": "Texas",
    "capital": "Austin",
    "lat": "30.266667",
    "long": "-97.75"
  },
  "UT": {
    "name": "Utah",
    "capital": "Salt Lake City",
    "lat": "40.7547",
    "long": "-111.892622"
  },
  "VT": {
    "name": "Vermont",
    "capital": "Montpelier",
    "lat": "44.26639",
    "long": "-72.57194"
  },
  "VA": {
    "name": "Virginia",
    "capital": "Richmond",
    "lat": "37.54",
    "long": "-77.46"
  },
  "WA": {
    "name": "Washington",
    "capital": "Olympia",
    "lat": "47.042418",
    "long": "-122.893077"
  },
  "WV": {
    "name": "West Virginia",
    "capital": "Charleston",
    "lat": "38.349497",
    "long": "-81.633294"
  },
  "WI": {
    "name": "Wisconsin",
    "capital": "Madison",
    "lat": "43.074722",
    "long": "-89.384444"
  },
  "WY": {
    "name": "Wyoming",
    "capital": "Cheyenne",
    "lat": "41.145548",
    "long": "-104.802042"
  }
}

  sessionStorage.setItem("current_display_index",index)
  var ans = keys[index]["quiz"]["answer"]
  var q = keys[index]["quiz"]["question"]
  var ucis_id = all_data[index]["ucis_id"]
  var id = all_data[index]["id"];
  var show_dropdown_state = all_data[index]["is_location_dependent"]

  var current_counter = index


   var pre_button = '<div class="container"><button type="button" id="show_previous_single" onclick=\'choose_index("previous",'+current_counter+')\' class="btn btn-outline-primary"><i class="fa fa-arrow-left fa-1x color-fa" aria-hidden="true"></i></button></div>';


     var ne_button =  '<div class="container"><button type="button" id="show_ne" onclick=\'choose_index("next",'+current_counter+')\' class="btn btn-outline-primary"><i class="fa fa-arrow-right fa-1x" aria-hidden="true"></i></button></div>';
      var button = '<button type="button" id="show_next_single" onclick=\'play_random()\' class="btn btn-primary btn-block">Next</button>';
      var tough="";
      var cbox_html=""
      var dif_qs = sessionStorage.getItem ('difficult_ucis').length > 0 ? "<h5>Difficult Question Numbers</h5>"+sessionStorage.getItem ('difficult_ucis') : ""

       var text_q= "question"
       var audio_button =  '<button type="button" id="play_q" onclick=\'play_audio('+index+',1)\' class="btn btn-sm btn-outline-primary">Play audio</button>';
       var text_a="answer"
       var audio_answer_button =  '<button type="button" id="play_a" onclick=\'play_audio('+index+',2)\' class="btn btn-sm btn-outline-primary">Hear answer</button>';
      var image = '<img width=\"50" height=\"50\" src=\'https://github.com/tanyagupta/tanyagupta.github.io/blob/master/images/flip.png?raw=true\'>'
      var markup;


       var drop_html = '<p class="small_text">The answer depends on the state you reside in. Select your state</p><select id="us_states">'
       for (var i in state_data){

        drop_html=drop_html+'<option value="'+i+'">'+state_data[i]["name"]+'</option>'
       }
       var role ="capital"
       if(keys[index]["role_name"]){var role = (keys[index]["role_name"]).slice(0,-1)}
       console.log(role)

       drop_html=drop_html+'</select><br><button id="submit_state">See my '+role+'</button>'




       var no_flip_html = '<div class="flippable flip-container container-fluid";"><div class="flippable appcon ac-university"><div class="front">'+image+' <span><p class="center_text">UCIS Q#'+ucis_id+" "+q+drop_html+'</p><div id="answer_div"></div></span>'+'</div><div class="back"><span>'+image+'</span><br><p id="ans_text" class="center_text">'+'</p><br></div>'+'</div><div>';
       var flip_html = '<div class="flippable flip-container container-fluid" ontouchstart="this.classList.toggle(\'hover\');"><div id="flippable" class="flippable appcon ac-university"><div class="front">'+image+' <span><p class="center_text">UCIS Q#'+ucis_id+" "+q+'</p></span>'+'</div><div class="back"><span>'+image+'</span><br><p id="ans_text" class="center_text">'+'</p><br></div>'+'</div><div>'



      if (show_dropdown_state){

       markup ='<div class="container">'+'<div class="row ">' +no_flip_html +'</div>';
      }
       else{

         markup ='<div class="container">'+'<div class="row ">' +flip_html +'</div>';
       }





       $("#quiz_div").html(markup);

       $("#submit_state").on("click", function(){
        var msg = $( "#us_states option:selected" ).val();

        if(keys[index]["role_name"] && keys[index]["capital"]===false){


          $.get('/get_politicians?who='+keys[index]["role_name"]+'&state='+msg, function(data) { var x = JSON.parse(data); $("#answer_div").html(x["data"][0] && x["data"][0]["name"]+"<p class='small_text'> <a target='_blank' href='https://www.usa.gov/elected-officials'>More</a></p>" || "DC does not have "+keys[index]["role_name"]+" <a target='_blank' href='https://www.usa.gov/elected-officials'>More</a>")})

        }
        else if(keys[index]["capital"]){

         $("#answer_div").html(state_data[msg]["capital"])

        }
        else{
         alert(msg);
        }
});


       $("#audio").html(audio_button+"&nbsp;"+audio_answer_button);
       $("#change_q").html('<div class="container"><div class="row"><div class="col-sm-12">'+button+'</div></div></div>');
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
   string = keys[index]["quiz"]["question"]
  }else{
    string = keys[index]["quiz"]["answer"]
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
