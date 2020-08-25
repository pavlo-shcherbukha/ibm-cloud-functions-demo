/*
*
*/ 
 
 
const mocha = require('mocha');
const request = require('supertest');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

var vfunc = require('../src/getCustomers');

var test_env_lr = false ;
describe('Test customer API', function() {
  let test_server;
  let app;
  this.timeout(0);

 
  it('GetCustomers:' + ' Expect customers list ', function(done){
    vfunc.main()
    .then (res => {
        res.should.have.property('ok');
        res.ok.should.equal(true);
        expect( res.rdata).to.be.a('array');
        res.rdata.length.should.not.equal(0);
        res.rdata[0].should.have.property('idcust');
        res.rdata[0].should.have.property('first_nm');
        res.rdata[0].should.have.property('last_nm');
        res.rdata[0].should.have.property('email');
        res.rdata[0].should.have.property('tin');
        res.rdata[0].should.have.property('phone');
        res.rdata[0].should.have.property('status');
        expect(res.rdata[0].status).to.be.oneOf(['O','C'], 'Открыт-Закрыт');
        res.rdata[0].should.have.property('dtopen');
        res.rdata[0].should.have.property('dtclose');
        res.rdata[0].should.have.property('idt');
        res.rdata[0].should.have.property('itm');
        res.rdata[0].should.have.property('mdt');
        res.rdata[0].should.have.property('mtm');


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
  after(done => {
  });
});