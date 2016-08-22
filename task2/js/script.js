var nameArr = new Array;
var nameLogin;
var message = 'Такого имени в системе нет';

for (var i=0; i<5; i++){
    var userCount = 'Введите имя пользователя '+(i+1);
    nameArr[i] = prompt(userCount,'');
}
nameLogin = prompt('Введите имя для входа в систему','');

for (var i = 0; i < nameArr.length; i++) {
    if (nameLogin == nameArr[i]) {
        message = nameLogin + ', вы успешно вошли';
        break;
    };

};
alert(message);


