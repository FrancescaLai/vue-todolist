var app = new Vue(
  {
    el: "#todo-list",
    data: {
      newItem: "",
      lista: [
        "studiare",
        "guardare Netflix",
        "chill"
      ]
    },
    methods: {
      deleteItem: function(itemIndex){
        this.lista.splice(itemIndex, 1);
      },
      addItem: function(){
        if ( this.newItem != "" ) {
          this.lista.push(this.newItem);
          this.newItem = "";
        }
      }
    }
  }
);
