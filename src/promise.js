
const items = [
    {
      "id": "1",
      "titulo": "Givenchy",
      "imagen": "https://elbalconar.vtexassets.com/arquivos/ids/162196-500-auto?v=1769789364&width=500&height=auto&aspect=true",
      "descripcion": "L'Interdit EDP - 80ml ",
      "precio": 53000,
      "stock": 5
    },
    {
      "id": "2",
      "titulo": "Carolina Herrera",
      "imagen": "https://elbalconar.vtexassets.com/arquivos/ids/158395-500-auto?v=1769727036&width=500&height=auto&aspect=true",
      "descripcion": "CH EDT - 30ml",
      "precio": 25900,
      "stock": 2
    },
    {
      "id": "3",
      "titulo": "Dior",
      "imagen": "https://elbalconar.vtexassets.com/arquivos/ids/158708-500-auto?v=1769726994&width=500&height=auto&aspect=true",
      "descripcion": "J'adore EDP - 100ml",
      "precio": 54700,
      "stock": 4
    },
    {
      "id": "4",
      "titulo": "Lancôme",
      "imagen": "https://elbalconar.vtexassets.com/arquivos/ids/159161/3605532612690_1.jpg?v=1769795434",
      "descripcion": "La vie est Belle EDP - 75ml",
      "precio": 58000,
      "stock": 6
    },
    {
        "id": "5",
        "titulo": "Lancôme",
        "imagen": "https://elbalconar.vtexassets.com/arquivos/ids/157799-1200-auto?v=638064438919570000&width=1200&height=auto&aspect=true",
        "descripcion": "Idôle EDP - 75ml",
        "precio": 50500,
        "stock": 3
      }
  ]

export const bringData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (items);
        }, 2000);
    })
  }

  export const getItemId = (itemId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (items.find (item=>item.id===itemId))
        }, 2000);
    })
  }
