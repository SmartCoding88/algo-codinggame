<?php
function closestToZero(array $ints) {

    if(empty($ints)){
        return 0;
    }
    
    $closest = 0;
    
    for ($i = 0; $i < count($ints) ; $i++) {
        if ($closest === 0) {
            $closest = $ints[$i];
        } else if ($ints[$i] > 0 && $ints[$i] <= abs($closest)) {
            $closest = $ints[$i];
        } else if ($ints[$i] < 0 && -$ints[$i] < abs($closest)) {
            $closest = $ints[$i];
        }
    }
    
    return $closest;
    
    
}
  
?>
