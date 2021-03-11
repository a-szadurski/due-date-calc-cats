document.addEventListener('DOMContentLoaded', function () {

    let showButton = document.querySelector("#detailsButton");
    let day = 1000 * 60 * 60 * 24;
    let weekday = ["Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sb"]
    let weekdayLong = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
    let month = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"];
    let monthLong = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];


    document.querySelector("#detailsCont").style.display = "none";
    document.getElementById("calcBtn").addEventListener("click", dueDateCalc);
    document.getElementById("detailsBtn").addEventListener("click", showDetails);
    showButton.style.display = "none";

    function dueDateCalc() {

        let dateInput = new Date(document.getElementById("dateInput").value);

        if (isNaN((dateInput).getTime())) {
            return;
        }

        let dueDate = new Date(dateInput.getTime() + 65 * day);

        if (showButton.style.display === "none") {
            showButton.style.display = "block";
        }

        document.querySelector("#detailsCont").style.display = "none";
        document.querySelector("#dueDate").dataset.date = dateInput.toString();
        document.getElementById("dueDate").innerHTML =
            "Szacunkowa data porodu to: " + weekdayLong[dueDate.getDay()] + " " + dueDate.getDate() + " " + monthLong[dueDate.getMonth()]
            + " " + dueDate.getUTCFullYear() + " (" + dueDate.toLocaleDateString() + ")";

        printDetails();

    }

    function showDetails() {
        let details = document.querySelector("#detailsCont");
        if (details.style.display === "none") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    }

    function printDetails() {

        let start = new Date(document.querySelector("#dueDate").dataset.date).getTime();
        let date01 = new Date(start);
        let date02 = new Date(start + 5 * day);
        let date03 = new Date(start + 7 * day);
        let date04 = new Date(start + 9 * day);
        let date05 = new Date(start + 12 * day);
        let date06 = new Date(start + 14 * day);
        let date07 = new Date(start + 16 * day);
        let date08 = new Date(start + 18 * day);
        let date09 = new Date(start + 20 * day);
        let date10 = new Date(start + 22 * day);
        let date11 = new Date(start + 24 * day);
        let date12 = new Date(start + 26 * day);
        let date13 = new Date(start + 28 * day);
        let date14 = new Date(start + 30 * day);
        let date15 = new Date(start + 32 * day);
        let date16 = new Date(start + 34 * day);
        let date17 = new Date(start + 36 * day);
        let date18 = new Date(start + 38 * day);
        let date19 = new Date(start + 40 * day);
        let date20 = new Date(start + 42 * day);
        let date21 = new Date(start + 44 * day);
        let date22 = new Date(start + 46 * day);
        let date23 = new Date(start + 48 * day);
        let dueDate = new Date(start + 65 * day);
        let detailsDates = document.querySelectorAll("td.detDate");

        detailsDates[0].innerHTML =
            weekday[date01.getDay()] + " " + date01.getDate() + " " + month[date01.getMonth()] + " " + date01.getUTCFullYear();

        detailsDates[1].innerHTML =
            weekday[date02.getDay()] + " " + date02.getDate() + " " + month[date02.getMonth()] + " " + date02.getUTCFullYear();

        detailsDates[2].innerHTML =
            weekday[date02.getDay()] + " " + date02.getDate() + " " + month[date02.getMonth()] + " " + date02.getUTCFullYear()
            + " - "
            + weekday[date03.getDay()] + " " + date03.getDate() + " " + month[date03.getMonth()] + " " + date03.getUTCFullYear();

        detailsDates[3].innerHTML =
            weekday[date03.getDay()] + " " + date03.getDate() + " " + month[date03.getMonth()] + " " + date03.getUTCFullYear()
            + " - "
            + weekday[date04.getDay()] + " " + date04.getDate() + " " + month[date04.getMonth()] + " " + date04.getUTCFullYear();

        detailsDates[4].innerHTML =
            weekday[date04.getDay()] + " " + date04.getDate() + " " + month[date04.getMonth()] + " " + date04.getUTCFullYear()
            + " - "
            + weekday[date05.getDay()] + " " + date05.getDate() + " " + month[date05.getMonth()] + " " + date05.getUTCFullYear();

        detailsDates[5].innerHTML =
            weekday[date06.getDay()] + " " + date06.getDate() + " " + month[date06.getMonth()] + " " + date06.getUTCFullYear()
            + " - "
            + weekday[date07.getDay()] + " " + date07.getDate() + " " + month[date07.getMonth()] + " " + date07.getUTCFullYear();

        detailsDates[6].innerHTML =
            weekday[date06.getDay()] + " " + date06.getDate() + " " + month[date06.getMonth()] + " " + date06.getUTCFullYear()
            + " - "
            + weekday[date08.getDay()] + " " + date08.getDate() + " " + month[date08.getMonth()] + " " + date08.getUTCFullYear();

        detailsDates[7].innerHTML =
            weekday[date09.getDay()] + " " + date09.getDate() + " " + month[date09.getMonth()] + " " + date09.getUTCFullYear()
            + " - "
            + weekday[date10.getDay()] + " " + date10.getDate() + " " + month[date10.getMonth()] + " " + date10.getUTCFullYear();

        detailsDates[8].innerHTML =
            weekday[date11.getDay()] + " " + date11.getDate() + " " + month[date11.getMonth()] + " " + date11.getUTCFullYear()
            + " - "
            + weekday[date12.getDay()] + " " + date12.getDate() + " " + month[date12.getMonth()] + " " + date12.getUTCFullYear();

        detailsDates[9].innerHTML =
            weekday[date08.getDay()] + " " + date08.getDate() + " " + month[date08.getMonth()] + " " + date08.getUTCFullYear()
            + " - "
            + weekday[date13.getDay()] + " " + date13.getDate() + " " + month[date13.getMonth()] + " " + date13.getUTCFullYear();

        detailsDates[10].innerHTML =
            weekday[date14.getDay()] + " " + date14.getDate() + " " + month[date14.getMonth()] + " " + date14.getUTCFullYear();

        detailsDates[11].innerHTML =
            weekday[date15.getDay()] + " " + date15.getDate() + " " + month[date15.getMonth()] + " " + date15.getUTCFullYear();

        detailsDates[12].innerHTML =
            weekday[date16.getDay()] + " " + date16.getDate() + " " + month[date16.getMonth()] + " " + date16.getUTCFullYear();

        detailsDates[13].innerHTML =
            weekday[date17.getDay()] + " " + date17.getDate() + " " + month[date17.getMonth()] + " " + date17.getUTCFullYear()
            + " - "
            + weekday[date18.getDay()] + " " + date18.getDate() + " " + month[date18.getMonth()] + " " + date18.getUTCFullYear();

        detailsDates[14].innerHTML =
            weekday[date19.getDay()] + " " + date19.getDate() + " " + month[date19.getMonth()] + " " + date19.getUTCFullYear();

        detailsDates[15].innerHTML =
            weekday[date19.getDay()] + " " + date19.getDate() + " " + month[date19.getMonth()] + " " + date19.getUTCFullYear()
            + " - "
            + weekday[date20.getDay()] + " " + date20.getDate() + " " + month[date20.getMonth()] + " " + date20.getUTCFullYear();

        detailsDates[16].innerHTML =
            weekday[date20.getDay()] + " " + date20.getDate() + " " + month[date20.getMonth()] + " " + date20.getUTCFullYear()
            + " - "
            + weekday[date21.getDay()] + " " + date21.getDate() + " " + month[date21.getMonth()] + " " + date21.getUTCFullYear();

        detailsDates[17].innerHTML =
            weekday[date22.getDay()] + " " + date22.getDate() + " " + month[date22.getMonth()] + " " + date22.getUTCFullYear();

        detailsDates[18].innerHTML =
            weekday[date23.getDay()] + " " + date23.getDate() + " " + month[date23.getMonth()] + " " + date23.getUTCFullYear();

        detailsDates[19].innerHTML = weekday[dueDate.getDay()] + " " + dueDate.getDate() + " " + month[dueDate.getMonth()]
            + " " + dueDate.getUTCFullYear()

    }

});