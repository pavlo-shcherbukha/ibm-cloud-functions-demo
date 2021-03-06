/*
*
*/ 
 
 
const mocha = require('mocha');
const request = require('supertest');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

var vfunc = require('../src/createCustomer');

var test_env_list = [
  { zenv: 'localhost' ,zhost: 'localhost', zport: 3000, z_url: '/bnkapi/accounts', zprot: 'http' },
  { zenv: 'oc_dev', zhost: 'bnkapi-bnkdem-dev.apps-crc.testing', zport: 80, z_url: '/bnkapi/accounts', zprot: 'http' },
  { zenv: 'api', zhost: 'a7275984.eu-gb.apigw.appdomain.cloud', zport: 443, z_url: '/bnkapi-acc/accounts', zprot: 'https' },
]

var test_env_idx = 0;
var test_env_lr = true ;

const i_host = test_env_list[test_env_idx].zhost;
const i_port = test_env_list[test_env_idx].zport;
const i_url=test_env_list[test_env_idx].z_url;
const i_prot = test_env_list[test_env_idx].zprot;
  
console.log(  'Среда: ' +  test_env_list[test_env_idx].zenv);
console.log(  'HOST: ' +  i_host );
console.log(  'PORT: ' +  i_port );
console.log(  'URI: ' +  i_url.toString()  );  
//const i_host = 'localhost';
//const i_port = 3000

//const i_url='/bnkapi/accounts';

const i_ins = [];
const i_upd = [];
const i_del = [];

var http = require('http');
if ( i_prot === 'https'  ) {
  var http = require('https');
}

describe('Accounts API', function() {
  let test_server;
  let app;
  this.timeout(0);

/*
  before(done => {
    if ( test_env_idx === 0 ) {
        app = require(process.cwd() + '/server/server');
        test_server = app.listen(process.env.PORT || i_port, done);
    } else {
        done();
    }  
  });
*/
 
  it('GetCustomers:' + ' Expect customers list ', function(done){

    
    var l_req={ first_nm: 'Семен', 
                last_nm: 'Зелений' , 
                email: 'xx.green@gmail.com', 
                tin: '02020202', 
                phone: '+38060123344'
            };







    vfunc.main(  l_req  )
    .then (res => {
        res.should.have.property('ok');
        res.ok.should.equal(true);
        res.rdata.should.have.property('idcust');
        expect( res.rdata.idcust).to.be.a('number');

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
/*
    if ( test_env_idx === 0 ) {
        test_server.close(done);
    } else {
        done(); 
    }
*/    
  });
});