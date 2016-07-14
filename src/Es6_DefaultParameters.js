// original
function originalApplyDiscount(cost, discount) {
  discount = discount || .10;

  return cost - (cost * discount);
}
// alert(originalApplyDiscount(100, .04)); // 96
// alert(originalApplyDiscount(100)); // 90

function defaultDiscountRate () {
  return .10;
}

function applyDiscountA(cost, discount = defaultDiscountRate()) {
  return cost - (cost * discount);
}

function applyDiscountB(cost, discount = .10) {
  return cost - (cost * discount);
}

// alert(applyDiscountA(100)); // 90

// alert(applyDiscountB(100)); // 90
