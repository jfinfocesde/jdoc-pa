interface subItemsInfoType {
    href: string,
    label: string,
    date: string,
}

interface itemsInfoType {
    href: string,
    label: string,
    date: string,
    submenu: subItemsInfoType[]
}

export const modedev = true

export const infoCourse = {
    title: "Programación Avanzada",
    description: "En este curso, desde cero, te guiaremos paso a paso por las tecnologías más populares para el desarrollo web del lado del servidor: Node.js, Express, MongoDB y Motores de Plantillas. No necesitas experiencia previa, solo conocimientos básicos de JavaScript y HTML.",
    image: "http://zeatraining.com/uploads/GENERAL/2014/NOTAS/files/Express/maxresdefault.jpg"
}

export const itemsInfo: itemsInfoType[] = [
    {
        href: "/course",
        label: "Introducción",
        date: '2024-2-15',
        submenu: []
    },
    {
        href: "/course/contents/semana1",
        label: "Semana 1",
        date: '2024-2-15',
        submenu: [
            {
                href: "/course/contents/semana1",
                label: "Pacto pedagógico",
                date: '2024-2-15',
            },
            // {
            //     href: "/course/activities/actividad1",
            //     label: "Actividad 1",
            //     date: '2024-2-22',
            // },           
        ]
    },
    {
        href: "",
        label: "Semana 2",
        date: '2024-2-22',
        submenu: [
            {
                href: "/course/contents/semana2",
                label: "Contenido",
                date: '2024-2-22',
            },
            // {
            //     href: "/course/activities/actividad2",
            //     label: "Actividad 2",
            //     date: '2024-2-22',
            // },
        ]
    },
    {
        href: "",
        label: "Semana 3",
        date: '2024-2-29',
        submenu: [
            {
                href: "/course/contents/semana3",
                label: "Contenido",
                date: '2024-2-29',
            },
            // {
            //     href: "/course/activities/actividad3",
            //     label: "Actividad 3",
            //     date: '2024-2-29',
            // },
        ]
    },
    {
        href: "",
        label: "Semana 4",
        date: '2024-3-8',
        submenu: [
            {
                href: "/course/contents/semana4",
                label: "Contenido",
                date: '2024-3-8',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-8',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 5",
        date: '2024-3-15',
        submenu: [
            {
                href: "/course/contents/semana5",
                label: "Contenido",
                date: '2024-3-15',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 6",
        date: '2024-3-15',
        submenu: [
            {
                href: "/course/contents/semana6",
                label: "Contenido",
                date: '2024-3-15',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 7",
        date: '2024-3-15',
        submenu: [
            {
                href: "/course/contents/semana7",
                label: "Contenido",
                date: '2024-3-15',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 8",
        date: '2024-4-6',
        submenu: [
            {
                href: "/course/contents/semana8",
                label: "Contenido",
                date: '2024-4-6',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 9",
        date: '2024-4-20',
        submenu: [
            {
                href: "/course/contents/semana9",
                label: "Contenido",
                date: '2024-4-20',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 10",
        date: '2024-5-4',
        submenu: [
            {
                href: "/course/contents/semana10",
                label: "Contenido",
                date: '2024-5-4',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-15',
            // },
        ]
    },    
    {
        href: "",
        label: "Proyecto",
        date: '2024-3-15',
        submenu: [
            {
                href: "/course/contents/proyecto/parte1",
                label: "1. Scaffolding ",
                date: '2024-3-15',
            },
            {
                href: "/course/contents/proyecto/parte2",
                label: "2. API",
                date: '2024-3-15',
            },
            {
                href: "/course/contents/proyecto/parte3",
                label: "3. Pages",
                date: '2024-3-15',
            },
            {
                href: "/course/contents/proyecto/parte4",
                label: "4. Views",
                date: '2024-3-15',
            },
            {
                href: "/course/contents/proyecto/parte5",
                label: "5. Models",
                date: '2024-3-15',
            },
        ]
    },    
    
]
