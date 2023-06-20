console.log('VUE OK', Vue);

//# Creo la pagina VEU
const { createApp } = Vue;

const myApp = createApp({
  name: 'LIST',
  data() {
    return {
      //# Input per aggiungere oggetti nella lista
      input: '',

      //# Array della lista
      lists: [
        {
          text: 'Andare a fare la spesa.',
          done: false,
        },
        {
          text: 'Andare dal parrucchiere.',
          done: false,
        },
        {
          text: 'Mangiare con gli amici.',
          done: false,
        },
        {
          text: 'Fare la doccia',
          done: false,
        },
        {
          text: 'Pulire',
          done: false,
        },
      ],
    };
  },

  //# Computed
  computed: {},

  //# Methods
  methods: {
    //# Add an element on list
    addToList() {
      const listElement = { text: `${this.input}`, done: false };
      this.lists.push(listElement);

      this.input = '';
    },

    //# Remove a single element in a list
    deleteThis(index) {
      this.lists.splice(index, 1);
    },
  },
});

//# La monto  in pagina
myApp.mount('#root');
