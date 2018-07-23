<template>
  <div class="hello">
    <h1>How Vuex Work</h1>
    <div class="layout">
      <!-- This Table is read directly from the store -->
      <table>
        <caption> <h3>Read From Vuex Store</h3> </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.name">
            <td> {{product.name}} </td>
            <td> {{product.price}} </td>
          </tr>
          <tr>
            <td>Total:</td>
            <td> {{totalPrice}} </td>
          </tr>
        </tbody>
      </table>
      <!-- This Table is from the Getter reading -->
      <table>
        <caption> <h3>Modified Through Getters</h3> </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in saleProducts" :key="product.name">
            <td> {{product.name}} </td>
            <td> {{product.price}} </td>
          </tr>
          <tr>
            <td>Total:</td>
            <td> {{totalPriceSale}} </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- We can also use reducePrice by itself if we're not adding a new parameter -->
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState([
      'products'
    ]),
    ...mapGetters([
     'saleProducts',
     'totalPrice',
     'totalPriceSale'
   ])
  },
  methods: {
    ...mapActions([
     'reducePrice'
   ])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse
}
th, td {
  padding: 10px;
  border: 3px solid black;
}
caption {
  padding: 5px;
}
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 200px 0px 200px;
}

@media (max-width: 1024px) {
  .layout {
    padding: 0px 180px 0px 180px;
  }
}
  @media (max-width: 768px) {
    .layout {
      padding: 0px 120px 0px 120px;
      font-size: 15px;
    }
  }
  @media (max-width: 500px) {
    .layout {
      padding: 0px 40px 0px 40px;
      font-size: 10px;
    }
  }

button {
    background-color: #262626; /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
