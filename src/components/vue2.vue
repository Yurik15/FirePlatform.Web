
  <style>
  

  </style>
 
<template>
<div>
  sds
  asd
  asd
  asd
  asd
  
  </div>
  </template>

<!-- controls -->


<script>

// define the tree-item component
export default {
    name: 'vue2',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false,
      v: true,
      n: false,
      nn: true,
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    },
    myhtml: function () {
    
    var styletxt="";
        
    if (this.item.L==5) {styletxt="style='color:blue;'";}
    if (this.item.L==4) {styletxt="style='color:darkgreen;'";}
    if (this.item.L==3) {styletxt="style='color:navy;'";}
    if (this.item.L==2) {styletxt="style='color:brown;'";}
    if (this.item.L==1) {styletxt="style='color:black;'";}
    
    return styletxt;
        
    },
    level: function () {
    return this.item.L;
    }
    
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}



// piotr 

//start();
