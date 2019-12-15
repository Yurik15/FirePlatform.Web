//initiate treeview visibility and expanded
function start(){   
    visStart();
    expStart();
}

//change button colors
function taglify(el){
    el.classList.toggle("bon"); }

function filterTag(){ 
      var butags = document.getElementsByClassName('tag');
      var activeTags=[];
      for (but of butags) {if (but.classList.contains("bon")) {activeTags.push(but.value);}}
      visInputVal = processTags(activeTags);
      document.getElementById("tabvis").innerHTML=visInputVal;
      visStart();
  }
  
function filterTxt(){      
      curn=0;
      visInputVal = '';
      txtSearch(treeData,txtInput.value);
      document.getElementById("txtvis").innerHTML=visInputVal;
      visStart();   
  }

function txtSearch(item,text) {
    var n;
    var found=false;
    for (child of item.children) {
        if (child.name.toLowerCase().includes(text.toLowerCase())) {
            visInputVal+="1";
            found=true;}           
        else 
            {visInputVal+="0"}
        n=visInputVal.length-1;
        if (typeof child.children !== "undefined") {
            txtSearch(child,text);
            //if (txtSearch(child,text)) {found=true};
        }        
    }
    //if (found) {visInputVal = setCharAt(visInputVal,n,"1");};
    //return found;  
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function processTags(activeTags) {
    
    visList='';
    logStr='';
    for (tag of tags) {
        if (activeTags.includes(tag)) {logStr='true'} else {logStr='false'}
        eval("var " + tag +" = "+logStr);}
    for (vc of visConditions) {if (eval(vc)) {visList+='1';} else {visList+='0';}}
    
    return visList;
}

function visRun(){
    visInputVal=visInput.value;
    visStart();}
    
function expRun(){
    expInputVal=expInput.value;
    expStart();}
    
function visStart(){    
    curn=0;   
    vis(demo);
    //alert(curn);
}
 
function expStart(){ 
    curn=0;
    exp(demo);}

function numlify(el) {
    el.classList.toggle("bon");
    num(demo);
}
function num(item) {
    for (child of item.$children) {
        if (child.n == 0) {child.n =1;child.nn =0;} else {child.n =0;child.nn =1;}
    num(child);}}   

function colexp(el){
   colall(demo);
    if (el.id=="c2") expl(demo,2);
    if (el.id=="c3") expl(demo,3);
    if (el.id=="c4") expl(demo,4);
    if (el.id=="c5") expl(demo,5);
}

function colall(item){
    for (child of item.$children) {
    child.isOpen=false;
    colall(child);  }}


function expl(item,l) {
    for (child of item.$children) {
    if (child.level<=l-1) {child.isOpen=true}
    expl(child,l);  }}
    
    
function vis(item) {
    for (child of item.$children) {
    child.v = parseInt(visInputVal.charAt(curn));
    curn+=1;
    vis(child);}}

function visTxt(item) {
    for (child of item.$children) {
    child.v = parseInt(visInputVal.charAt(curn));
    if (child.v==1) {visParent(child);}
    curn+=1;
    vis(child);}}  
    
function visParent(item){
    if (typeof item.$parent !== "undefined") {item.$parent.v=1; visParent(item.$parent);}}
    
function exp(item) {
    for (child of item.$children) {
    child.isOpen=parseInt(expInputVal.charAt(curn));
    curn+=1;
    exp(child);  }}
