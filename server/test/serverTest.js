const chai = require('chai');
const chaiHttp = require("chai-http");
const {expect} = require('chai');
const server = require('../index.js');


//assert style
chai.should();

chai.use(chaiHttp);

describe('restaurant api', () => 
    {
        describe("POST /Registration", ()=>{
            it("should register data", (done) => {
                chai.request(server)
                    .post('/Registration')
                    .send({email: 'test2@test2.com', password:'password', name: "test2", address: "123 test2 DR", city: "test2", state: "2", zip: "22222"})
                    .then((res)=>{
                        const body = res.body;
                        expect(body).to.eq("existed email");
                        done();
                    })
                    .catch((err) => done(err));
            })
        }) 
        describe("post /login", ()=>{
            it("should get user data", (done) => {
                chai.request(server)
                    .post('/login')
                    .send({email: 'test2@test2.com', password:'password'})
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body;
                        body.should.have.property('role');
                        done();
                    })
            })
        })
        describe("get /profile", ()=>{
            it("should get user data", (done) => {
                chai.request(server)
                    .get('/Profile-info/3')
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body;
                        body.should.have.property('name');
                        done();
                    })
            })
        })
        
        describe("post /profile-redeem", ()=>{
            it("should post user redeem code data", (done) => {
                chai.request(server)
                    .post('/Profile-redeem')
                    .send({code:"tasty123", id:"2"})
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body;
                        expect(body).to.equal("Redeemed");
                        done();
                    })
            })
        })

        describe("post /profile-edit", ()=>{
            it("should post user data", (done) => {
                chai.request(server)
                    .post('/Profile-edit')
                    .send({email:"changEmail@changeEmail.com", id: "3", name:"changeName", address: "123 test1 DR, test1 1 11111"})
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body;
                        expect(body).to.equal("updated");
                        done();
                    })
            })
        })

        describe("post /MakeReservation", ()=>{
            it("should post user data", (done) => {
                chai.request(server)
                    .post('/MakeReservation')
                    .send({userID: "1000", fullName: "test3", contactNumber:"1231231234", emailAddress:"test3@test3.com",numGuests: "4", resDate: "2021-12-28", resTime: "9:00", table: "D1,D2" })
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body;
                        expect(body).to.equal("Values inserted");
                        done();
                    })
            })
        })
        describe("post /MakeCreditCardReservation", ()=>{
            it("should post user data", (done) => {
                chai.request(server)
                    .post('/MakeCreditCardReservation')
                    .send({userID: "1000", fullName: "test3", contactNumber:"1231231234", emailAddress:"test3@test3.com",numGuests: "4", resDate: "2021-12-25", resTime: "9:00", table: "D4,D5", creditCardNum: "12345678910", expDate:"2024-12", billZipCode: "12345"})
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body;
                        expect(body).to.equal("Values inserted");
                        done();
                    })
            })
        })

        describe("get /GetReservedTables", ()=>{
            it("should post user data", (done) => {
                chai.request(server)
                    .get('/GetReservedTables')
                    .query({resDate:"2021-12-16", resTime:"7:30"})
                    .then((res)=>{
                        console.log(res.body);
                        const body = res.body[0];
                        body.should.have.property('table')
                        done();
                    })
            })
        })
        
    })