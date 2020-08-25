/**
  *
  * main() will be run when you invoke this action
  *
  * Создать заявку на получение кредита
  *
  * @see https://old.bank.gov.ua/control/uk/publish/article?art_id=38441973&cat_id=38459171#exchange
  *
  * @param {object} a_params - параметры запроса
  * @param {object} a_params.mtype 'loanreq',
  * @param {object} a_params.idcust: 133,
  * @param {object} a_params.cust_message: 'No additional messages',
  * @param {object} a_params.cust_email: 'bober@gmail.com',
  * @param {object} a_params.cust_phone: '+380502223344',
  * @param {object} a_params.loan_type: 'mortage',
  * @param {object} a_params.loan_amount: 5000000,
  * @param {object} a_params.loan_term: 38,
  * @param {object} a_params.loan_collat_dsc: 'Дача по адрему Матроскина 1 линия 4 будет залогом',
  */

const axios = require('axios');

// Заголовки по умолчанию
const i_headers = { 'Content-Type': 'application/json',
		            'accept': 'application/json'
};
const i_url = 'https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/91e529118bfb5f46541b4422daacee3ea284449080eb55743ab34ee9a32461c7/bnkapi-loan/loan';

const i_logid = 'bnkapi-loanreq/createLoanreq: ';

function main(a_params) {
    var l_step='';
    l_step = i_logid + 'Старт';
    console.log(l_step);
    console.log(l_step + 'проверяю входные параметры');   
    if ( !isDefined(a_params) ){
            var err = new Error(i_logid + 'Не передан параметр a_params') ;
            throw err;
    } 


    let l_reqparams = {  headers: i_headers };
    let l_data = a_params ;
    
    l_step = i_logid + 'Вызываю сервис: [' + i_url + ']';
    console.log(l_step );    
    return  axios.post(i_url, l_data, l_reqparams)
	.then ( result_exch => {
	    if (result_exch.status === 201) {
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
	});
}

	/**
	 * Проверяет, что переменная на undefined и не null
	 * если OK возвразает true, если не сложилось - false
	 * @param {any} p_value любая переменная
	 * @returns {boolean} l_result результат проверки переменной 
	 */
function isDefined(p_value) {
		let l_result = true ;
		if (typeof p_value === "undefined"){
			l_result=false;
		} else if ( p_value === null){
			l_result=false;
		} else {
			// do nothing
		};
		return l_result ;     
}

exports.main = main;


