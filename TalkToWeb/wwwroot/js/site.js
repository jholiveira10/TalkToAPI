
function TesteCors() {

    var tokenJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VAZ21haWwuY29tIiwic3ViIjoiODVkYmFlYjctZGEzNS00YmZhLWEwZTMtY2FiZmU4ZmM0NTU4IiwiZXhwIjoxNTg4ODA1NDE4fQ.4ygjb2Qxcvls8yidIqoliQOvsO7AUNqoNXt5QXwTqX0";
    var servico = "https://localhost:44364/api/mensagem/85dbaeb7-da35-4bfa-a0e3-cabfe8fc4558/57b8cb16-246b-4bb8-9ef5-01057fd6e61a";
    $("#resultado").html("---Solicitando----");
    $.ajax({
        url: servico,
        method: "GET",
        crossDomain: true,
        headers: { "Accept": "application/json" },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + tokenJWT);
        },
        success: function (data, status, xhr) {
            $("#resultado").html(data);
            console.info(data);
        }
    });

}

