test('just more a test', function() {
  const myMock = jest.fn();
  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();
  console.log(myMock.mock.instances);
});

test("Creating a mock functtion", function() {

  const mockFunction = jest.fn(
    function Person(name, profession) {
      var name = name; profession = profession;

      return {
        getName() {
          return name;
        },

        getProfession() {
          return profession;
        },

        getInfos() {
          return name + ' ' + profession;
        }
      }

    }
  );

  p = new mockFunction("Adriano", "Programmer");
  expect(p.getInfos()).toBe("Adriano Programmer");
  
});

test("Testing mock return", function() {
  const myMock = jest.fn();
  console.log(myMock());

 myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValueOnce(true);

});

test("filter test fn", function() {
  const filterTestFn = jest.fn();
  filterTestFn.mock
});