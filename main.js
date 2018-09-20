$(document).ready(function(){
  var months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

  var sale = $('#containerGrafic').data('sales_json');
  var salesMonths = sale.fatturato.data;

  var agent = sale.fatturato_by_agent.data;
  console.log(agent);


  var grafic = $('#graficLine');

  var cxt = new Chart( grafic, {
    type : 'line',
    data : {
      labels :months,
      datasets : [
        {
          label: 'vendite',
          data : salesMonths,
          backgroundColor: 'rgb(0,128,0)',
          borderColor: 'rgb(255,0,0)'
        }
      ]
    }
  });

  var graficPie = $('#graficAgent');

  var soluction = new Chart(graficPie, {
    type : 'pie',
    data : {
      labels : ['uno','due','tre'],
      datasets : [{
        label : 'vendite',
        data : [23,26,64]
      }]
    }
  });

});
