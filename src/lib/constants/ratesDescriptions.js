export const getRates = [
    {
        name: 'AppID',
        description: 'Your FlavorCloud application id.',
        types: ['string'],
        required: true,
    },
    {
        name: 'RestApiKey',
        description: 'The REST API Key of your FlavorCloud account.',
        types: ['string'],
        required: true,
    },
    {
        name: 'CustomerKey',
        description: 'The customers key',
        types: ['string'],
        required: false,
    },
    {
        name: 'Reference',
        description: 'This field is for your reference. A good use of it would be your order number. This value must be unique.',
        types: ['string'],
        required: true,
    },
    {
        name: 'LabelFormat',
        description: 'The file type you want your label printed',
        types: ['string'],
        required: false,
        default: 'PDF',
        options: ['PDF'],
    },
    {
        name: 'WeightUnit',
        description: 'Unit for weight of the shipment',
        types: ['string'],
        required: true,
        default: 'KG',
        valueOptions: ['KG', 'LB']
    },
    {
        name: 'Currency',
        description: 'Currency for the rate',
        types: ['string'],
        required: true,
        valueOptions: ['USD']
    },
    {
        name: 'DimensionUnit',
        description: 'Unit of measurement for dimensions of the shipment.',
        types: ['string'],
        required: true,
        default: 'IN',
        valueOptions: ['IN', 'CM']
    },
    {
        name: 'Insurance',
        description: 'Specify if insurance is required.',
        types: ['string'],
        required: true,
        default: 'N',
        valueOptions: ['Y', 'N']
    },
    {
        name: 'ServiceCode',
        description: 'The type of shipping methods to seek rates for. You must provide an array with 2 of the options as values.',
        types: ['enum<ServiceCode>[]'],
        required: true,
        valueOptions: ['STANDARD', 'EXPRESS', 'ECONOMY']
    },
    {
        name: 'TermsofTrade',
        description: 'The trade terms for which you are requesting rate quotes. DDP rates cannot be provided without HS Code for all products being shipped.',
        types: ['enum<TermsOfTrade>[]'],
        required: true,
        valueOptions: ['DDP', 'DDU']
    },
    {
        name: 'IsReturn',
        description: 'You can easily create return labels. Set this value to "Y", set the addresses to the same values from the initial shipment and the API will swap your addresses to the correct To and From addresses for the return to process.',
        types: ['string'],
        default: 'N',
        options: ['Y', 'N'],
    },
    {
        name: 'IncludeLandedCost',
        description: 'This includes the landed cost of shipping for DDP rates. This is required for DDP shipments',
        types: ['boolean'],
        default: true,
    },
    {
        name: 'ReasonForExport',
        description: 'State the key rason for the shipment.',
        types: ['string'],
        required: true,
        default: 'merchandise',
        options: ['documents', 'gift', 'merchandise', 'returned_goods', 'sample', 'other']
    },
    {
        name: 'ShipFromAddress',
        description: 'Address the parcel is being shipped from',
        types: ['object<Address>'],
        required: true,
        properties: [
            {
                name: 'Name',
                description: 'Name of person receiving parcel. Both name and company can be included. Maximum length of 20 characters.',
                types: ['string'],
                required: true,
            },
            {
                name: 'AttentionName',
                description: 'Name of attention, if a person. Maximum length is 20 characters.',
                types: ['string'],
                required: true,
            },
            {
                name: 'AddressLine1',
                description: 'First line of the address. Maximum length is 35 characters.',
                types: ['string'],
                required: true
            },
            {
                name: 'AddressLine2',
                description: 'Second line of the address. Maximum length is 35 characters.',
                types: ['string'],
                required: false
            },
            {
                name: 'AddressLine3',
                description: 'Third line of the address. Maximum length is 35 characters.',
                types: ['string'],
                required: false
            },
            {
                name: 'City',
                description: 'Full city name',
                types: ['string'],
                required: true
            },
            {
                name: 'State',
                description: 'ISO 3166-2 State or Province Code Only.',
                types: ['string'],
                required: false
            },
            {
                name: 'Country',
                description: 'ISO 3166 country code for the country the address is located in. See https://www.iso.org/iso-3166-country-codes.html',
                types: ['string'],
                required: true
            },
            {
                name: 'Zip',
                description: 'Zip or postal code',
                types: ['string'],
                required: false
            },
            {
                name: 'Phone',
                description: 'Phone number to reach the person or organization',
                types: ['string'],
                required: true
            },
            {
                name: 'Email',
                description: 'Email to reach the person or organization',
                types: ['string'],
                required: true
            },
        ]
    },
    {
        name: 'ShipToAddress',
        description: 'Address the parcel is being shipped from',
        types: ['object<Address>'],
        required: true,
        properties: [
            {
                name: 'Name',
                description: 'Name of person receiving parcel. Both name and company can be included. Maximum length of 20 characters.',
                types: ['string'],
                required: true,
            },
            {
                name: 'AttentionName',
                description: 'Name of attention, if a person. Maximum length is 20 characters.',
                types: ['string'],
                required: true,
            },
            {
                name: 'AddressLine1',
                description: 'First line of the address. Maximum length is 35 characters.',
                types: ['string'],
                required: true
            },
            {
                name: 'AddressLine2',
                description: 'Second line of the address. Maximum length is 35 characters.',
                types: ['string'],
                required: false
            },
            {
                name: 'AddressLine3',
                description: 'Third line of the address. Maximum length is 35 characters.',
                types: ['string'],
                required: false
            },
            {
                name: 'City',
                description: 'Full city name',
                types: ['string'],
                required: true
            },
            {
                name: 'State',
                description: 'ISO 3166-2 State or Province Code Only.',
                types: ['string'],
                required: false
            },
            {
                name: 'Country',
                description: 'ISO 3166 country code for the country the address is located in. See https://www.iso.org/iso-3166-country-codes.html',
                types: ['string'],
                required: true
            },
            {
                name: 'Zip',
                description: 'Zip or postal code',
                types: ['string'],
                required: false
            },
            {
                name: 'Phone',
                description: 'Phone number to reach the person or organization',
                types: ['string'],
                required: true
            },
            {
                name: 'Email',
                description: 'Email to reach the person or organization',
                types: ['string'],
                required: true
            },
        ]
    }, 
    {
        name: 'Pieces',
        description: 'The individual items being shipped',
        types: ['object<Piece>[]'],
        required: true,
        properties: [
            {
                name: 'Quantity',
                description: 'Number of items',
                types: ['decimal'],
                required: true,
            },
            {
                name: 'Weight',
                description: 'Weight of the piece',
                types: ['decimal'],
                required: true,
            },
            {
                name: 'Length',
                description: 'Length of the parcel',
                types: ['decimal'],
                required: false,
            },
            {
                name: 'Width',
                description: 'Width of the parcel',
                types: ['decimal'],
                required: false,
            },
            {
                name: 'Height',
                description: 'Number of items. ',
                types: ['decimal'],
                required: false,
            },
            {
                name: 'SalePrice',
                description: 'Price of the item',
                types: ['decimal'],
                required: true,
            },
            {
                name: 'HSCode',
                description: 'HS Code for the item',
                types: ['string'],
                required: true,
            },
            {
                name: 'OriginCountryCode',
                description: 'Origin country of manufacturing',
                types: ['string'],
                required: true,
            },
            {
                name: 'Description',
                description: 'Description of the item',
                types: ['string'],
                required: true,
            },
            {
                name: 'SKU',
                description: 'Product SKU',
                types: ['string'],
                required: false,
            },
            {
                name: 'Material',
                description: 'Material the item is made of',
                types: ['string'],
                required: false,
            },
            {
                name: 'Category',
                description: '???',
                types: ['string[]'],
                required: false,
            },
        ],
    },
    {
        name: 'Package',
        description: 'Information about the package containing pieces for shipment.',
        types: ['object<Package>'],
        required: true,
        properties: [
            {
                name: 'Weight',
                description: 'Total actual (scaled) weight of the package',
                types: ['decimal'],
                required: true,
            },
            {
                name: 'Length',
                description: 'Length of the package when empty',
                types: ['decimal'],
                required: false,
            },
            {
                name: 'Width',
                description: 'Width of the package when empty',
                types: ['decimal'],
                required: false,
            },
            {
                name: 'Height',
                description: 'Height of the package when empty',
                types: ['decimal'],
                required: false,
            },
        ]
    }
];

