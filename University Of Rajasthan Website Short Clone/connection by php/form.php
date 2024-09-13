<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />



    <title>Forms</title>
</head>
<body class="bg-dark">
    <div class="text-center mt-2">
        <h1 class="text-light">Form</h1>
    </div>
    <form action="code.php" method="POST">
        <div class="container mt-5 border rounded-4 p-5 col-6">
        <div class="my-3 p-5 py-2 row">
            <label for="name" class="col-sm-2 col-form-label text-light">Name</label>
            <div class="col-sm-10">
                <input type="text" name="stud_name" class="form-control" id="name">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="classname" class="col-sm-2 col-form-label text-light">email</label>
            <div class="col-sm-10">
                <input type="text" name="stud_email" class="form-control" id="classname">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="mobile" class="col-sm-2 col-form-label text-light">Mobile</label>
            <div class="col-sm-10">
                <input type="text" name="stud_mobile" class="form-control" id="mobile">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="class" class="col-sm-2 col-form-label text-light">Class</label>
            <div class="col-sm-10">
                <input type="text" name="stud_class" class="form-control" id="class">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="address" class="col-sm-2 col-form-label text-light">School</label>
            <div class="col-sm-10">
                <input type="text" name="stud_school" class="form-control" id="address">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="address" class="col-sm-2 col-form-label text-light">Address</label>
            <div class="col-sm-10">
                <input type="text" name="stud_address" class="form-control" id="address">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="city" class="col-sm-2 col-form-label text-light">City</label>
            <div class="col-sm-10">
                <input type="text" name="stud_city" class="form-control" id="city">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="pincode" class="col-sm-2 col-form-label text-light">State</label>
            <div class="col-sm-10">
                <input type="number" name="stud_state" class="form-control" id="pincode">
            </div>
        </div>
        <div class="my-3 p-5 py-2 row">
            <label for="pincode" class="col-sm-2 col-form-label text-light">Pincode</label>
            <div class="col-sm-10">
                <input type="number" name="stud_pincode" class="form-control" id="pincode">
            </div>
        </div>
       
        <div class="m-5 mt-0">
            <button type="submit" name="samyak_form_submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
    </form>


</body>
</html>