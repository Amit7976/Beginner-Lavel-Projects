<?php

include 'conn.php';

if (isset($_POST['samyak_form_submit'])) {
    
   
    $stud_name = mysqli_real_escape_string($conn, $_POST['stud_name'])
    $stud_email = mysqli_real_escape_string($conn, $_POST['stud_email'])
    $stud_mobile = mysqli_real_escape_string($conn, $_POST['stud_mobile'])
    $stud_class = mysqli_real_escape_string($conn, $_POST['stud_class'])
    $stud_school = mysqli_real_escape_string($conn, $_POST['stud_school'])
    $stud_address = mysqli_real_escape_string($conn, $_POST['stud_address'])
    $stud_city = mysqli_real_escape_string($conn, $_POST['stud_city'])
    $stud_state = mysqli_real_escape_string($conn, $_POST['stud_state'])
    $stud_pincode = mysqli_real_escape_string($conn, $_POST['stud_pincode'])



    echo $query="INSERT INTO samyak_stud_dtb(stud_name,stud_email,stud_mobile,stud_class,stud_school,stud_address,stud_city,stud_state,stud_pincode) VALUE ('$stud_name','$stud_email','$stud_mobile','$stud_class','$stud_school','$stud_address','$stud_city','$stud_state','$stud_pincode')";

    $query_run = mysqli_query($conn, $query);


    


}



?>