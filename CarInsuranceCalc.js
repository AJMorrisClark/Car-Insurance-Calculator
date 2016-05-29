
 $(document).ready(function() {
    $(".total").text("Total: $0 /month");
  
$('input,select').on('change', refreshTotal);
function refreshTotal() {
    var sex = +$('input[name="sex"]:checked', '#sex').val();
    var age = +$('input[name="age"]:checked', '#age').val();
    var car = +$('#car').val();
    var year = +$('#year').val();
    var citations = +$('#citations').val();

    if (isNaN(sex)) sex = 0;
    if (isNaN(age)) age = 0;
    if (isNaN(car)) car = 0;
    if (isNaN(year)) year = 0;
    if (isNaN(citations)) citations = 0;

    var total = sex + age + car + year + citations;
    $(".total").text("Total: $" + total + " /month");
}
});