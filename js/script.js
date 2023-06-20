console.log('VUE OK', Vue);

//# Creo la pagina VEU
const { createApp } = Vue;

const myApp = createApp({
  name: 'LIST',
  data() {
    return {
      input: '',
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
  computed: {},
  methods: {
    addToList() {
      const listElement = { text: `${this.input}`, done: false };
      this.lists.push(listElement);

      this.input = '';
    },
  },
});

//# La monto  in pagina
myApp.mount('#root');
