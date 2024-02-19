const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
let totalPrice = 0; // Initialize total price

// Function to create and insert seat details
function addSeatDetails(seatName, seatClass, price) {
  // Create elements
  const selectedNameContainer = document.getElementById("selected-seat");
  const selectedClassContainer = document.getElementById("selected-seat-class");
  const selectedPriceContainer = document.getElementById("selected-price");

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = seatName;
  li.appendChild(p);
  selectedNameContainer.appendChild(li);

  const li2 = document.createElement("li");
  const p2 = document.createElement("p");
  p2.innerText = seatClass;
  li2.appendChild(p2);
  selectedClassContainer.appendChild(li2);

  const li3 = document.createElement("li");
  const p3 = document.createElement("p");
  p3.innerText = price;
  li3.appendChild(p3);
  selectedPriceContainer.appendChild(li3);

  // Update total price
  totalPrice += parseFloat(price);
  const totalPriceElement = document.getElementById("total-Cost");
  totalPriceElement.innerText = totalPrice.toFixed(2); // Display with two decimal places

  // Update seat count
  count++;
  const seatCountElement = document.getElementById("seat-count");
  seatCountElement.innerText = count;

  const remainSeat = document.getElementById("seats-no").innerText;
  
  const convertedSeatNO = parseInt(remainSeat);

  if(convertedSeatNO - count < 0){
    alert("Seat is not available");
    return;
  }

  document.getElementById("seats-no").innerText = convertedSeatNO - count;

}

// Event listener for button click
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const seatName = e.target.innerText;
    const price = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].childNodes[3].innerText;
    const seatClass = "Economy"; // Assuming seat class is always Economy

    addSeatDetails(seatName, seatClass, price);
  });
}

// Event listener for apply button
const btn2 = document.getElementById("apply-btn");
btn2.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.trim().toUpperCase();

  const discountElement = document.getElementById("discountPrice");

  if (couponCode === "NEW15") {
    const discountAmount = totalPrice * 0.15;
    discountElement.innerText ="Discount Price: " + discountAmount.toFixed(2);

    // rest total price

    const restTotal = document.getElementById("totalPrice");
    restTotal.innerText = totalPrice - discountAmount.toFixed(2);
  } else if (couponCode === "Couple20") {
    const discountAmount = totalPrice * 0.2;
    discountElement.innerText = "Discount Price: " + discountAmount.toFixed(2);
  } else {
    alert("Invalid Coupon");
  }
});
