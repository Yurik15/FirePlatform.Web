<template>
<div class="page">
    <div v-if="loader">
     <div class="text-info d-flex align-items-center justify-content-center mb-3 modal">
    <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
  </div>
      </div>
    <div v-if="navbarVisible">
    </div>
    <div class="row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-10 mainSection">
            <div role="tablist" class="cardList">

                <b-card class="cardOverride" no-body v-for="(item, index) in (this.isRightTemplate ? this.rightMainCollection : this.leftMainCollection)" v-bind:value="item.Value" :key="index">

                    <body>
                        <div v-if="item.isVisible === true">
                            <b-card-header class="d-flex justify-content-center p-1 cardHeaderOverride headerElementRaw" header-tag="header" role="tab">
                                <b-btn  v-b-toggle="'collapse' + index + hideNavbar2()" class="blockOverride" :aria-expanded="true" block href="#" data-target="#'collapse' + index + hideNavbar2()" data-toggle="'collapse' + index + hideNavbar2()" variant="info" aria-controls="'collapse' + index + hideNavbar2()">{{item.title}}</b-btn>
                            </b-card-header>
                        
                        <b-collapse :id="'collapse' + index + hideNavbar2()" role="tabpanel" v-model="item.expanded">
                            <b-card-body class="divCard">
                            <div >
                                <div class="form-group" :id="'collapse' + index + hideNavbar2()" v-for="(itemDetails, index) in item.items"
                                 v-bind:value="itemDetails.Value" :key="index">
                                    <div v-if="itemDetails.isVisible === true">
                                        <div v-if="itemDetails.type === 'Text'" class="d-flex justify-content-center elementRaw">
<div>
    <div v-if="itemDetails.picture !== null"> 
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{itemDetails.picture.name}}</h5>
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
    :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID + ' type ' + itemDetails.type">{{itemDetails.value}}</p>
    
  </div>
  <p>

</p>
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
    :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID + ' type ' + itemDetails.type" >{{itemDetails.value}}</p>
</div>
<div v-else-if="itemDetails.type === 'Num' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
  <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <input class = "itemDetailsValue numeric form-control" type="number" 
  @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" 
  :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID" v-model="itemDetails.value"/>
</div>
<div v-else-if="itemDetails.type === 'Check' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
  <label class = "itemDetailsTitle" v-text = "itemDetails.title"
    v-bind:class="{ OneLineTitle:  !showAllTextCollection.includes('title' + itemDetails.numID)}"
    @click="calculateShowAllTextForItems('title' + itemDetails.numID)"/>
  <div class="itemDetailsValue itemDetailsValueCheckBoxDiv">
  <input class="itemDetailsValueCheckBox" type="checkbox"
   @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" 
   :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID" v-model="itemDetails.value"/>
  </div>
</div>
<div v-else-if="itemDetails.type === 'HTML' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
  <div v-html="itemDetails.value"></div>
</div>
<div v-else-if="itemDetails.type === 'Combo' && itemDetails.isVisible === true" class="d-flex justify-content-center elementRaw">
     <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
     <div class="itemDetailsValue itemDetailsTitleText elementDiv">
      <select :id="'id= ' + itemDetails.numID + ' grpId: ' + itemDetails.groupID" class="itemDetailsTitleText form-control"  v-model="itemDetails.NameVarible"
      @change="recalculate(itemDetails.groupID, itemDetails.numID, '', true, $event)"> 
        <option :value="selected" disabled hidden>-- Please select --</option>
        <option   
            v-for="(selectedItem, index) in (itemDetails.comboItems)" 
            :value="selectedItem.displayName" :key="index">
            {{selectedItem.displayName.split(SEPARATOR)[0]}}
        </option>
  
      </select>

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
  <div class="col-sm-1">
        </div>
</div>
</template>

<script>
import axios from 'axios'
import {
    serverBus
} from '../main.js';
import VueCookies from 'vue-cookies'
import ModifyObjectRecursively from 'modify-object-recursively';

export default {
    name: 'TheItems',
    components: {
        
    },
    data: () => ({
        SEPARATOR: 'sepComboItem',
        mainCollection: [],
        leftMainCollection: [],
        rightMainCollection: [],
        loader: false,
        backCalcsHidden: true,
        navbarVisible: true,
        navbarVisibleText: 'show',
        showAllTextCollection: [],
        userId: $cookies.get('userId'),
        token: $cookies.get('token'),
        collapseID: 0,
        selected: undefined
    }),
    methods: {
        recalculate: function (groupId, itemId, value, isComboBox, e, indexOfComboItem) {
            this.loader = true;

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
             if(this.isRightTemplate){
                this.mainCollection = this.rightMainCollection;
            }else{
                this.mainCollection = this.leftMainCollection;
            }
            this.mainCollection.forEach(itemGroup => {

                                itemGroup.items.forEach(item => {
                                    if (item.numID === itemId &&
                                    item.groupID === groupId) {
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
            //const env = 'https://localhost:44358';
            
                axios.get(env + '/api/Calculations/Set?groupId=' + groupId + '&itemId=' + itemId + '&value='
                 + value + '&userId=' + this.userId + '&isRightTemplate=' + this.isRightTemplate,
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
                                //groupItem.expanded = newGroupItem.expanded;
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

                                    isExists = true;

                                    if(item.type === 'Combo'){
                                        item.comboItems.forEach(comboItem => {
                                             if(comboItem.displayName.includes(this.SEPARATOR) === false)
                                            {
                                                comboItem.displayName = comboItem.displayName + this.SEPARATOR + comboItem.groupKey;
                                            }
                                        })
                                    }
                                }
                            })
                        });
 
                    });

                if(this.isRightTemplate){
                     this.rightMainCollection = this.mainCollection;
                }else{
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
        
        hideNavbar2() {
                return this.isRightTemplate;
        },       
        
        updateComboItems: function(comboItems, index){
            if(this.item){
                alert('this');
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
       
        preselect(isRightTemplate)
        {

            const auth = {
            'Content-Type': 'application/json;',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': 'Bearer ' + $cookies.get('token')
}           
            const env = 'http://shine15-001-site1.btempurl.com';
            //const env = 'https://localhost:44358';
            axios.post(env + '/api/Calculations/Preselection', {
                    isRightTemplate: isRightTemplate,
                    preselectionEnabled: true,
                    userId: $cookies.get('userId')
                }, auth)
                 .then(response => {

                      if(this.isRightTemplate){
                this.mainCollection = this.rightMainCollection;
            }else{
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
                                if (item.numID === newItem.numID &&
                                    item.groupID === newItem.groupID) {

                                     if(item.type === 'Combo'){
                                        
                                        //alert(newItem.nameVariable);
                                                item.nameVariable = newItem.nameVariable;
                                    }                                    
                                    
                                    
                                    item.groupID = newItem.groupID;
                                    item.groupTitle = newItem.groupTitle;
                                    item.numID = newItem.numID;
                                    item.title = newItem.title;
                                    item.type = newItem.type;
                                    item.isVisible = newItem.isVisible;
                                    item.tooltipText = newItem.tooltipText;
                                    item.value = newItem.value;

                                    isExists = true;


                                }
                            })
                        });
 
                    });

                if(this.isRightTemplate){
                     this.rightMainCollection = this.mainCollection;
                }else{
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
            //const env = 'https://localhost:44358';
             if(this.isRightTemplate){
                this.mainCollection = this.rightMainCollection;
            }else{
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
                if(this.isRightTemplate){
                     this.rightMainCollection = this.mainCollection;
                }else{
                     this.leftMainCollection = this.mainCollection;
                }
        },
        templateOnLoad(mainCollection){
            try
            {
              this.mainCollection = mainCollection;
                this.mainCollection.forEach(itemGroup => {
                    itemGroup.treeViewData = [];
                            itemGroup.items.forEach(item => {

                                var items2 = [];
                                var items3 = [];

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
            }
             catch {
                    console.log("exception is occured");
                    this.loader = false;
                }
        }
        
    },
    created() {
            serverBus.$on('itemsGroupLeft', (mainCollection) => {
                //this.isRightTemplate = false;
                    this.loader = false;
                    this.leftMainCollection = mainCollection;
                    this.templateOnLoad(mainCollection);
            }),
            serverBus.$on('itemsGroupRight', (mainCollection) => {
                //this.isRightTemplate = true;
                   // alert("ok");  
                    this.loader = false;
                    this.rightMainCollection = mainCollection;
                    this.templateOnLoad(mainCollection);     
            }),
            serverBus.$on('collapseAlElements', () => {
            if(this.isRightTemplate){
                this.mainCollection = this.rightMainCollection;
            }else {
                this.mainCollection = this.leftMainCollection;
            }
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = false;
                        });

            }),
             serverBus.$on('showAllElements', () => {
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = true;
                        });

            }),
            serverBus.$on('hideBackCalcs', () => {
                this.backCalcsHidden = !this.backCalcsHidden;
            }),
            serverBus.$on('preselectLeft', () => {
                this.preselect(false);
            }),
            serverBus.$on('preselectRight', () => {
                this.preselect(true);
            })
                       
    },
     props: {
        isRightTemplate: Boolean,
    },
}
</script>
