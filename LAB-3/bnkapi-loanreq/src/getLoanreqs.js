/**
  *
  * main() will be run when you invoke this action
  * Сервис получения текущего курса NBU
  *
  * @param НЕТ ПАРАМЕТРОВ
  *
  * @return The output of this action, which must be a JSON object.
  *
  * 
  */
  
const axios = require('axios');

// Заголовки по умолчанию
const i_headers = { 'Content-Type': 'application/json',
		            'accept': 'application/json'
};
// url сервиса на получение  текущего курса
const i_url = 'https://a7275984.eu-gb.apigw.appdomain.cloud/bnkapi-loan/loan';
const i_logid = 'bankapi/Loanreq: ';
function main(params) {
    var l_step='';
    l_step = i_logid + 'Старт';
    console.log(l_step);
    let l_reqparams = {  headers: i_headers };
    l_step = i_logid + 'Вызываю сервис: [' + i_url + ']';
    console.log(l_step);
    return  axios.get(i_url, l_reqparams)
	.then ( result_exch => {
	    if (result_exch.status === 200) {
	        l_step = i_logid + 'Сервис вернул успешный статус: [' + result_exch.status.toString() + ']';
            console.log(l_step);
	   } else {
	        l_step = i_logid + 'Сервис вернул статус - ошибку: [' + result_exch.status.toString() + ']';
            console.log(l_step);
            throw new Error(l_step);

	   } 
	   l_step = i_logid + 'Возвращаю ответ' ;
       console.log(l_step);
	   var result_ok={ ok: true,rdata: result_exch.data};
	   return Promise.resolve(   result_ok );
	   
	})
	.catch ( err => {
	    l_step = i_logid + 'Возвращаю ответ с ошибкой!' ;
        console.log(l_step);
	    var result_err={ ok: false, error: err ,rdata: null};
	    return Promise.reject(  result_err );
	})
}

exports.main = main;