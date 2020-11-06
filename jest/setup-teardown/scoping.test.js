beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDataBase();
});


function initializeCityDatabase() {
  console.log('city database initializating');
}

function clearCityDataBase() {
  console.log('city database cleaned');
}

function initializeFoodDatabase() {
  console.log('food database initializing');
}

function clearFoodDataBase() {
  console.log('food database cleaned');
}

function isCity(city) {
  if(city == 'Vienna' || city == 'San Juan') {
    return true;
  } else {
    return false;
  }
}

function isValidCityFoodPair(city, food) {
  if(city == 'Vienna' && food == 'Wiener Schnitzel'
  || city == 'San Juan' && food == 'Mofongo') {
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

describe('matching cities to foods', () => {

  beforeEach(() => {
    return initializeFoodDatabase();
  });
  
  afterEach(() => {
    return clearFoodDataBase();
  });

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });

});