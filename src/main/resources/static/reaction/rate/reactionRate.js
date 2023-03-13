  let divBox = document.querySelector('#box');
    divBox.addEventListener('mousedown',fn_startClick);
    document.querySelector('#reset').addEventListener('click',fn_reset);
    let sum = 0;
    let cnt = 0;
    let avg = 0;
    let flag = false
    let runFlag = false
    let startTime;
    let timeOut;
    let p = document.querySelector('#box_p')

    let best = 999999;
    function fn_startClick(){
        let resultTime;
        if(runFlag && flag){
            resultTime = new Date() - startTime;
            p.innerText=resultTime+'ms'
            divBox.style.backgroundColor=''
            flag = false;
            runFlag = false;
            p.style.color=''
            if(cnt == 0){
                document.querySelector('#resultList').innerText+=resultTime
            }
            else {
                document.querySelector('#resultList').innerText+=", "+resultTime
            }
            cnt++;
            sum += resultTime
            avg = sum/cnt;

            document.querySelector('#avg').innerText='avg : '+Math.floor(avg);
            if(resultTime < best){
                best=resultTime;
                document.querySelector('#best').innerText='best : '+ resultTime;
            }
            document.querySelector('#reset').disabled=false
            return;
        }
        if(runFlag){
            flag = false;
            runFlag = false;
            clearTimeout(timeOut);
            divBox.style.backgroundColor=''
            p.innerText='FAIL'
            p.style.color='black'
            document.querySelector('#reset').disabled=false
            return;
        }

        if(flag==false){
            p.style.color=''
            p.innerText='WAIT'
            document.querySelector('#reset').disabled=true
            const random = Math.floor(Math.random()*2000+1000);
            runFlag=true;
            timeOut=setTimeout(function(){
                p.innerText='CLICK!!!!'
                p.style.color='white'
                divBox.style.backgroundColor='#00FF00'
                flag = true;
                clearTimeout(timeOut);
                setTimeout(() => {
                    startTime = new Date();
                    clearTimeout();
                }, 0);
            },random);
        }
    }
    function fn_reset(){
        sum = 0;
        cnt = 0;
        avg = 0;
        best = 9999;
        document.querySelector('#avg').innerText='avg : '
        document.querySelector('#best').innerText='best : '
        document.querySelector('#resultList').innerText='record : '
     }