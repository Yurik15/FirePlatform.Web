<template>
<div>

<div>
<div :id="'templateId' + this.numberId" class="page hideScroll" style="height: 100vh; overflow-y: scroll">
    <div v-if="loader">
     <div class="text-info d-flex align-items-center justify-content-center mb-3 modal">
    <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
  </div>
      </div>
    <div v-if="navbarVisible ">
    </div>
    <div class="row">      
        <div class="col-sm-12 mainSection" style="height: 100vh !important; margin-left: 0px; margin-right: 0px">
            <div role="tablist" class="cardList" style="margin-right: 3px; margin-left: 3px;">

                <b-card class="cardOverride" no-body v-for="(item, index) in (this.templateID  === 0 ? this.leftMainCollection : this.templateID === 1 ? this.centralMainCollection : this.rightMainCollection)" v-bind:value="item.Value" :key="index">

                    <body>
                        <div v-if="item.isVisible === true">
                            <b-card-header class="d-flex justify-content-center p-1 cardHeaderOverride headerElementRaw" header-tag="header" role="tab">
                                <b-btn :id="'groupName' + item.indexGroup" v-b-toggle="'collapse' + item.indexGroup + hideNavbar2()" class="blockOverride" :aria-expanded="true" block href="#" data-target="#'collapse' + item.indexGroup + hideNavbar2()" data-toggle="'collapse' + index + hideNavbar2()" variant="info" aria-controls="'collapse' + item.indexGroup + hideNavbar2()">{{item.title}}</b-btn>
                            </b-card-header>
                        
                        <b-collapse :id="'collapse' + item.indexGroup + hideNavbar2()" role="tabpanel" v-model="item.expanded">
                            <b-card-body class="divCard">
                            <div >
                                <div class="form-group" :id="'collapse' + item.indexGroup + hideNavbar2()" v-for="(itemDetails, index) in item.items"
                                 v-bind:value="itemDetails.Value" :key="index">
                                    <div v-if="itemDetails.isVisible === true">
                                        <div v-if="itemDetails.type === 'Text'" class="d-flex justify-content-center elementRaw">
<div>
    <div v-if="itemDetails.picture !== null"> 
<div class="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">{{itemDetails.picture.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="text-align: center;">
           
      <div v-html="itemDetails.picture.data"></div>
      </div>
    
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div></div>
  <div class = "itemDetailsTitle">
      <div v-if="itemDetails.picture"> 
    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter"
    @click="fetchPicture(itemDetails.numID, itemDetails.groupID)">
         <img style="height: 25px;" src="../assets/description.png">
</button>
 <label v-text = "itemDetails.title"/> 
</div>
<div v-else-if="!itemDetails.picture">
    <label v-text = "itemDetails.title"/>   
    </div>    
    </div>
    <div class="input-group itemDetailsValue">                            
    <p class = "itemDetailsValue textFormula form-control disabledItem" 
    v-bind:class="{ textFormulaOneLineText:  !showAllTextCollection.includes(itemDetails.numID)}" type="text"
      @click="calculateShowAllTextForItems(itemDetails.numID)"
    :id="'itemName,groupId=,' + itemDetails.groupID + ',title=,' + itemDetails.title+ ',value=,'+itemDetails.value+',id=' + itemDetails.numID +  ',type=Text'">{{itemDetails.value}}</p>   
  </div>
  <p></p>
</div>
  <div v-else-if="itemDetails.type === 'Formula' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">    
    <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
    <p class = "itemDetailsValue textFormula formula form-control disabledItem" :disabled="true" type="text" style="height: 100% !important"
    @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" 
    :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID + ' type ' + itemDetails.type" >{{itemDetails.value}}</p>
</div>
 <div v-else-if="itemDetails.type === 'BackCalc' && backCalcsHidden === false && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">    
<label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
    <p class = "itemDetailsValue textFormula form-control disabledItem" :disabled="true" type="text" style="height: 100% !important"
    @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" 
    :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID + ' type ' + itemDetails.type" >{{itemDetails.value ? itemDetails.value.toString() : ""}}</p>
</div>
<div v-else-if="itemDetails.type === 'Num' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
  <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <input class = "itemDetailsValue numeric form-control" type="number" 
  @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" 
  :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID" v-model="itemDetails.value"/>
</div>
<div v-else-if="itemDetails.type === 'Check' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
  <label :id="'Label id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID" class = "itemDetailsTitle" v-text = "itemDetails.title"
    v-bind:class="{ OneLineTitle:  !showAllTextCollection.includes('title' + itemDetails.numID)}"
    @click="calculateShowAllTextForItems('title' + itemDetails.numID)"/>
  <div class="itemDetailsValue itemDetailsValueCheckBoxDiv">
  <input class="itemDetailsValueCheckBox" type="checkbox"
   @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" 
   :id="'itemName,groupId=,' + itemDetails.groupID + ',title=,' + itemDetails.title+ ',id=' + itemDetails.numID +  ',Check'" v-model="itemDetails.value"/>
  </div>
</div>
<div v-else-if="itemDetails.type === 'HTML' && itemDetails.isVisible === true" >
     <div v-if="itemDetails.htmlLevel === 1">
         <div style="font-weight: bold; margin-left: 5px; text-align: left; color: #263172;" v-show="itemDetails.isHidden" v-html="itemDetails.value.split('.')[1]" @click="hideShowAllChilds(itemDetails)">
     </div>
  </div>
  <div v-if="itemDetails.htmlLevel === 2">
         <div style="font-weight: bold; margin-left: 15px; color: #722631;" v-show="!itemDetails.isHidden" v-html="itemDetails.value.split('.')[1]" @click="hideShowAllChilds(itemDetails)">
     </div>
  </div>
    <div v-if="itemDetails.htmlLevel === 3">
         <div style="font-weight: bold; margin-left: 25px; color: #BF3F52;" v-show="!itemDetails.isHidden" v-html="itemDetails.value.split('.')[1]" @click="hideShowAllChilds(itemDetails)">
     </div>
  </div>
     <div v-if="itemDetails.htmlLevel > 3">
         <div style="margin-left: 35px; color: #B8860B;" v-show="!itemDetails.isHidden" v-html="itemDetails.value" @click="hideShowAllChilds(itemDetails)">
     </div>
  </div>
</div>
<div v-if="!isEnabled()">
<div v-if="itemDetails.type === 'Combo' && itemDetails.isVisible === true " class="d-flex justify-content-center elementRaw">
     <label :id="'Label id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID" class = "itemDetailsTitle" v-text = "itemDetails.title"/>
     <div class="itemDetailsValue itemDetailsTitleText elementDiv">
      <select :id="'itemName,groupId=,' + itemDetails.groupID + ',title=,' + itemDetails.title+ ',id=' + itemDetails.numID +  ',Combo'" class="itemDetailsTitleText form-control"  
      @change="recalculate(itemDetails.groupID, itemDetails.numID, '', true, $event)"> 
        <option   
                v-for="(selectedItem, index) in (itemDetails.comboItems)" 
                :value="selectedItem.displayName" :key="index">
                {{selectedItem.displayName.split(SEPARATOR)[0]}}
            </option>
      </select>

      </div>
      </div>
      </div>
      <div v-if="isEnabled()">
<div v-if="itemDetails.type === 'Combo' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
     <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
     <div class="itemDetailsValue itemDetailsTitleText elementDiv">
      <select :id="'itemName,groupId=,' + itemDetails.groupID + ',title=,' + itemDetails.title+ ',id=' + itemDetails.numID +  ',Combo'" class="itemDetailsTitleText form-control"  
      @change="recalculate(itemDetails.groupID, itemDetails.numID, '', true, $event)">    
            <option   
                v-for="(selectedItem, index) in (itemDetails.comboItems)" 
                :value="selectedItem.displayName" :key="index">
                {{selectedItem.displayName.split(SEPARATOR)[0]}}
            </option>
      </select>

      </div>
      </div>
       </div>
                                    </div>    
<div>
            </div>
        </div>
                            </div>
        </b-card-body>
        </b-collapse>
        </div>
        </body>
        </b-card>
    </div>
</div>

</div>
  <div class="col-sm-0.5">
        </div>
</div>
</div>


<!-- <div v-show="showScriptsListView" class="page" style="height: 100vh; overflow-y: scroll">
    
    <div class="mainSection" style="margin-top: 60px;">
        <ul style="list-style-type: none;">
      <li no-body v-for="(template, index) in templates" v-bind:value="template.shortName" :key="index">
                            <div>
                                <div class="row">
                                    <div class="col-sm-6 multi-column-dropdown">
                                            <button class="dropdown-item" type="button" v-on:click="getTemplate(template, 1)">{{template.shortName}}</button>
                                    </div>                                      
                                    </div>
                                </div>     
                            </li>
        </ul>
    </div>
</div> -->

</div>

</template>

<script>
import axios from 'axios'
import {
    serverBus
} from '../main.js';
import VueCookies from 'vue-cookies'
import ModifyObjectRecursively from 'modify-object-recursively';
import templatesService from '@/api-services/templates.service';

export default {
    name: 'TheItems',
    components: {
    },
    data: () => ({
        SEPARATOR: 'sepComboItem',
        mainCollection: [],
        leftMainCollection: [],
        rightMainCollection: [],
        centralMainCollection: [],
        loader: false,
        backCalcsHidden: true,
        navbarVisible: true,
        navbarVisibleText: 'show',
        showAllTextCollection: [],
        userId: $cookies.get('userId'),
        token: $cookies.get('token'),
        collapseID: 0,
        selected: undefined,
        przepisyTree: null,
        dropKey: 0,
        isPreselectEnabled: false,
        showScriptsListView: true ,
        showScriptsListLeft: true ,
        showScriptsListRight: true ,
        numberId: 0,
        templates: []
       }),
    methods: {
        isEnabled(){
            return this.isPreselectEnabled;
        },
        hideShowAllChilds: function(inputItem)
        {
            var setAllHidden = false;

            if(inputItem.childItemsIds && inputItem.childItemsIds.length > 0){
                inputItem.childItemsIds.sort();
                 this.mainCollection.forEach(itemGroup => {
                                itemGroup.items.forEach(item => {
                                    if (item.groupID === inputItem.groupID && item.parentHtmlItemId == inputItem.numID) {
                                        if(item.isHidden === true)
                                        {
                                            item.isHidden = false;
                                            return;
                                        }
                                        else{
                                            setAllHidden = true;
                                        }
                                    }
                                })
                            })
            }

            if(setAllHidden === true)
            {
                inputItem.childItemsIds.forEach(id => {
                this.mainCollection.forEach(itemGroup => {
                                itemGroup.items.forEach(item => {
                                    if (item.numID === id && item.groupID === inputItem.groupID) {
                                            item.isHidden = true;
                                    }
                                })
                            })
                })
            }
        },
        recalculate: function (groupId, itemId, value, isComboBox, e, indexOfComboItem) {
            this.numberId = this.templateID;
            this.loader = true;
            this.dropKey++;
            if(isComboBox === true){
                var childNodes = e.currentTarget.childNodes;
                var i = 0;
                childNodes.forEach(el => {
                   if(el.selected === true)
                    {
                        indexOfComboItem = i;
                        value = el.text;
                    }
                    i++;
                });   

            //search value of combo
                if(this.numberId === 2){
                    this.mainCollection = this.rightMainCollection;
                }
                if(this.numberId === 1){
                    this.mainCollection = this.centralMainCollection;
                }
                if(this.numberId === 0){
                    this.mainCollection = this.leftMainCollection;
                }
            this.mainCollection.forEach(itemGroup => {
            itemGroup.items.forEach(item => {

            if (item.numID === itemId && item.groupID === groupId) {
                    item.comboItems.forEach(comboItem => {
                    if(comboItem.displayName.split(this.SEPARATOR)[0] === value){
                        value = comboItem.groupKey;
                    }
                })
                }             
                })
            })
            }   

            const env = 'http://shine15-001-site1.btempurl.com';
            //const env = 'http://localhost:59548/';
            
                axios.get(env + '/api/Calculations/Set?groupId=' + groupId + '&itemId=' + itemId + '&value='
                 + value + '&userId=' + this.userId + '&templateGuiID=' + this.templateID,
                {
                    headers: {
                        'Content-Type': 'application/json;',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST',
                        'Authorization': 'Bearer ' + this.token
                    }
                })
                .then(response => {

                    this.loader = false;

                     var updatedItems = response.data.item2;
                    var updatedGroupItems = response.data.item1;

                    //update groups
                    updatedGroupItems.forEach(newGroupItem => {
                        this.mainCollection.forEach(groupItem => {
                            if (groupItem.indexGroup === newGroupItem.indexGroup) {
                                groupItem.isVisible = newGroupItem.isVisible;
                            }
                        });
                    });
                        updatedItems.forEach(newItem => {
                        var isExists = false;
                        this.mainCollection.forEach(itemGroup => {
                            itemGroup.items.forEach(item => {
                                if (item.numID === newItem.numID &&
                                    item.groupID === newItem.groupID) {
                                    item.groupID = newItem.groupID;
                                    item.groupTitle = newItem.groupTitle;
                                    item.numID = newItem.numID;
                                    item.title = newItem.title;
                                    item.type = newItem.type;
                                    item.isVisible = newItem.isVisible;
                                    item.tooltipText = newItem.tooltipText;
                                    item.value = newItem.value;
                                    item.parentHtmlItemId = newItem.parentHtmlItemId;
                                    isExists = true;
                                    //update combos
                                     if (item.type === 'Combo')
                                     {                                    
                                         item.comboItems.forEach(comboItem => {
                                            if(comboItem.displayName.includes(this.SEPARATOR) === false)
                                             {
                                                 comboItem.displayName = comboItem.displayName + this.SEPARATOR + comboItem.groupKey;
                                            }
                                         })
                                         if(item){
                                            this.updateComboItems(item.comboItems, 1);
                                        }
                                     }                             
                                }
                            })
                        });
                    });             
                if(this.numberId === 2){
                    this.rightMainCollection = this.mainCollection;
                }
                if(this.numberId === 1){
                    this.centralMainCollection = this.mainCollection;
                }
                if(this.numberId === 0){
                    this.leftMainCollection = this.mainCollection;
                }                 
                })
                .catch(e => {
                    console.log("exception is occured: " + e);
                    this.loader = false;
                })                
        },
        hideNavbar() {
                this.navbarVisibleText = '';
        },
        makeNestedObjectsFromArray(items, parent = 0)
        {
            const nested = [];
            Object.values(items).forEach(item => {
            if (item.parentHtmlItemId == parent) {
                const children = this.makeNestedObjectsFromArray(items, item.num);
                if (children.length) {
                    item.children = children;
                }
                nested.push(item);
                }
            });
            return nested;
        },
        hideNavbar2() {
            return this.templateID;
        },       
        
        updateComboItems: function(comboItems, index){
            if(this.item){
                var newcomboItems = Object.assign({}, this.item.comboItems, comboItems);
                this.item.comboItems.push(newcomboItems);
                this.item.value = this.item.comboItems[index].displayName;
            }
        },
        
        calculateShowAllTextForItems(numID) {
            if(this.showAllTextCollection.includes(numID)){
                this.showAllTextCollection.splice(this.showAllTextCollection.indexOf(numID), 1);
            }
            else{
               this.showAllTextCollection.push(numID);
            }   
        },
       
        preselect(templateID)
        {        
            const env = 'http://shine15-001-site1.btempurl.com';
            //const env = 'http://localhost:59548/';
            axios.post(env + '/api/Calculations/Preselection', {
                    templateGuiID: templateID,
                    preselectionEnabled: true,
                    userId: $cookies.get('userId')
                }, {
                headers: {
                            'Content-Type': 'application/json;',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET, POST',
                            'Authorization': 'Bearer ' + this.token
                        }
                 })
                 .then(response => {

                if(this.numberId === 2){
                    this.mainCollection = this.rightMainCollection;
                }
                if(this.numberId === 1){
                    this.mainCollection = this.centralMainCollection;
                }
                if(this.numberId === 0){
                    this.mainCollection = this.leftMainCollection;
                }   

                    var updatedItems = response.data.item2;
                    var updatedGroupItems = response.data.item1;

                    //update groups
                    updatedGroupItems.forEach(newGroupItem => {
                        this.mainCollection.forEach(groupItem => {
                            if (groupItem.indexGroup === newGroupItem.indexGroup) {
                                groupItem.isVisible = newGroupItem.isVisible;
                                //groupItem.expanded = newGroupItem.expanded;
                            }
                        });
                    });

                        updatedItems.forEach(newItem => {
                        var isExists = false;
                        this.mainCollection.forEach(itemGroup => {
                            itemGroup.items.forEach(item => {
                                if (item.numID === newItem.numID && item.groupID === newItem.groupID) {               
                                    item.groupID = newItem.groupID;
                                    item.groupTitle = newItem.groupTitle;
                                    item.numID = newItem.numID;
                                    item.title = newItem.title;
                                    item.type = newItem.type;
                                    item.isVisible = newItem.isVisible;
                                    item.tooltipText = newItem.tooltipText;
                                    item.value = newItem.value;
                                    item.displayName = newItem.displayName;
                                    isExists = true;
                                }
                            })
                        });
 
                    });


                     //update combos
                     this.mainCollection.forEach(itemGroup => {
                            itemGroup.items.forEach(item => {
                                if (item.type === 'Combo' && item.isVisible === true)
                                {
                                        item.comboItems.forEach(comboItem => {
                                            if(comboItem.displayName.includes(this.SEPARATOR) === false)
                                            {
                                                
                                                comboItem.displayName = comboItem.displayName + this.SEPARATOR + comboItem.groupKey;
                                            }
                                        })
                                        if(item){
                                            this.updateComboItems(item.comboItems, 1);
                                        }
                                }
                            });                           
                        });  
                if(this.numberId === 2){
                    this.rightMainCollection = this.mainCollection;
                }
                if(this.numberId === 1){
                    this.centralMainCollection = this.mainCollection;
                }
                if(this.numberId === 0){
                    this.leftMainCollection = this.mainCollection;
                }   
                    this.loader = false;

                })
                .catch(e => {
                    this.loader = false;
                    console.log("exception is occured: " + e);
                })
                
        }, 
        fetchPicture(numberId, groupId){
            const env = 'http://shine15-001-site1.btempurl.com';
            //const env = 'https://localhost:44358/';
                if(this.numberId === 2){
                    this.mainCollection = this.rightMainCollection;
                }
                if(this.numberId === 1){
                    this.mainCollection = this.centralMainCollection;
                }
                if(this.numberId === 0){
                    this.mainCollection = this.leftMainCollection;
                }  
                axios.get(env + '/api/Calculations/FetchPicture?numberId=' + numberId + '&groupId=' + groupId,
                {
                    headers: {
                        'Content-Type': 'application/json;',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST',
                        'Authorization': 'Bearer ' + this.token
                 }
                })
                .then(response => {
                    
                   var dataToFetch = response.data;
                    
                        this.mainCollection.forEach(itemGroup => {

                            itemGroup.items.forEach(item => {
                                if (item.numID === dataToFetch.numID &&
                                    item.groupID === dataToFetch.groupID) {                                  
                                    item.picture.data = dataToFetch.picture.data;
                                }
                            })
                        });
                });
                if(this.numberId === 2){
                    this.mainCollection = this.rightMainCollection;
                }
                if(this.numberId === 1){
                    this.mainCollection = this.centralMainCollection;
                }
                if(this.numberId === 0){
                    this.mainCollection = this.leftMainCollection;
                }    
        },
        loadTemplates(){
            this.loader = true;
            templatesService.getAll($cookies.get('lng'))
            .then(response => { 
                this.loader = false;
                this.templates = response.data;
            })
            .catch(e => {
                 this.loader = false;
                if(e.response.status === 401 || e.response.status === 400){
                    this.logout();
                }
            

            })
    },
        templateOnLoad(mainCollection){
            try
            {
              this.isPreselectEnabled = false;
              this.mainCollection = null;
              
                mainCollection.forEach(itemGroup => {
                            itemGroup.items.forEach(item => {                             
                                if (item.type === 'Combo' && item.isVisible === true)
                                {
                                        item.comboItems.forEach(comboItem => {
                                            if(comboItem.displayName.includes(this.SEPARATOR) === false)
                                            {
                                                comboItem.displayName = comboItem.displayName + this.SEPARATOR + comboItem.groupKey;
                                            }
                                        })
                                        if(item){
                                            this.updateComboItems(item.comboItems, 1);
                                        }
                                }
                            });
                           
                        });  
                        this.mainCollection = mainCollection;

                        this.loader = false;
                        
            }
             catch {
                    console.log("exception is occured - templateOnLoad");
                    this.loader = false;
                }
        },
        getTemplate (template, templateID) {
           // this.forceRerender();
            this.loader = true;

                template.savedName = this.selectedSavedTemplateName;
                var responseData = null;
                templatesService.loadTemplatesData(template, templateID, $cookies.get('lng'))
                .then(response => {           

                    this.loader = false;
                }
                )
                .catch(e => {      
                    this.loader = false;    
                                                      
                    if(e.response.status === 401){
                    this.logout();
                }
                })
        },
    },
        
    created() {
        if(this.isMobile === true){
            this.loadTemplates();
        }
         if(this.templateID === 0){
             serverBus.$on('itemsGroupLeft', (mainCollection) => {
                  this.isPreselectEnabled = false;
                     this.loader = false;
                   this.leftMainCollection = mainCollection;
                     this.templateOnLoad(mainCollection);
             })
         }
           if(this.templateID === 1)
           {
             serverBus.$on('itemsGroupCenter', (mainCollection) => {
                     this.isPreselectEnabled = false;

                    this.centralMainCollection = mainCollection;
                    this.templateOnLoad(mainCollection);     
            })
           }
           if(this.templateID === 2)
           {
             serverBus.$on('itemsGroupRight', (mainCollection) => {
                     this.isPreselectEnabled = false;
                    this.loader = false;
                    this.rightMainCollection = mainCollection;
                    this.templateOnLoad(mainCollection);     
            })
           }
            serverBus.$on('collapseAlElementsLeft', () => {   
                this.mainCollection = this.leftMainCollection;
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = false;
                        });

            }),
            serverBus.$on('collapseAlElementsCenter', () => {   
                this.mainCollection = this.centralMainCollection;
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = false;
                        });

            }),
             serverBus.$on('collapseAlElementsRight', () => {   
                this.mainCollection = this.rightMainCollection;
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = false;
                        });

            }),
             serverBus.$on('showAllElementsLeft', () => {
                this.mainCollection = this.leftMainCollection;
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = true;
                        });

            }),
              serverBus.$on('showAllElementsCenter', () => {
                this.mainCollection = this.centralMainCollection;
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = true;
                        });

            }),
             serverBus.$on('showAllElementsRight', () => {
                 this.mainCollection = this.rightMainCollection;
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = true;
                        });

            }),

            serverBus.$on('hideBackCalcs', () => {
                this.backCalcsHidden = !this.backCalcsHidden;
            }),
            serverBus.$on('preselectLeft', () => {
                this.isPreselectEnabled = true;
                this.preselect(0);
            }),
            
            serverBus.$on('preselectCenter', () => {
                           
                this.isPreselectEnabled = true;
                this.preselect(1);
            }),
            serverBus.$on('preselectRight', () => {
                this.isPreselectEnabled = true;
                this.preselect(2);
            })
                       
    },
     props: {
        templateID: Number,
        isMobile: Boolean
    },
}
</script>
