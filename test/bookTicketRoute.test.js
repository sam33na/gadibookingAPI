const book=require('../model/bookticket-model')
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/GadiBooking';
beforeAll(async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async() => {
    await mongoose.connection.close();
});


describe('for the book ticket route', () => {
    // the code below is for insert testing
    it('Inserting the data for book ticket', () => {
        const Book = {
            'departure': 'bhaktapur',
            'arrival': 'kathmandu',
            'price':'20',
            'seat':'2a'
        };

        return book.create(Book)
            .then((pro_ret) => {
                expect(pro_ret.departure).toEqual('bhaktapur');
            });
    });



    it('finding the single book ticket detail',()=>{
        return book.findById({_id :Object('6106a7491829312c582f936a')}).then((pp)=>{
            expect(pp.departure).toEqual('bhaktapur')
            })
    })





});
