const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const result = document.querySelector(".result")

if (window.Worker) {
    const myWorker = new Worker("./worker.js");

    [number1, number2].forEach(input => {
        input.onchange = function() {
            myWorker.postMessage({
                first: number1.value,
                second: number2.value,
            })
        }
    })

    myWorker.onmessage = function(event) {
        result.textContent = event.data;
        console.log("Message from worker node : " + event.data);
    }
}