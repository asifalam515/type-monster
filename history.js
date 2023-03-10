
// history section
const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
   const newRow = document.createElement("div");
   newRow.classList.add("card");
   newRow.innerHTML = `
  <h3>${questionText}</h3>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  
  `;
   histories.appendChild(newRow);
   let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
   previousTests.push({ questionText, timeTaken, errorCount });
   localStorage.setItem("testHistory", JSON.stringify(previousTests));
   displayHistory();
}
function displayHistory() {
   const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
   console.log(previousTests, "previous test");
   histories.innerHTML = "";
   previousTests.forEach((test) => {
      console.log(test);
      const newRow = document.createElement("div");
      newRow.classList.add("card");
      newRow.innerHTML = `
          <h3>${test.questionText}</h3>
          <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
            <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
          `;
      histories.appendChild(newRow);
      console.log(newRow);
   });
}
