// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    let TestClass = class {};

    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  it('class is block scoped', () => {
    class Inside {}
    assert.equal(typeof Inside, 'function');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id) {
        this.id = id;
      }
    }

    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it('defining a method is simple', function() {
    class User {

      writesTests() {
        return false;
      }

    }

    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() { if(!this.everWroteATest) { return true; } else { return false; }}
    }

    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it('anonymous class', () => {
    const classType = typeof () => {};
    assert.equal(classType, 'function');
  });

});
