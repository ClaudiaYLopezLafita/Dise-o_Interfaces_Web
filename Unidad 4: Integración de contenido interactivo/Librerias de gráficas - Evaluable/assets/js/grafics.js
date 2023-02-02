const ctx = document.getElementById('gananciasG');
const ctx2 = document.getElementById('inscripcionesG');
const ctx3 = document.getElementById('categoriaG');
const ctx4 = document.getElementById('rankingG');

//https://parzibyte.me/blog/2021/01/03/chart-js-tutorial-ejemplos-graficas-web/

//1. GRAFICA GANANCIAS MENSUALES

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// Datos de la grafica
const datos2022 = {
    label: "Ganancias por mes",
    data: [5000, 5500, 6000, 6702, 6500, 6000, 
            4900, 6000, 6698, 7000, 7300, 6750], // La data de cada etiqueta
    fill: true,
    borderJoinStyle: 'round',
    backgroundColor: 'rgb(245, 183, 177)', // Color del borde
    borderColor: 'rgb(192, 57, 43 )', // Color de fondo
    borderWidth: 1,// Ancho del borde
    tension:0.4
};
// Generacion de grafica
new Chart(ctx, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datos2022,
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: 'Ganacias mensuales(€) año 2022',
            },
            subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            }
        },
        scales: {
            y: {
                min: 4000,
                max: 7500,
            }
        }
    },
    
});

// 2. GRAFICAS DE INSCRIPCIONES EVENTOS POR MES CON MEDIA
//https://code.tutsplus.com/es/tutorials/getting-started-with-chartjs-line-and-bar-charts--cms-28384

// Las etiquetas son las que van en el eje X. 
const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

//[1263.5,737.5, 997.5, 1050, 1227.5, 793.5, 342.5, 187, 587.75, 1324.75, 1087.5,907]
const gimnástica10kData= {
    label: '10k Gimnástica de Ulía',
    data: [1300, 1250, 1900, 2100, 1632, 1400, 600, 400, 999,1200,1500,1050],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderColor: 'rgba(0, 99, 132, 1)',
    // yAxisID: "y-axis-density"
};
const transgrancanariaData = {
    label: 'Transgrancanaria 2022',
    data: [900, 1100, 800, 200, 1326, 587, 120, 50,200,900,1050,890],
    backgroundColor: 'rgba(69, 179, 157, 0.6)',
    borderColor: 'rgba(69, 179, 157, 1)',
    // yAxisID: "y-axis-density"
};
const mediaMaratonSevillaData = {
    label: 'Media Maraton Sevilla',
    data: [1427, 100, 1090, 800, 1626, 200, 150, 0,300,999,800,689],
    backgroundColor: 'rgba(236, 112, 99, 0.6)',
    borderColor: 'rgba(236, 112, 99, 1)',
    // yAxisID: "y-axis-density"
};
const ApukoData = {
    label: 'Apuko Igoera',
    data: [1427, 500, 200, 1100, 326, 987, 500, 298,852,2200,1000,999],
    backgroundColor: 'rgba(245, 176, 65, 0.6)',
    borderColor: 'rgba(245, 176, 65)',
    // yAxisID: "y-axis-density"
};
const mediaData = {
    type:'line',
    label: 'Media Inscritos',
    data: [1263.5,737.5, 997.5, 1050, 1227.5, 793.5, 342.5, 187, 587.75, 1324.75, 1087.5,907],
    backgroundColor: '#FF1616',
    borderColor: '#FF1616',
    order: 0
};

new Chart(ctx2,{
    type:'bar',
    data:{
        labels: meses,
        datasets: [
            mediaData,
            mediaMaratonSevillaData,
            transgrancanariaData,
            gimnástica10kData,
            ApukoData,
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: 'Inscritos por evento en cada mes 2022',
            },
            subtitle: {
                display: true,
                text: 'Media de inscritos (lineal)'
            }
        },
        scales:{
            xAxes: [{
                type: 'scale',
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 20
                }
            }]
        }
    }
})

// 3. GRÁFICA INSCRITOS POR CATEGORIA

// Las etiquetas son las porciones de la gráfica
const categorias = ["5K", "10K", "21K", "42K"]
//datos de las inscripciones
const datosInscripciones = {
    data: [3000, 4000, 5000, 7000], 
    backgroundColor: [
        '#FFCDD2',
        '#EF9A9A',
        '#E57373',
        '#EF5350',
    ],// Color de fondo
    borderColor: [
        '#FFCDD2',
        '#EF9A9A',
        '#E57373',
        '#EF5350',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart(ctx3, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: categorias,
        datasets: [
            datosInscripciones,
        ]
    },
    options:{
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: 'Inscripciones por Categoría año 2022',
            },
            subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            }
        },
        animateRotate:true,
        animateScale:true,
        layout: {
            auropadding:true
        }
    }
});

// 4. RANKING DE EVENTOS CON MAS INSCRITOS

const ranking = ["Media Maraton Sevilla", "Carrera benéfica DogCat", 
                "Transgrancanaria 2022", "10k Gimnástica de Ulía", 
                "Apuko Igoera", "Media Maratón de Latina",
                "Infernal Running 2022", "SHERRY MARATÓN",
                "21k Ciudad de HUelva", "Hard Running - Navas del Rey"
                ]

const dataRanking = {
    labels: ranking,
    datasets: [{
        axis: 'Nº de inscritos',
        label: 'Nº de inscritos',
        data: [9390, 9050, 8200, 8050, 7600, 6500, 5000, 4000, 3900, 2900],
        fill: false,       
        backgroundColor: [
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)',
            'rgba(280, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(240, 99, 132, 1)',
            'rgba(280, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

new Chart(ctx4,{
    type: 'bar',
    data: dataRanking,
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Ranking de eventos',
            },
            subtitle: {
                display: true,
                text: 'Más incritos en 2022'
            }
        },
    }
})