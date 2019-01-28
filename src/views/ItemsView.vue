<template>
<div class="page">
    <TheNavbar></TheNavbar>
  <div role="tablist" class="cardList">
    <h3 class="d-flex justify-content-center">Element list</h3>
    <b-card class="cardOverride" no-body v-for="(item, index) in itemsGroup" 
  v-bind:value="item.Value" :key="index">
  <body>
      <b-card-header class="d-flex justify-content-center p-1 cardHeaderOverride" header-tag="header" role="tab">
        <b-btn class="blockOverride" block href="#" v-b-toggle="'collapse' + index" variant="info" v-model="item.name">{{item.title}}</b-btn>
      </b-card-header>
      <b-collapse :id="'collapse' + index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <div class = "form-group" :id="'collapse' + index"    
  v-for="(itemDetails, index) in item.items" 
  v-bind:value="itemDetails.Value" :key="index"> 
  <div v-if="itemDetails.isVisible === true">
  <div v-if="itemDetails.type === 'Text'" class="d-flex justify-content-center">    
    <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
    <input class = "itemDetailsValue form-control" type="text" @change="recalculate(itemDetails.id, itemDetails.value)" v-model="itemDetails.value" />
</div>
<div v-else-if="itemDetails.type === 'Num'" class="d-flex justify-content-center">
  <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <input class = "itemDetailsValue form-control" type="number" @change="recalculate(itemDetails.id, itemDetails.value)" v-model="itemDetails.value"/>
</div>
<div v-else-if="itemDetails.type === 'Check'" class="d-flex justify-content-center">
  <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <div class="itemDetailsValue">
  <input class="itemDetailsValueCheckBox" type="checkbox" @change="recalculate(itemDetails.id, itemDetails.value)" v-model="itemDetails.value"/>
  </div>
</div>
<div v-else-if="itemDetails.type === 'Combo'" class="d-flex justify-content-center">
     <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <div class="itemDetailsValue">
      <select class="form-control">
        <option   
        v-for="(selectedItem, index) in itemDetails.value" 
         v-bind:value="selectedItem" :key="index"
        >{{selectedItem}}</option>
        <option>{{selectedItem}}</option>
      </select>
</div>
</div>
<div v-else-if="itemDetails.type === 5" class="d-flex justify-content-center">
   <label  class = "itemDetailsTitle" v-text = "itemDetails.title"/>
  <div class="itemDetailsValueMultiSelect">
      <select multiple class="form-control itemDetailsValueMultiSelectElement" size="60">
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
                <input type="radio" name="optradio"> {{selectedItem}}
                </label>
          </div>
     </form>
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

</template>

<script>  
import axios from 'axios'
import TheNavbar from '@/components/TheNavbar.vue' 

export default {
  name: 'ItemsView',
  components:{
      TheNavbar
  },
  data: ()=>({ 
    itemsGroup:[]
  }),
  methods: { 
recalculate: function(id, value){ 
  axios.get('https://localhost:44358/api/Calculation/set?id=' + id + '&value=' + value) 
.then(response => 
{ 
    response.data.forEach(newItem => {

      var isExists = false;
      this.itemsGroup.forEach(itemGroup => { 
      itemGroup.items.forEach(item =>
      {
        if(item.id === newItem.id)
        {
          item.isVisible = newItem.isVisible;
          item.value = newItem.value;
          item.id = newItem.id;
          item.title = newItem.title;
          item.inputType = newItem.inputType;
          item.tooltipText = newItem.tooltipText;

          isExists = true;
        }
      })
      });

      if(!isExists)
      {
        this.itemsGroup.forEach(itemGroup => { 
        if(itemGroup.id === newItem.parentId)
        {
          itemGroup.items.push(newItem);
        }
      })
      }
  });
  
}) 
.catch(e=> { 
this.errors.push(e) 
}) 
}
  },
  created(){ 
  axios.get('https://localhost:44358/api/Calculations/LoadTmp?numberTmpl=2') 
.then(response => 
{ 
  this.itemsGroup = response.data
}) 
.catch(e=> { 
this.errors.push(e) 
}) 
}
}

</script>

<style>
body
{
    background-color: #e9ebee !important;
}

.itemDetailsValueMultiSelect
{
   height: 90px; 
   width: 30%; 
   margin-left: 20px
}


.itemDetailsValueMultiSelectElement
{
    height: 100% !important;
}

.itemDetailsRadioButton
{
   width: 30%; 
   margin-left: 20px
}
</style>
