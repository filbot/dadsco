document.addEventListener("DOMContentLoaded", function () {
  // Update last updated date
  const lastUpdatedElement = document.getElementById("last-updated");
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  lastUpdatedElement.textContent = formattedDate;
});
