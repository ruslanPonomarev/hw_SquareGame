let ptop = 0;
let pleft = 0;

document.addEventListener("click", function(e) {
    console.log(e.target);
    if (e.target.className=="btn downBtn" && ptop<150) {
        if (pleft>0 && pleft<100 && ptop>=0 && ptop<=0) {
        } else {
            if (pleft>100 && pleft<200 && ptop>=100 && ptop<=200) {
            } else {            
                ptop = ptop+10;
                document.getElementsByClassName('square')[0].style.top = ptop+'px';
            }
        }   
    }
    if (e.target.className=="btn upBtn" && ptop>0) {
        if (pleft>0 && pleft<100 && ptop>=50 && ptop<=100) {
        } else {
            if (pleft>100 && pleft<200 && ptop>=150 && ptop<=150) {
            } else {
                ptop = ptop-10;
                document.getElementsByClassName('square')[0].style.top = ptop+'px';
            }
        }
    }
    if (e.target.className=="btn rightBtn" && pleft<250) {
        if (pleft>=0 && pleft<=0 && ptop>0 && ptop<100) {
        } else {
            if (pleft>=100 && pleft<200 && ptop>100 && ptop<200) {
            } else {
                pleft = pleft+10;
                document.getElementsByClassName('square')[0].style.left = pleft+'px';
            }
        }
    }
    if (e.target.className=="btn leftBtn" && pleft>0) {
        if (pleft>50 && pleft<=100 && ptop>0 && ptop<100) {
        } else {
            if (pleft>100 && pleft<=200 && ptop>100 && ptop<200) {
            } else {
                pleft = pleft-10;
                document.getElementsByClassName('square')[0].style.left = pleft+'px';
            }
        }
    }
    console.log(ptop, pleft);
  });