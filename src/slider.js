import * as $ from 'jquery'
import './js/slick/slick'
$(document).ready(function () {
  $('.content__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  })
  $('.content__banner').slick({
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  })
})