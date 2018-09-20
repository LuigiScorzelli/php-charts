<?php include'data.php'; $json = json_encode($data); $json1 = json_encode($graphs);?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>CHART-PHP</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
  </head>
  <body>

    <div id="containerGrafic" data-sales_json = '<?php echo $json1; ?>'>
      <canvas id="graficLine" width="600" height="600"></canvas>
    </div>

    <div id="graficPie" data-sales_json ='<?php echo $json1; ?>'>
      <canvas id="graficAgent" width="600" height="600"></canvas>
    </div>


    <script src="main.js"></script>
  </body>
</html>
