/*
*
*/ 
 
 
const mocha = require('mocha');
const request = require('supertest');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

var vfunc = require('../src/createLoanreq');
var test_env_lr = true ;


describe('Заявки на создание кредита API', function() {
  let test_server;
  let app;
  this.timeout(0);

 
  it('create:Loanreq:' + ' Ожидается создание заявки на получение кредита', function(done){

    var l_req={ 
      mtype: 'loanreq',
      idcust: 133,
      cust_message: 'No additional messages',
      cust_email: 'bober@gmail.com',
      cust_phone: '+380502223344',
      loan_type: 'mortage',
      loan_amount: 5000000,
      loan_term: 38,
      loan_collat_dsc: 'Дача по адрему Матроскина 1 линия 4 будет залогом',
    };     

    if (test_env_lr) {
      console.log('Запрос: ');
      console.log( JSON.stringify(l_req) );
      console.log('Ответ: ');
    }  
    vfunc.main(  l_req  )
    .then (res => {
        res.should.have.property('ok');
        res.ok.should.equal(true);
        res.rdata.should.have.property('id');
        expect( res.rdata.id).to.be.a('string');

        if (test_env_lr) {
                console.log( JSON.stringify(  res  )  );
        }    
        done();

    })
     .catch ( err => {
            console.log(err.message);
            done(err);
     
    });
  });  //it



  // end of test
 
});