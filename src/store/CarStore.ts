import { defineStore } from "pinia";
import sql from "../../neodrive";
import { ref } from "vue";

///imagem generica para caso nao tenha imagem no input
const imgs = [
  "https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=439075%2Ffront34%2Flg%2Fffe266",
  "https://cdn.pixabay.com/photo/2017/09/20/00/28/ford-mustang-2767124_1280.png",
  "https://www.webmotors.com.br/imagens/prod/348305/FORD_MUSTANG_5.0_V8_TIVCT_GASOLINA_BLACK_SHADOW_SELECTSHIFT_34830508502344078.png",
  "https://production.autoforce.com/uploads/version/profile_image/11460/comprar-novo-mustang-gt-performance_1bf7173dfc.png",
  "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/d0622c70f85506a7f3af530e144e38f6.png"

];

type Car = {
  id: number;
  title: string;
  imageurl: string;
  data: string;
  velocidademaxima: string;
  potencia: string;
  conforto: string;
}

export const useCarStore = defineStore("car", {
  state: () => ({
    newCar: {
      title: "",
      imageurl: "",
      data: "",
      velocidademaxima: "",
      potencia: "",
      conforto: "",
    },
    cars: [],
    isModalOpen: ref(false),
  }),
  actions: {
    async addCar() {
      try {
        const { title, imageurl, data, velocidademaxima, potencia, conforto } = this.newCar;
        let imageUrlToUse = imageurl;

        if (imageUrlToUse === "") {
          imageUrlToUse = imgs[Math.floor(Math.random() * imgs.length)];
        }

        await sql(`
          INSERT INTO projects (title, imageurl, "data", velocidademaxima, potencia, conforto)
          VALUES ($1, $2, $3, $4, $5, $6);
        `, [title, imageUrlToUse, data, velocidademaxima, potencia, conforto]);

        console.log("Carro adicionado com sucesso!");
        this.resetCar();
        await this.getCars(); 
      } catch (error) {
        console.error("Erro ao adicionar carro:", error.message);
        alert("Erro ao adicionar carro. Tente novamente.");
      }
    },
    resetCar() {
      this.newCar = {
        title: "",
        imageurl: "",
        data: "",
        velocidademaxima: "",
        potencia: "",
        conforto: "",
      };
    },
    async getCars() {
      try {
        const response = await sql`SELECT * FROM projects`;
        this.cars = response;
      } catch (error) {
        console.error('Erro ao carregar os carros:', error.message);
        alert('Erro ao carregar os carros. Tente novamente.');
      }
    },
    async deleteCar(id: number) {
      try {
        await sql`DELETE FROM projects WHERE id = ${id}`;
        console.log('Carro excluído com sucesso:', id);
        await this.getCars(); 
      } catch (error) {
        console.error('Erro ao excluir o carro:', error.message);
        alert('Erro ao excluir o carro. Tente novamente.');
      }
    },
    async editCar(car: Car) {
      try {
        const { id, title, imageurl, data, velocidademaxima, potencia, conforto } = car;
        await sql(`
          UPDATE projects
          SET title = $1, imageurl = $2, "data" = $3, velocidademaxima = $4, potencia = $5, conforto = $6
          WHERE id = $7;
        `, [title, imageurl, data, velocidademaxima, potencia, conforto, id]);
        console.log("Carro editado com sucesso!");
        await this.getCars();
      } catch (error) {
        console.error("Erro ao editar carro:", error.message);
        alert("Erro ao editar carro. Tente novamente.");
      }
    }
  },
});