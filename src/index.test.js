import{expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('shour pass',()=>{
        expect(true).to.equal(true);
    });
});

describe('index.html',() => {
    it('should have h1 that says Users',(done) =>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index,function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
         });
    })
})
//when function involve call back, make it asynchronous.
//test framework is async call, so make it async  'should sya hello', (done)
