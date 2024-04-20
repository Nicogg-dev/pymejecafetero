export const category = [
    {
      title: "Categorias",
      name: "category",
      type: "document",
      fields: [
        {
          title: "Nombre de la categoria",
          name: "nombre",
          type: "string"
        },
        {
            title: "Slug",
            name: "slug",
            type: "string"
        },
        {
            title: "Imagen de marca",
            name: "image_marca",
            type: "image"
        },
        {
            title: "Subcategorias",
            name: "sub_category",
            type: "array",
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'sub_category'}
                ]
              }
            ]
        }
      ]
    }  
  ]