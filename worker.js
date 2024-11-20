onmessage = function (event) {
    // main 에서 받는 메세지는 event 의 data 안으로 들어온다
    console.log("Received message", event.data);
    if (!event.data) {
        postMessage("You should send data for calculation!");
    }

    const {first, second} = event.data;
    console.log("Received Successfully", first, second);
    const result = Number(first) + Number(second);
    postMessage(result);
}