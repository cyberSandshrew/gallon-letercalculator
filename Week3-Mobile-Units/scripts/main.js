//Jerry French
//7/13/22
//csc 350 Week 3 Lab 3
function update(){
    var selectUnits=$("#selectUnits option:selected").text();//jquery needed for operation
    var units=$("#units").val();
    var result=$("#result");
    const LITERS=3.78541;
    const GALLONS=0.264172;

    if(units.length===0 || units<1 || units>500 || $.isNumeric(units)===false){
        $('#unitsInvalid').text('Please Enter a Valid Number.');
    }else{
        $('#unitsInvalid').text('');
        let convert=(selectUnits=='Gallons'?units*LITERS + ' Liters': units*GALLONS + ' Gallons');//one line if else
        result.text(units + '  ' + selectUnits + ' converts to  ' + convert);
    }
}