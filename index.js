const client = contentful.createClient({
    space: 'c3yfente4cah',
    accessToken: '4pHtlonQbFIAAP4Hhi5d8kNIiYwU8rLtYcrqSBAuqz8',
});

var markup = '';

client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
        if (entry.fields.name) {
            markup +=
                "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='https://" +
                entry.fields.featuredImage.fields.file.url +
                "'/><h1 class='title'>" +
                entry.fields.name +
                "</h1><hr /></div><div class='flip-card-back'><p>" +
                entry.fields.description +
                '</p></div></div></div>';
        }
    });
    document.querySelector('.header__card-container').innerHTML = markup;
});
