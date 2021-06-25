/** Task3 */

var infoList = [{
        id: 1,
        name: 'Манчестер Юнайтед',
        yearFoundation: 1878,
        championsLeague: [1968, 1999, 2008],
        europaLeague: [2017]
    },
    {
        id: 2,
        name: 'Барселона',
        yearFoundation: 1899,
        championsLeague: [1992, 2006, 2009, 2011, 2015],
        europaLeague: []
    },
    {
        id: 3,
        name: 'ПСЖ',
        yearFoundation: 1970,
        championsLeague: [],
        europaLeague: []
    },
    {
        id: 4,
        name: 'Ювентус',
        yearFoundation: 1897,
        championsLeague: [1985, 1996],
        europaLeague: []
    },
    {
        id: 5,
        name: 'Бавария',
        yearFoundation: 1900,
        championsLeague: [1974, 1975, 1976, 2001, 2013, 2020],
        europaLeague: []
    }
];

var select = document.querySelector('.browser-default');
var clubInfo = document.querySelector('.club-info');
var img = document.querySelector('.club-image').firstElementChild;
var divLable = document.querySelector('.imges');
var imgLable = divLable.querySelectorAll('img');

divLable.style.display = 'none';

select.addEventListener('click', function () {
    for (var i = 0; i < infoList.length; i++) {
        if (Number(select.value) === infoList[i].id) {
            for (var l = 0; l < imgLable.length; l++) {
                if (select.value === imgLable[l].dataset.lable) {
                    var linkFoto = imgLable[l].getAttribute('src');
                    img.setAttribute('src', linkFoto);
                }
            }
            if (infoList[i].championsLeague.length === 0) {
                infoList[i].championsLeague = 'На данный момент нет кубков';
            }
            if (infoList[i].europaLeague.length === 0) {
                infoList[i].europaLeague = 'На данный момент нет кубков';
            }
            clubInfo.innerHTML = `
                            <h5>${infoList[i].yearFoundation}</h5>
                            <h5>${infoList[i].championsLeague}</h5>
                            <h5>${infoList[i].europaLeague}</h5>
                            `.trim();
        }
    }
});

// Task 4.

var btn = document.querySelector('a.waves-effect');
var tbody = document.querySelector('tbody');
var td = tbody.querySelectorAll('td');

btn.addEventListener('click', function () {
    tbody.innerHTML = '';
    var arr = [];
    for (var i = 0; i < td.length; i++) {
        if (Number(td[i].textContent)) {
            var obj = {
                age: td[i].textContent,
                name: td[i].nextElementSibling.textContent
            };
        } else {
            continue;
        }
        arr.push(obj);
        arr.sort(function (a, b) {
            return a.age - b.age;
        });
    }
    for (var a = 0; a < arr.length; a++) {
        tbody.innerHTML += `<tr>
                               <td>${arr[a].age}</td>
                               <td>${arr[a].name}</td>
                           </tr>`;
    }
});





/**Task5 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
];

var list = document.querySelector('#list');
var li = list.querySelectorAll('li');
var input = document.querySelector('input');

input.addEventListener('input', function () {
    list.innerHTML = '';
    for (var i = 0; i < searchList.length; i++) {
        if (input.value === searchList[i].charAt(0)) {
            var newLi = document.createElement('li');
            newLi.textContent = searchList[i];
            list.appendChild(newLi);
        }
    }
    if (input.value === '') {
        for (var j = 0; j < li.length; j++) {
            list.innerHTML += `<li>${li[j].textContent}</li>`;
        }
    }
});
