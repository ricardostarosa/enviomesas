const posts = {
  tigre: {
    titulo: "O Tigre",
    img: "./imagens/tiger.jpg",
    post: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
  },
  leao: {
    titulo: "O Leão",
    img: "./imagens/leon.jpg",
    post: "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste daÍndia.",
  },
  leopardo: {
    titulo: "O leopardo",
    img: "./imagens/leopardo.jpg",
    post: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista).",
  },
  pantera: {
    titulo: "A pantera negra",
    img: "./imagens/pantera-negra.jpg",
    post: "A pantera negra (Panthera pardus) Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae consectetur, harum dicta vitae blanditiis sequi amet suscipit sit reiciendis, aliquid est autem ad facere sed at tempore? Sint, maxime.",
  },
  jaguar: {
    titulo: "O jaguar",
    img: "./imagens/jaguar.jpg",
    post: "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
  },
  guepardo: {
    titulo: "O guepardo",
    img: "./imagens/chita.jpg",
    post: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
  },
  gato: {
    titulo: "O gat",
    img: "./imagens/tiger.jpg",
    post: "O gato (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
  },
};

const container = document.querySelectorAll("div.container");
const div = document.createElement("div");
const img = document.createElement("img");
const h2 = document.createElement("h2");
const p = document.createElement("p");
let todosPosts = "";

// console.log("container", container);

function createPost(classContainerName, caminhoImg, titulo, post) {
  return `<div class="${classContainerName}"><img src="${caminhoImg}"><h2>${titulo}</h2><p>${post}</p></div>`;
}

for (let itens in posts) {
  const titulo = posts[itens].titulo;
  const caminhoImagem = posts[itens].img;
  const post = posts[itens].post;
  todosPosts += createPost("item", caminhoImagem, titulo, post);
}

container[1].innerHTML = todosPosts;

const elements = document.querySelectorAll(".item");

console.log("itens", elements);

elements[0].childNodes[0].setAttribute("src", "./imagens/chita.jpg");
