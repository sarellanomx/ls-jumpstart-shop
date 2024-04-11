{
  "contentTypes": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "product",
        "type": "ContentType",
        "createdAt": "2024-03-06T13:53:38.809Z",
        "updatedAt": "2024-03-06T13:53:39.356Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:39.356Z",
        "firstPublishedAt": "2024-03-06T13:53:39.356Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "displayField": "title",
      "name": "Product",
      "description": "for adding products",
      "fields": [
        {
          "id": "internalName",
          "name": "Internal Name",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "slug",
          "name": "Slug",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "categories",
          "name": "Categories",
          "type": "Array",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "items": {
            "type": "Link",
            "validations": [
              {
                "linkContentType": [
                  "category"
                ]
              }
            ],
            "linkType": "Entry"
          }
        },
        {
          "id": "description",
          "name": "Description",
          "type": "RichText",
          "localized": false,
          "required": false,
          "validations": [
            {
              "enabledNodeTypes": [
                "heading-1",
                "heading-2",
                "heading-3",
                "heading-4",
                "heading-5",
                "heading-6",
                "ordered-list",
                "unordered-list",
                "hr",
                "blockquote",
                "embedded-entry-block",
                "embedded-asset-block",
                "hyperlink",
                "entry-hyperlink",
                "asset-hyperlink",
                "embedded-entry-inline"
              ]
            },
            {
              "enabledMarks": [
                "bold",
                "italic",
                "underline",
                "code"
              ]
            }
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "price",
          "name": "Price",
          "type": "Number",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "image",
          "name": "Image",
          "type": "Link",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "linkType": "Asset"
        }
      ]
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "category",
        "type": "ContentType",
        "createdAt": "2024-03-06T13:53:38.820Z",
        "updatedAt": "2024-03-06T13:53:40.351Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:40.351Z",
        "firstPublishedAt": "2024-03-06T13:53:40.351Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "displayField": "title",
      "name": "Category",
      "description": null,
      "fields": [
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "description",
          "name": "Description",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "image",
          "name": "Image",
          "type": "Link",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "linkType": "Asset"
        }
      ]
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "productSection",
        "type": "ContentType",
        "createdAt": "2024-03-06T13:53:38.829Z",
        "updatedAt": "2024-03-08T17:12:44.878Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2024-03-08T17:12:44.878Z",
        "firstPublishedAt": "2024-03-06T13:53:39.876Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 3,
        "version": 6,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "displayField": "title",
      "name": "Product Section",
      "description": null,
      "fields": [
        {
          "id": "internalName",
          "name": "Internal Name",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "products",
          "name": "Products",
          "type": "Array",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "items": {
            "type": "Link",
            "validations": [
              {
                "linkContentType": [
                  "product"
                ]
              }
            ],
            "linkType": "Entry"
          }
        },
        {
          "id": "backgroundColor",
          "name": "Background Color",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "textColor",
          "name": "Text Color",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        }
      ]
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "landingPage",
        "type": "ContentType",
        "createdAt": "2024-03-06T13:53:38.996Z",
        "updatedAt": "2024-03-06T13:53:40.820Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:40.820Z",
        "firstPublishedAt": "2024-03-06T13:53:40.820Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "displayField": "title",
      "name": "Landing Page",
      "description": null,
      "fields": [
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "slug",
          "name": "Slug",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "headline",
          "name": "Headline",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "sections",
          "name": "Sections",
          "type": "Array",
          "localized": false,
          "required": false,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "items": {
            "type": "Link",
            "validations": [
              {
                "linkContentType": [
                  "productSection"
                ]
              }
            ],
            "linkType": "Entry"
          }
        }
      ]
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "imageWithTags",
        "type": "ContentType",
        "createdAt": "2024-03-08T15:38:28.382Z",
        "updatedAt": "2024-03-13T04:51:09.956Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 4,
        "publishedAt": "2024-03-13T04:51:09.956Z",
        "firstPublishedAt": "2024-03-08T15:38:29.011Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 2,
        "version": 5,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "displayField": "title",
      "name": "image With Tags",
      "description": null,
      "fields": [
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "image",
          "name": "Image",
          "type": "Link",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "linkType": "Asset"
        },
        {
          "id": "imageTags",
          "name": "Image tags",
          "type": "Array",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false,
          "items": {
            "type": "Symbol",
            "validations": [
            ]
          }
        }
      ]
    }
  ],
  "tags": [
  ],
  "editorInterfaces": [
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "lhc6dr2kheya",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 2,
        "createdAt": "2024-03-06T13:53:39.555Z",
        "createdBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2024-03-06T13:53:41.587Z",
        "updatedBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "product",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "slug",
          "widgetId": "slugEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "categories"
        },
        {
          "fieldId": "description"
        },
        {
          "fieldId": "price"
        },
        {
          "fieldId": "image"
        }
      ]
    },
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "lhc6dr2kheya",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 2,
        "createdAt": "2024-03-06T13:53:40.503Z",
        "createdBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2024-03-06T13:53:41.530Z",
        "updatedBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "category",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "title"
        },
        {
          "fieldId": "description"
        },
        {
          "fieldId": "image"
        }
      ]
    },
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "lhc6dr2kheya",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 6,
        "createdAt": "2024-03-06T13:53:40.031Z",
        "createdBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2024-03-08T17:12:45.572Z",
        "updatedBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "productSection",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "internalName",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "title",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "products",
          "widgetId": "entryLinksEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "backgroundColor",
          "widgetId": "12urRyua1bewb2YkUqU6C1",
          "widgetNamespace": "app"
        },
        {
          "fieldId": "textColor",
          "widgetId": "12urRyua1bewb2YkUqU6C1",
          "widgetNamespace": "app"
        }
      ]
    },
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "lhc6dr2kheya",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 2,
        "createdAt": "2024-03-06T13:53:41.004Z",
        "createdBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2024-03-06T13:53:42.478Z",
        "updatedBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "landingPage",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "slug",
          "widgetId": "slugEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "headline"
        },
        {
          "fieldId": "sections"
        }
      ]
    },
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "lhc6dr2kheya",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 4,
        "createdAt": "2024-03-08T15:38:29.192Z",
        "createdBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2024-03-13T04:51:10.638Z",
        "updatedBy": {
          "sys": {
            "id": "0MXb1ol8E91pzl4r8IzFQp",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "imageWithTags",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "title",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "image",
          "widgetId": "assetLinkEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "imageTags",
          "widgetId": "tagEditor",
          "widgetNamespace": "builtin"
        }
      ]
    }
  ],
  "entries": [
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "5M8yfs7rRfZ8KVpkepfeHe",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.705Z",
        "updatedAt": "2024-03-06T13:53:50.075Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:50.075Z",
        "firstPublishedAt": "2024-03-06T13:53:50.075Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "category"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "merchandise"
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "Rvc3xwFIw5xvMfHxhT8uG",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.708Z",
        "updatedAt": "2024-03-06T13:53:50.497Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:50.497Z",
        "firstPublishedAt": "2024-03-06T13:53:50.497Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "product"
          }
        }
      },
      "fields": {
        "internalName": {
          "en-US": "Jim's legendary coffee mug"
        },
        "title": {
          "en-US": "Jim's legendary coffee mug"
        },
        "slug": {
          "en-US": "jims-legendary-coffee-mug"
        },
        "categories": {
          "en-US": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "7hVI3sE8aS7ViIwheli3fy"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "5M8yfs7rRfZ8KVpkepfeHe"
              }
            }
          ]
        },
        "description": {
          "en-US": {
            "data": {
            },
            "content": [
              {
                "data": {
                },
                "content": [
                  {
                    "data": {
                    },
                    "marks": [
                    ],
                    "value": "Shall we spill the secret? ",
                    "nodeType": "text"
                  },
                  {
                    "data": {
                    },
                    "marks": [
                      {
                        "type": "bold"
                      }
                    ],
                    "value": "Rumor",
                    "nodeType": "text"
                  },
                  {
                    "data": {
                    },
                    "marks": [
                    ],
                    "value": " has it that Jim’s mug is magical. Pour in any type of coffee and it will transform it into the most flavorsome and aromatic cup of joe you’ll ever experience. There is one word to describe it - legendary! From ordinary into extraordinary, get Jim’s legendary coffee mug while supplies last!",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              },
              {
                "data": {
                },
                "content": [
                  {
                    "data": {
                    },
                    "marks": [
                    ],
                    "value": "",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              }
            ],
            "nodeType": "document"
          }
        },
        "price": {
          "en-US": 99.99
        },
        "image": {
          "en-US": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4KLpxtqb8Lv4WIVjPF3JVS"
            }
          }
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "590aUv4nfxndZlavSpU4rP",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.710Z",
        "updatedAt": "2024-03-06T13:53:49.299Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:49.299Z",
        "firstPublishedAt": "2024-03-06T13:53:49.299Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "category"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "clothing"
        },
        "description": {
          "en-US": "clothing items"
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "3yjqD0zdDFUwNH629GCItz",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.722Z",
        "updatedAt": "2024-03-06T13:53:51.268Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:51.268Z",
        "firstPublishedAt": "2024-03-06T13:53:51.268Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "product"
          }
        }
      },
      "fields": {
        "internalName": {
          "en-US": "Amelia's CORE Concept Hoodie"
        },
        "title": {
          "en-US": "Amelia's CORE Concept Hoodie"
        },
        "slug": {
          "en-US": "amelias-core-concept-hoodie"
        },
        "categories": {
          "en-US": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "590aUv4nfxndZlavSpU4rP"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "5M8yfs7rRfZ8KVpkepfeHe"
              }
            }
          ]
        },
        "description": {
          "en-US": {
            "data": {
            },
            "content": [
              {
                "data": {
                },
                "content": [
                  {
                    "data": {
                    },
                    "marks": [
                      {
                        "type": "bold"
                      }
                    ],
                    "value": "C.O.R.E",
                    "nodeType": "text"
                  },
                  {
                    "data": {
                    },
                    "marks": [
                    ],
                    "value": " - Create once reuse everywhere! you can definitely wear this hoodie with all your favorite pants.",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              }
            ],
            "nodeType": "document"
          }
        },
        "price": {
          "en-US": 120
        },
        "image": {
          "en-US": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "73OYdjzfQ0XMkJQDanmbON"
            }
          }
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "setlRNA7yYQQ1COtVvQYH",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.880Z",
        "updatedAt": "2024-03-06T13:53:51.716Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:51.716Z",
        "firstPublishedAt": "2024-03-06T13:53:51.716Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "productSection"
          }
        }
      },
      "fields": {
        "internalName": {
          "en-US": "Special Offer"
        },
        "title": {
          "en-US": "Special Offer"
        },
        "products": {
          "en-US": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "Rvc3xwFIw5xvMfHxhT8uG"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "3yjqD0zdDFUwNH629GCItz"
              }
            }
          ]
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "7Dic3an7QMyPet2PIErkwI",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.885Z",
        "updatedAt": "2024-03-08T17:13:08.506Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 4,
        "publishedAt": "2024-03-08T17:13:08.506Z",
        "firstPublishedAt": "2024-03-06T13:53:52.209Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 2,
        "version": 5,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "productSection"
          }
        }
      },
      "fields": {
        "internalName": {
          "en-US": "LS Collection"
        },
        "title": {
          "en-US": "LS Collection"
        },
        "products": {
          "en-US": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "3yjqD0zdDFUwNH629GCItz"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "Rvc3xwFIw5xvMfHxhT8uG"
              }
            }
          ]
        },
        "backgroundColor": {
          "en-US": "#2a2385"
        },
        "textColor": {
          "en-US": "#1fbff4"
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "7hVI3sE8aS7ViIwheli3fy",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:47.918Z",
        "updatedAt": "2024-03-06T13:53:49.729Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2024-03-06T13:53:49.729Z",
        "firstPublishedAt": "2024-03-06T13:53:49.729Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "category"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "gift items"
        },
        "description": {
          "en-US": "Gift items"
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "7crGJXefF4mDkLckuTKmHd",
        "type": "Entry",
        "createdAt": "2024-03-06T13:53:48.930Z",
        "updatedAt": "2024-03-08T19:16:19.225Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 4,
        "publishedAt": "2024-03-08T19:16:19.225Z",
        "firstPublishedAt": "2024-03-06T13:53:52.632Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 2,
        "version": 5,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "landingPage"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "Home Page"
        },
        "slug": {
          "en-US": "home-page"
        },
        "headline": {
          "en-US": "Welcome to the Jumpstart Shoping"
        },
        "sections": {
          "en-US": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "7Dic3an7QMyPet2PIErkwI"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "setlRNA7yYQQ1COtVvQYH"
              }
            }
          ]
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "7xgiSuWCsWL8L81Dqu6r4z",
        "type": "Entry",
        "createdAt": "2024-03-08T15:23:30.199Z",
        "updatedAt": "2024-03-08T15:26:08.735Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 8,
        "publishedAt": "2024-03-08T15:26:08.735Z",
        "firstPublishedAt": "2024-03-08T15:24:41.289Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 2,
        "version": 9,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "landingPage"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "demo"
        },
        "slug": {
          "en-US": "demo"
        },
        "headline": {
          "en-US": "Esto es una demo"
        },
        "sections": {
          "en-US": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "setlRNA7yYQQ1COtVvQYH"
              }
            },
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "7Dic3an7QMyPet2PIErkwI"
              }
            }
          ]
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "6wscpv1mJ1OrahtdGtrkcq",
        "type": "Entry",
        "createdAt": "2024-03-08T15:39:12.655Z",
        "updatedAt": "2024-03-08T15:40:01.715Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2024-03-08T15:40:01.715Z",
        "firstPublishedAt": "2024-03-08T15:40:01.715Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 1,
        "version": 6,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "automationTags": [
        ],
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "imageWithTags"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "Demo Images WithTags"
        },
        "image": {
          "en-US": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4KLpxtqb8Lv4WIVjPF3JVS"
            }
          }
        },
        "imageTags": {
          "en-US": [
            "Cup",
            "Beverage",
            "Coffee",
            "Coffee Cup"
          ]
        }
      }
    }
  ],
  "assets": [
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "73OYdjzfQ0XMkJQDanmbON",
        "type": "Asset",
        "createdAt": "2024-02-28T23:34:23.190Z",
        "updatedAt": "2024-03-06T13:53:47.243Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 10,
        "publishedAt": "2024-03-06T13:53:47.243Z",
        "firstPublishedAt": "2024-02-28T23:34:25.937Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 3,
        "version": 11,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "Amelia's CORE Concept Hoodie"
        },
        "description": {
          "en-US": ""
        },
        "file": {
          "en-US": {
            "url": "//images.ctfassets.net/lhc6dr2kheya/73OYdjzfQ0XMkJQDanmbON/8da80f218d4908adeac414075203ae5f/Untitled_design__31_.png",
            "details": {
              "size": 500730,
              "image": {
                "width": 1920,
                "height": 1080
              }
            },
            "fileName": "Untitled design (31).png",
            "contentType": "image/png"
          }
        }
      }
    },
    {
      "metadata": {
        "tags": [
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "id": "4KLpxtqb8Lv4WIVjPF3JVS",
        "type": "Asset",
        "createdAt": "2024-02-28T23:34:23.193Z",
        "updatedAt": "2024-03-06T13:53:46.858Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2024-03-06T13:53:46.858Z",
        "firstPublishedAt": "2024-02-28T23:34:25.316Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "publishedCounter": 2,
        "version": 6,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "Jim's legendary coffee mug"
        },
        "description": {
          "en-US": ""
        },
        "file": {
          "en-US": {
            "url": "//images.ctfassets.net/lhc6dr2kheya/4KLpxtqb8Lv4WIVjPF3JVS/8e4b811a747b72cbd9364cfe111877e3/Untitled_design__27_.png",
            "details": {
              "size": 441580,
              "image": {
                "width": 1920,
                "height": 1080
              }
            },
            "fileName": "Untitled design (27).png",
            "contentType": "image/png"
          }
        }
      }
    }
  ],
  "locales": [
    {
      "name": "English (United States)",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0TcYj5N3eB5GiGKDypjcBD",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "master",
            "uuid": "faa5510b-4ec8-4e25-aeab-51a9e547ae81"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "createdAt": "2024-02-28T23:29:17Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedAt": "2024-02-28T23:29:17Z"
      }
    }
  ],
  "webhooks": [
    {
      "name": "Vercel - Deploy a site",
      "url": "https://api.vercel.com/v1/integrations/deploy/prj_34lNgp8OWvKXVdeHVcAfkwEiVq0O/urH3WTw03p",
      "httpBasicUsername": null,
      "topics": [
        "Entry.publish",
        "Asset.publish",
        "Entry.unpublish",
        "Asset.unpublish"
      ],
      "filters": [
        {
          "equals": [
            {
              "doc": "sys.environment.sys.id"
            },
            "master"
          ]
        }
      ],
      "transformation": {
        "contentType": "application/json"
      },
      "active": true,
      "sys": {
        "type": "WebhookDefinition",
        "id": "01IodrAmEAf8ONWZ9T0z4T",
        "version": 2,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "createdAt": "2024-03-13T04:13:43Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedAt": "2024-03-13T04:24:42Z"
      },
      "headers": [
      ]
    }
  ],
  "roles": [
    {
      "name": "Author",
      "description": "Allows editing of content",
      "policies": [
        {
          "effect": "allow",
          "actions": [
            "create"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "create"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0TwRTIUyqQUasF5pILxgup",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "createdAt": "2024-02-28T23:29:17Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedAt": "2024-02-28T23:29:17Z"
      }
    },
    {
      "name": "Editor",
      "description": "Allows editing, publishing and archiving of content",
      "policies": [
        {
          "effect": "allow",
          "actions": "all",
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": "all",
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0TxsSYhYPIokAyKnqyZOy9",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "createdAt": "2024-02-28T23:29:17Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedAt": "2024-02-28T23:29:17Z"
      }
    },
    {
      "name": "Translator",
      "description": "Allows editing of localized fields in the specified language",
      "policies": [
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              },
              {
                "paths": [
                  {
                    "doc": "fields.%.%"
                  }
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              },
              {
                "paths": [
                  {
                    "doc": "fields.%.%"
                  }
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0TxZazSmj0J2dkpFMQCCKV",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "lhc6dr2kheya"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "createdAt": "2024-02-28T23:29:17Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0MXb1ol8E91pzl4r8IzFQp"
          }
        },
        "updatedAt": "2024-02-28T23:29:17Z"
      }
    }
  ]
}