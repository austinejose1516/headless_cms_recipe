// Fetching data from Contentful using Space ID and Access Token
const client = contentful.createClient({
    space: 'c3yfente4cah',
    accessToken: '4pHtlonQbFIAAP4Hhi5d8kNIiYwU8rLtYcrqSBAuqz8',
});

// Calling API
var markup = '';
client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
        if (entry.fields.name) {
            markup +=
                "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='https://" +
                entry.fields.featuredImage.fields.file.url +
                "'/><h1 class='heading-primary__card-title'>" +
                entry.fields.name +
                "</h1><hr /></div><div class='flip-card-back'><p class='heading-primary__card-body'>" +
                entry.fields.description +
                '</p></div></div></div>';
        }
    });
    document.querySelector('.header__card-container').innerHTML = markup;
});
