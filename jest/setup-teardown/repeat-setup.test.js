beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDataBase();
});

function initializeCityDatabase() {
  console.log('database initializating');
}

function clearCityDataBase() {
  console.log('database cleaned');
}

function isCity(city) {
  if(city == 'Vienna' || city == 'San Juan') {
    return true;
  } else {
    return false;
  }
}

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});