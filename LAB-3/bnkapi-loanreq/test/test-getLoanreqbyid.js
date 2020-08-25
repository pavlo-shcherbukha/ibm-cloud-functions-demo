/*
*
*/ 
 
 
const mocha = require('mocha');
const request = require('supertest');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

var vfunc = require('../src/getLoanreqbyid');
var test_env_lr = true ;


describe('Accounts API', function() {
  let test_server;
  let app;
  this.timeout(0);
 
  it('getLoanreqbyid:' + 'Получить одну заявку  на  кредит', function(done){
    vfunc.main(  {id: 'loanreq-1'}  )
    .then (res => {
        res.should.have.property('ok');
        res.ok.should.equal(true);
        
        //expect( res.rdata).to.be.a('array');
        //res.rdata.length.should.not.equal(0);
    /*    
        res.rdata.should.have.property('idcust');
        res.rdata.should.have.property('first_nm');
        res.rdata.should.have.property('last_nm');
        res.rdata.should.have.property('email');
        res.rdata.should.have.property('tin');
        res.rdata.should.have.property('phone');
        res.rdata.should.have.property('status');
        expect(res.rdata.status).to.be.oneOf(['O','C'], 'Открыт-Закрыт');
        res.rdata.should.have.property('dtopen');
        res.rdata.should.have.property('dtclose');
        res.rdata.should.have.property('idt');
        res.rdata.should.have.property('itm');
        res.rdata.should.have.property('mdt');
        res.rdata.should.have.property('mtm');
*/

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