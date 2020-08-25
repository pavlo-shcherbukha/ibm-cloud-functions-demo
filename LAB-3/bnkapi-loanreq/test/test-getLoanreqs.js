/*
*
*/ 
 
 
const mocha = require('mocha');
const request = require('supertest');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

var vfunc = require('../src/getLoanreqs');
var test_env_lr = true ;

describe('Заявки на создание кредита API', function() {
  let test_server;
  let app;
  this.timeout(0);


 
  it('getLoanreqs:' + ' Ожидается получить сипсок заявок на получение кредита'', function(done){
    vfunc.main()
    .then (res => {
        res.should.have.property('ok');
        res.ok.should.equal(true);
        expect( res.rdata).to.be.a('array');
        res.rdata.length.should.not.equal(0);
        res.rdata[0].should.have.property('_id');
        res.rdata[0].should.have.property('mtype');
        res.rdata[0].should.have.property('idcust');
        res.rdata[0].should.have.property('cust_message');
        res.rdata[0].should.have.property('cust_email');
        res.rdata[0].should.have.property('cust_phone');
        res.rdata[0].should.have.property('loan_type');
        res.rdata[0].should.have.property('loan_amount');
        res.rdata[0].should.have.property('loan_term');
        res.rdata[0].should.have.property('loan_collat_dsc');
        res.rdata[0].should.have.property('app_date');
        res.rdata[0].should.have.property('app_time');
        res.rdata[0].should.have.property('app_status');
        res.rdata[0].should.have.property('bnk_empid');
        res.rdata[0].should.have.property('bnk_empmsg');

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