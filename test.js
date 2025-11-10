
const {fromEuroToDollar, fromDollarToYen, fromYenToPound}=require('./app.js');


test("adds 3.5 * 1.07 to equal 3.745", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});
 
test("adds 3.5* 156.5 to equal 511.91588785046724", ()=> {
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);

});

test ('adds 3.5*0.87 to equal  0.019456869009584665', ()=> {
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665);
});