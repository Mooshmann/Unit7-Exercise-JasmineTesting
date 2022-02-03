describe('monthly calculation testing', function(){
  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {amount:10000, years: 5, rate: 6};
    expect(calculateMonthlyPayment(values)).toEqual('193.33')
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values ={amount:10000, years: 7, rate: 4.7};
    expect(calculateMonthlyPayment(values)).toEqual('139.93')
  });
  
  /// etc
  it('should handle any amount of years', function(){
    const values = {amount:10000, years: 99, rate: 4.5};
    expect(calculateMonthlyPayment(values)).toEqual('37.94');
    const values1= {amount:10000, years: 80, rate: 4.5};
    expect(calculateMonthlyPayment(values1)).toEqual('38.56');
  })
}
)
