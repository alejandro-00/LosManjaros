$( document ).ready(function() {

var container_3_images = document.getElementById('container-3-images');
var container_1_image = document.getElementById('container-1-image');
var container_4_images = document.getElementById('container-4-images');
  $.get("php/pnf.php", function(datos){
    var a1=document.createElement('a');

    a1.setAttribute('href',datos[1].LINK)
    var a2=document.createElement('a');
    a2.setAttribute('href',datos[2].LINK)
    var a3=document.createElement('a');
    a3.setAttribute('href',datos[3].LINK)
    var a4=document.createElement('a');
    a4.setAttribute('href',datos[3].LINK)
    var a5=document.createElement('a');
    a5.setAttribute('href',datos[4].LINK)
    var a6=document.createElement('a');
    a6.setAttribute('href',datos[5].LINK)
    var a7=document.createElement('a');
    a7.setAttribute('href',datos[6].LINK)
    var a8=document.createElement('a');
    a8.setAttribute('href',datos[7].LINK)



    var div_3_1_image = document.createElement('div');

    div_3_1_image.className = 'col-4 p-0';
    var image_3_1 = document.createElement('img');
    image_3_1.className = 'img-responsive img-fluid';
    image_3_1.setAttribute('src', datos[1].IMG);
    var div_3_2_image = document.createElement('div');
    div_3_2_image.className = 'col-4 p-0';
    var image_3_2 = document.createElement('img');
    image_3_2.className = 'img-responsive img-fluid';
    image_3_2.setAttribute('src', datos[2].IMG);
    var div_3_3_image = document.createElement('div');
    div_3_3_image.className = 'col-4 p-0';
    var image_3_3 = document.createElement('img');
    image_3_3.className = 'img-responsive img-fluid';
    image_3_3.setAttribute('src', datos[3].IMG);

    container_3_images.appendChild(a1);
    a1.appendChild(div_3_1_image);
    div_3_1_image.appendChild(image_3_1);
    a2.appendChild(div_3_2_image);
    container_3_images.appendChild(a2);
    a2.appendChild(div_3_2_image);
    div_3_2_image.appendChild(image_3_2);
    container_3_images.appendChild(a3);
    a3.appendChild(div_3_3_image);
    div_3_3_image.appendChild(image_3_3);

    var image_1_1 = document.createElement('img');
    image_1_1.className = 'img-responsive img-fluid img-central-large';
    image_1_1.setAttribute('src', datos[0].IMG);
    container_1_image.appendChild(image_1_1);
    container_1_image.setAttribute('onclick',"window.location="+datos[0].LINK)

    var card_4_1 = document.createElement('div');
    card_4_1.className = 'card';
    var card_img_top_4_1 = document.createElement('img');
    card_img_top_4_1.className = 'card-img-top';
    card_img_top_4_1.setAttribute('src',datos[4].IMG);
    var card_body_4_1 = document.createElement('div');
    card_body_4_1.className = 'card-body';
    var p_4_1 = document.createElement('p');
    p_4_1.className = 'font-title-card';

    container_4_images.appendChild(card_4_1);
    card_4_1.appendChild(card_img_top_4_1);
    card_4_1.appendChild(card_body_4_1);
    card_body_4_1.appendChild(p_4_1);

    var card_4_2 = document.createElement('div');
    card_4_2.className = 'card';
    var card_img_top_4_2 = document.createElement('img');
    card_img_top_4_2.className = 'card-img-top';
    card_img_top_4_2.setAttribute('src',datos[5].IMG);
    var card_body_4_2 = document.createElement('div');
    card_body_4_2.className = 'card-body';
    var p_4_2 = document.createElement('p');
    p_4_2.className = 'font-title-card';

    container_4_images.appendChild(card_4_2);
    card_4_2.appendChild(card_img_top_4_2);
    card_4_2.appendChild(card_body_4_2);
    card_body_4_2.appendChild(p_4_2);

    var card_4_3 = document.createElement('div');
    card_4_3.className = 'card';
    var card_img_top_4_3 = document.createElement('img');
    card_img_top_4_3.className = 'card-img-top';
    card_img_top_4_3.setAttribute('src',datos[6].IMG);
    var card_body_4_3 = document.createElement('div');
    card_body_4_3.className = 'card-body';
    var p_4_3 = document.createElement('p');
    p_4_3.className = 'font-title-card';

    container_4_images.appendChild(card_4_3);
    card_4_3.appendChild(card_img_top_4_3);
    card_4_3.appendChild(card_body_4_3);
    card_body_4_3.appendChild(p_4_3);

    var card_4_4 = document.createElement('div');
    card_4_4.className = 'card';
    var card_img_top_4_4 = document.createElement('img');
    card_img_top_4_4.className = 'card-img-top';
    card_img_top_4_4.setAttribute('src',datos[7].IMG);
    var card_body_4_4 = document.createElement('div');
    card_body_4_4.className = 'card-body';
    var p_4_4 = document.createElement('p');
    p_4_4.className = 'font-title-card';

    container_4_images.appendChild(card_4_4);
    card_4_4.appendChild(card_img_top_4_4);
    card_4_4.appendChild(card_body_4_4);
    card_body_4_4.appendChild(p_4_4);

  });
});
