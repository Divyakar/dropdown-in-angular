app.filter('search', function () {
    return function (items, letter) {
        var filtered = [];
        if (letter == undefined || letter == '') {
            if (items) {
                return items;
            } else {
                return [];
            }
        }
        letter = letter.toUpperCase();
        for (var i = 0; i < items.length; i++) {
            if (items[i].value.toUpperCase().startsWith(letter) ||
                items[i].key.toUpperCase().startsWith(letter)) {
                filtered.push(items[i]);
            }
        }
        return filtered;
    };
});