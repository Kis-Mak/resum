function myFunction() {
    document.getElementById("demo").innerHTML = "Вау, это действительно работает!";
}

function showTime() {
    document.getElementById('time').innerHTML = Date();
}

function MyAlert() {
    window.alert('Та самая птичка)')
}

$one = 'Это должно ';
$two = 'прибавиться к этому ';
$log = 'и отобразиться в логе';
$result = $one + $two;

console.log('Эта надпись должна отобразиться в f12 - console');
console.log('Интересно, как выводить в лог переменную?!');
console.log($result + $log);

