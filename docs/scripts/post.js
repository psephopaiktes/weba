"use strict";document.addEventListener("DOMContentLoaded",function(e){hljs.initHighlightingOnLoad();});document.addEventListener("DOMContentLoaded",function(e){var links=document.links;for(var i=0;i<links.length;i++){if(links[i].hostname!=window.location.hostname){console.log(i+':'+links[i]);links[i].target='_new';links[i].rel='noopener';}}});document.addEventListener("DOMContentLoaded",function(e){var contentList=document.getElementById('contentList'),contentHeader=document.querySelectorAll('article h2');if(contentList){contentList.classList.add('view');[].forEach.call(contentHeader,function(elm,i){elm.id='content-'+i;var contentItem=document.createElement('li');contentItem.innerHTML='<a href="#content-'+i+'">'+elm.innerText+'</a>';contentList.querySelector('ol').appendChild(contentItem);elm.insertAdjacentHTML('afterend','<a class="backContentList" href="#contentList">▲ 目次へ戻る</a>');});}});