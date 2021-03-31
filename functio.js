const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola mundo con vue",
    frutas: [
      { nombre: "Manzana", activo: true, stock: 10 },
      { nombre: "Platano", activo: true, stock: 5 },
      { nombre: "Sandia", activo: false, stock: 0 },
    ],
    nuevaFruta: "",
    total: 0,
  },
  methods: {
    agregarFuta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        activo: true,
        stock: 3,
      });
      this.nuevaFruta = "";
    },
  },
  computed: {
    sumarFrutas() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total += fruta.stock;
        if(fruta.stock >0){
          fruta.activo = true;
        }else{
          fruta.activo = false;
        }
      }
      return this.total;
    },
  },
});
