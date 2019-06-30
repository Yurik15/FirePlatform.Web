<template>
<div class="page">
    <TheNavbar></TheNavbar>
    <div class="row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-10">
            <div role="tablist" class="cardList">

                <b-card class="cardOverride" no-body v-for="(item, index) in mainCollection" v-bind:value="item.Value" :key="index">

                    <body>
                        <div v-if="item.isVisible === true">
                            <b-card-header class="d-flex justify-content-center p-1 cardHeaderOverride headerElementRaw" header-tag="header" role="tab">
                                <b-btn  v-b-toggle="'collapse' + index" class="blockOverride" :aria-expanded="item.expanded" block href="#" data-target="#'collapse'+ index" data-toggle="'collapse' + index" variant="info" aria-controls="'collapse' + index">{{item.title}}</b-btn>
                            </b-card-header>
                        </div>
                        <b-collapse :id="'collapse' + index" role="tabpanel" v-model="item.expanded">
                            <b-card-body class="divCard">
                            <div >
                                <div class="form-group" :id="'collapse' + index" v-for="(itemDetails, index) in item.items" v-bind:value="itemDetails.Value" :key="index">
                                    <div v-if="itemDetails.isVisible === true && itemDetails.isGroupVisible === true">
                                        <div v-if="itemDetails.type === 'Text'" class="d-flex justify-content-center elementRaw">
    
                                            <label class = "itemDetailsTitle" v-text = "itemDetails.title"/>                                     
    <p class = "itemDetailsValue textFormula form-control" :disabled="true" type="text" style="height: 100% !important"
    @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)">{{itemDetails.value}}</p>
    <div class="input-group-append elementRaw">
    <i class="fas fa-chevron-circle-down"></i>
  </div>
</div>
  <div v-else-if="itemDetails.type === 'Formula'" class="d-flex justify-content-center elementRaw">    
    <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
    <p class = "itemDetailsValue textFormula form-control" :disabled="true" type="text" style="height: 100% !important"
    @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)">{{itemDetails.value}}</p>
</div>
 <div v-else-if="itemDetails.type === 'BackCalcs'" class="d-flex justify-content-center elementRaw">    
  <div v-if="backCalcsHidden === false">
    <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
    <input class = "itemDetailsValue form-control" :disabled="loading" type="text" 
    @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" v-model="itemDetails.value" />
</div>
</div>
<div v-else-if="itemDetails.type === 'Num'" class="d-flex justify-content-center elementRaw">
  <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <input class = "itemDetailsValue form-control" type="number" 
  @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" v-model="itemDetails.value"/>
</div>
<div v-else-if="itemDetails.type === 'Check'" class="d-flex justify-content-center elementRaw">
  <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <div class="itemDetailsValue ">
  <input class="itemDetailsValueCheckBox" :disabled="loading" type="checkbox"
   @change="recalculate(itemDetails.groupID, itemDetails.numID, itemDetails.value)" v-model="itemDetails.value"/>
  </div>
</div>
<div v-else-if="itemDetails.type === 'Combo' && itemDetails.isGroupVisible" class="d-flex justify-content-center elementRaw">
     <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
     <div class="itemDetailsValue itemDetailsTitleText elementDiv">
      <select :placeholder="placer" id="someId" class="itemDetailsTitleText form-control" :disabled="loading" v-model="itemDetails.NameVarible"
      @change="recalculate(itemDetails.groupID, itemDetails.numID, '', true, $event)"> 
        <option   
            v-for="(selectedItem, index) in (itemDetails.comboItems)" 
            :value="selectedItem.displayName" :key="index">
            {{selectedItem.displayName.split(SEPARATOR)[0]}}
        </option>
      </select>
      </div>
      </div>
<div v-else-if="itemDetails.type === 5" class="d-flex justify-content-center">
   <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <div class="itemDetailsValueMultiSelect">
      <select multiple class="form-control itemDetailsValueMultiSelectElement" :disabled="loading" size="60">
        <option v-for="(selectedItem, index) in itemDetails.value" 
         v-bind:value="selectedItem" :key="index">{{selectedItem}}</option>
        <option>{{selectedItem}}</option>
      </select>
</div>
</div>
<div v-else-if="itemDetails.type === 6" class="d-flex justify-content-center">
   <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <div class="radio itemDetailsRadioButton">
      <form>
         <div class="radio" 
         v-for="(selectedItem, index) in itemDetails.value" 
         v-bind:value="selectedItem" :key="index">
            <label>
                <input type="radio" name="optradio" :disabled="loading"> {{selectedItem}}
                </label>
                                        </div>
                                        </form>
                                    </div>
                                </div>
            </div>
        </div>
                            </div>
        </b-card-body>
        </b-collapse>
        </body>
        </b-card>
    </div>
</div>
<div class="col-sm-1 cardList" style="display:none">
    <label  class = "itemOptionsTitle">Hide BackCalcs</label>
    <input class="itemDetailsValueCheckBox" :disabled="loading" type="checkbox"
        v-model="backCalcsHidden" @change="hideBackCalcs(backCalcsHidden)"/>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import TheNavbar from '@/components/TheNavbar.vue'
import {
    serverBus
} from '../main.js';
import { stringify } from 'querystring';

export default {
    name: 'ItemsView',
    placer: 'asdas',
    components: {
        TheNavbar
    },
    data: () => ({
        SEPARATOR: 'sepComboItem',
        mainCollection: [],
        loading: false,
        backCalcsHidden: false
    }),
    methods: {
        recalculate: function (groupId, itemId, value, isComboBox, e, indexOfComboItem) {

            this.$Progress.start();
            this.loading = true;

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

               
            axios.get('https://river-lantern-244519.appspot.com/api/Calculations/Set?groupId=' + groupId + '&itemId=' + itemId + '&value=' + value + '&indexOfComboItem=' + indexOfComboItem)
                .then(response => {

                    var updatedItems = response.data.item2;
                    var updatedGroupItems = response.data.item1;

                    //update groups
                    updatedGroupItems.forEach(newGroupItem => {
                        this.mainCollection.forEach(groupItem => {
                            if (groupItem.indexGroup === newGroupItem.indexGroup) {
                                groupItem.isVisible = newGroupItem.isVisible;
                                groupItem.expanded = newGroupItem.expanded;
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
                
                    this.loading = false;
                    this.$Progress.finish();

                })
                .catch(e => {
                    this.loading = false;
                    this.$Progress.fail();

                    //alert("an error occured, details: " + e.toString());
                })
        },
        hideBackCalcs(hidden) {
            if (hidden === true) {
                this.hideBackCalcs = "hidden";
            } else {
                this.hideBackCalcs = "none";
            }

        },
        updateComboItems: function(comboItems, index){
            var newcomboItems = Object.assign({}, this.item.comboItems, comboItems);
            this.item.comboItems.push(newcomboItems);
            this.item.value = this.item.comboItems[index].displayName;
          
        }
    },
    created() {
                serverBus.$on('itemsGroup', (mainCollection) => {
                this.mainCollection = mainCollection;
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
                                    this.updateComboItems(item.comboItems, 1);
                                }
                            })
                        });             
            }),
            serverBus.$on('collapseAlElements', () => {
                this.mainCollection
                    .forEach(groupItem => {
                                groupItem.expanded = false;
                        });

            })
           
    },
    mounted(e){

              this.updateComboItems(item.comboItems, 1);
    }
}
</script>

<style>
body {
    background-color: #e9ebee !important;
}

.itemOptionsTitle {
    height: 30px;
    width: 30%;
    padding: 10%;
}


</style>
