describe("A suite", function() {
  it("Interface usage", function() {
    var test = new org.treblereel.j2cl.exports.impl.v10.MyInterface();

    expect(test.test1('INSTANCE METHOD CALL')).toBe('INSTANCE METHOD CALL');
  });
});