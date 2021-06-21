const settings = {
  "name": "blog-hacktzi",
  "state": {
    "frontity": {
      "url": "https://writer.hacktzi.com/",
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
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://writer.hacktzi.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
};

export default settings;
