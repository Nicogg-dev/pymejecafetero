export const informacionGeneral = [
    {
      title: "Informacion General",
      name: "general_info",
      type: "document",
      fields: [
        {
            title: "Direccion",
            name: "direccion",
            type: "string"
        },
        {
            title: "Telefono",
            name: "telefono",
            type: "number"
        },
        {
            title: "Nit",
            name: "nit",
            type: "number"
        },
        {
            title: "google maps ubication",
            name: "maps",
            type: "string"
        },
        {
            title: "Correo",
            name: "email",
            type: "string"
        },
        {
            title: "Nombre de comentarios",
            name: "comments",
            type: "string"
        },
        {
            title: "Cuenta bancaria numero",
            name: "bank_number",
            type: "number"
        },
        {
            title: "Horarios",
            name: "horario",
            type: "string"
        },
        {
          title: "Imagen de la empresa",
          name: "company_image",
          type: 'array',
          of: [{type: 'image'}]
        },
        {
            title: "Categorias de Header",
            name: "category_header",
            type: 'array',
            of: [{type: 'image'}]
          },
        {
            title: "Imagen header",
            name: "image_header",
            type: "image"
        },
        {
            title: "Imagenes Sliders",
            name: "image_slider",
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            title: "Imagenes marcas",
            name: "marcas_images",
            type: "string"
        },
        {
            title: "Sobre nosotros",
            name: "nosotros",
            type: "string"
        },
        {
            title: "Informacion Envios",
            name: "info_envios",
            type: "string"
        },
        {
            title: "Politicas Privacidad",
            name: "politicas_privacidad",
            type: "string"
        },
        {
            title: "Terminos y Condiciones",
            name: "terminos_condiciones",
            type: "string"
        },
      ]
    }  
  ]