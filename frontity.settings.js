const settings = {
  "name": "blog-hacktzi",
  "state": {
    "frontity": {
      "url": "https://ht.monlogo.co",
      "title": "HackTzi",
      "description": "El blog de HackTzi con WP y Frontity"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Error 404",
              "/category/nature/"
            ],
            [
              "Example page",
              "/pagina-ejemplo/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://ht.monlogo.co"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
