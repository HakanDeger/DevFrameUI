$(".modal-btn").click(function () {
    var modal = $(this).attr("open-modal");
    $(modal).removeClass("closed");
    $(modal).addClass("active");
    $(this).keyup(function (e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    });
});

function closeModal() {
    $(".modal").removeClass("active");
    $(".modal").addClass("closed");
}

$(".modal").after().click(function () {
    closeModal();
});

$(".modal-dismiss-btn").click(function () {
    closeModal();
});