# VUEX Zero to Hero 1: Learning the Basics.

> Run your client and server with a single command

## Quick Start

``` bash
# Install dependencies for client
yarn install

# Compiles and hot-reloads for development
yarn run serve

# Compiles and minifies for production
yarn run build

# Linits and fixes files
yarn run lint

# Client on http://localhost:8080
```

## Folder Distribution

The workflow I currently use is the same as VUE-CLI which is as follows:

- public
    - index.html 
- src
    - Assets
    - components
        TablesOfData.vue
    - App.vue
    - main.js
    - store.js

## What is this series about

We're taking a journey together exploring the "complex" world of web development, tackling the use of State Management in the two most popular Frameworks like React (Redux) and Vue (Vuex). In my personal experience learning Redux was very hard, not because it was actually hard, but the tutorials out there don't do the job of explaining in depth what was going on in simple words, my goal is here is creating a free series to help people learn Redux and Vuex, which is why we're doing the same applications with both React and Vue. 

Lets talk about the concept of FLUX first since both Vuex and Redux are based on it.

## FLUX and VUEX

It works based on three principles:

### 1. Single Source of Truth.

Vue is based on dividing apps/websites in components, all of them usually are their own Universe, so when we want them to comunicate two components it might not be hard, but what if we want five components communicating with each other? Thats where this Principle comes in.

We create a **store** which is a single source of truth, we put all the data every component need in ONE PLACE so we can read, modify, share, delete them.

In the case of Vuex we create a file called store.js and put the following code:

```bash
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
	
    },
    getters: {
	
    },
    mutations: {
	
    },
    actions: {
	
    }
})
```

- **state** is where I put my data instance information. Its the one place every component will access their information.
- **getters** creates a read only copy of the state we can use to our convenience. Its like saying "*Hey guys I need a copy of the state so I can do some work over it without affecting the original one*"
- **mutations** mutate the current state according to the actions. Its like saying "*Hey guys I be doing something to the state, its alredy recorded*"
- **actions** gets data from the server and send it to the mutation so it mutate the current state. Its like saying "*Hey guys Im gonna do something to the state, heres my commit about it so everyone now it was me*"

As you can see the hardest part would be to understand what happens between actions and mutations. Actions is a layer between the component and the mutations where you register and say who will do a certain action to avoid third party interference and make everything much more organized. 

### 2. Data is Read Only.

We can access the Data from the store using getters and create a new method that returns a value associated with the state, but we don't mess with it directly, instead we use it to create something we can use in our component.

The only way we can change the Data in the store is through mutations.

### 3. Changes to the State are Synchronous

This means everything that happens, does so in order and step by step. Flux keeps it this way to prevent another third party affecting the communication produced between the store and the component.

We shouldn't change the state directly, but through mutations (Vuex) or Reducers/Actions (Redux), this way we can secure that another component isn't changing this state unexpectedly.

Lets check this code to learn exactly what we can do with the basics of Flux.

## Applying Flux to a Simple Button

store.js

```bash
export const store = new Vuex.Store({
    state: {
	    isTrue: true
    },
    getters: {
	    isTrue: function(state) { return state.isTrue }
    },
    mutations: {
        toggle: function(state) {
            state.isTrue = !state.isTrue
        } 
    },
    actions: {
	toggle: function(context) {
		context.commit('toggle')
	}
    }
})

```

Actions can take another value called **payload** which is sent through our component. Look at the example in TablesOfData.vue to showcase how this works, notice we also send that same **payload** in our mutations.

We dispatch Actions which call Mutations which change the state and the Getter will fire from the computed. Lets see what happens in the component.

Toggle.vue

```bash
export default {
	name: 'app',
	computed: {
		isTrue: function() {
			return this.@store.getters.isTrue
		}
	},
	methods: {
		toggleMe: function() {
			this.@store.dispatch('toggle') 
		}
	}
}
```

The modern way of doing this is:

```bash
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'app',
        computed: {
            ...mapGetters([
                'isTrue'
            ]),
        },
        methods: {
            ...mapActions([
                'toggleMe'
            ]),
        }
    }
</script>
```

We have introduced new concepts here like mapGetters, mapActions and another important one is mapState.

- **mapGetters**: We import from our store the getters methods we want just by putting each of their names inside the array.
- **mapActions**: We import from our store the action methods we want just by putting each of their names inside the array.
- **mapState**: We import from our store the state just like above.

They make everything much more smooth and easier to work with. This is only a simple button example, in this app we're taking everything here and expanded much more, this is still a very basic app but hopefully you can understand the very basics of Vuex, download this project if you need a boiler plate to start working with right away.

## What I be doing in a future.

I still need to implement Unit Tests so you guys can work the code piece by piece and understand everything better.

## Closure

I hope you enjoy the start of this series I be working with using both Vuex and Redux and show you this is very easy to work with. Why am I doing this? I like teaching and helping people who might have a hard time understanding these concepts. 

**Made by Adrian Beria.**

**React js Front-End Web Developer.**