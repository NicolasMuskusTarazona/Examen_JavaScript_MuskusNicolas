import '../components/feriaContainer.js '
export const ferias = [
    {
        id: "feria-001",              // ID único
        lugar: "Parque Centenario",
        fechaInicio: "2025-06-01",
        fechaFin: "2025-06-03",
        horario: "10:00 AM - 6:00 PM",
        emprendimientos: [
            {
                id: "emp-001",
                nombre: "EcoModa",
                categoria: "Moda sostenible",
                descripcion: "Ropa hecha con materiales reciclados.",
                redSocial: "https://instagram.com/ecomoda",
                producto: {
                    nombre: "Camiseta reciclada",
                    precio: 45000,
                    descripcion: "Hecha 100% con botellas recicladas.",
                    foto: "https://via.placeholder.com/150"
                }
            },
            {
                id: "emp-002",
                nombre: "Sabores de mi Tierra",
                categoria: "Gastronomía",
                descripcion: "Comida típica santandereana.",
                redSocial: "",
                producto: {
                    nombre: "Arepa Santandereana",
                    precio: 8000,
                    descripcion: "Rellena de yuca y carne oreada.",
                    foto: "https://via.placeholder.com/150"
                }
            }
        ]
    },
    {
        id: "feria-002",
        lugar: "Plaza Mayor",
        fechaInicio: "2025-07-10",
        fechaFin: "2025-07-12",
        horario: "9:00 AM - 5:00 PM",
        emprendimientos:  [
            {
                id: "emp-001",
                nombre: "NMT",
                categoria: "Lotes",
                descripcion: "Lotes de buena calidad",
                redSocial: "https://instagram.com/nic00.777",
                producto: {
                    nombre: "Milan",
                    precio: 450000,
                    descripcion: "En un buen estado",
                    foto: "https:/"
                }
            },
            {
                id: "emp-002",
                nombre: "Perrrero",
                categoria: "Gastronomía",
                descripcion: "Comida tipica gironesa.",
                redSocial: "",
                producto: {
                    nombre: "Hambuerga con bueno, bonito y barato",
                    precio: 3000,
                    descripcion: "Carne de dudosa procedencia",
                    foto: "https://via.placeholder.com/150"
                }
            }
        ]
    }
]
