import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import '../lib/selectize';
import '../lib/maskedinput.js';


$('select').selectize({
  sortField: 'text'
});

$('.phone').mask('+38 (999) 999-9999');
