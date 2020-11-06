function compileAndroidCode() {
  throw new Error('You are using a wrong JDK');
}

test('complilling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // using a exact error
  expect(compileAndroidCode).toThrow('You are using a wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});