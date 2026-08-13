const runButton = document.getElementById("runPipeline");

const pipelineSteps = [
    "source",
    "extract",
    "transform",
    "validate",
    "fight",
    "resolve",
    "load",
    "forever"
];

function sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function activateStep(stepId) {

    const step = document.getElementById(stepId);

    step.classList.add("active");

    const status = step.querySelector(".node-status");

    status.textContent = "PROCESSING...";
}

function completeStep(stepId) {

    const step = document.getElementById(stepId);

    step.classList.remove("active");

    step.classList.add("completed");

    const status = step.querySelector(".node-status");

    status.textContent = "COMPLETED ✓";
}

function activateFight() {

    const step = document.getElementById("fight");

    step.classList.add("fight-active");

    const status = step.querySelector(".node-status");

    status.textContent = "INCIDENT DETECTED 🚨";
}

async function runPipeline() {

    runButton.disabled = true;

    runButton.textContent = "⏳ PIPELINE RUNNING...";

    const pipelineSection =
        document.getElementById("pipelineSection");

    pipelineSection.scrollIntoView({
        behavior: "smooth"
    });


    // SOURCE

    activateStep("source");

    await sleep(1000);

    completeStep("source");


    // EXTRACT

    activateStep("extract");

    await sleep(1200);

    completeStep("extract");


    // TRANSFORM

    activateStep("transform");

    await sleep(1500);

    completeStep("transform");


    // VALIDATE

    activateStep("validate");

    await sleep(1500);

    completeStep("validate");


    // FIGHT INCIDENT

    activateFight();

    await sleep(2500);


    // RESOLVE

    const fight =
        document.getElementById("fight");

    fight.classList.remove("fight-active");

    completeStep("fight");


    activateStep("resolve");

    await sleep(2000);

    completeStep("resolve");


    // LOAD

    activateStep("load");

    await sleep(1500);

    completeStep("load");


    // FOREVER

    activateStep("forever");

    await sleep(2000);

    completeStep("forever");

    document
        .getElementById("forever")
        .classList.add("final-success");


    // UPDATE MONITOR

    document
        .getElementById("fightCount")
        .textContent = "1";

    document
        .getElementById("resolvedCount")
        .textContent = "1";


    // SHOW ANNIVERSARY

    const anniversary =
        document.getElementById("anniversary");

    anniversary.style.display = "block";

    anniversary.scrollIntoView({
        behavior: "smooth"
    });


    runButton.textContent =
        "✅ PIPELINE COMPLETED";

}

runButton.addEventListener(
    "click",
    runPipeline
);
