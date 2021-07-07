<html>
<head></head>
<body>
    <form action="" method="get">
        <input type="text" name="total_path" placeholder="تعداد کل خانه ها">
        <input type="text" name="number_path_rainy" placeholder="تعداد خانه آب گرفته">
        <input type="text" name="number_jump" placeholder="تعداد پرش ها">
        <input type="submit" value="start">
    </form>
    </br>

</body>
</html>

<?php


// set an array with "total_path" size and as default all value is dry !
$array = array_fill(1, $_GET["total_path"], 'dry');

// define random element with size of input "number_path_rainy"
$rand_keys = array_rand($array, $_GET["number_path_rainy"]);


echo "فهرست خانه های آب گرفته : ";
echo "<hr>";

// regonize rainy value with selected random element
foreach($rand_keys as $rand){
    echo $rand.",";
    $array[$rand] = 'rainy';
}

echo "</br><hr>";

// define number of jump with input size and do jumping while all jump finished !

$jump=$_GET["number_jump"];

//set counter for define index of array
$i = 1;

//set counter for define number of jump
$j = 1;

echo "خانه های پرش";
echo "<hr>";

while($jump>0){

    $i = $i+4;

    //check size of array with jumping index
    if( $i <= count($array)){
    }else{
        $i = $i - count($array);
        
    }

    echo $i.",";

    //check the situation of each element "dry or rainy"
    if($array[$i]=='dry'){
        $jump--;
        $j++;
    }else{
        continue;
    }

}


?>
