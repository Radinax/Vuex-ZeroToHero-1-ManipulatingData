import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
              return {
                name: product.name,
                price: product.price/2
              }
            })
            return saleProducts;
          },
        totalPrice: state => {
            var array = [];
            state.products.map((product) => {
                return array.push(product.price)
            });
            return array.reduce((a,b)=>a+b);
        },
        totalPriceSale: state => {
            var saleProducts = state.products.map(product => {
                return {
                  price: product.price/2
                }
            })
            var array = [];
            Object.values(saleProducts).map((product)=> {
                return array.push(product.price)
            });
            return array.reduce((a,b)=>a+b);
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload; // In this case payload = 4
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload) // From here we send the action to mutation ^
            },2000)
        }
    }
})
