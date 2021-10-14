$('#verification-form').submit(function (event) {
    event.preventDefault()

    $("input").focus(function () {
        emailp.css("display", "none")
        $('#phoneNumber').css("margin-bottom", "8px")
    })

    let phoneNumber = $('#phoneNumber').val()
    let formData = new FormData()
    formData.append('section', 'general');
    formData.append('action', 'previewImg');
    formData.append('phoneNumber', phoneNumber);

    // Attach file
    formData.append('image', $('input[type=file]')[0].files[0]);

    let emailp = $('#emailp')
    let name = $('#name')
    let emaild = $('#email-d')
    let number = $('#number')
    let category = $('#category')

    $.ajax({
        url: 'https://nvst2021server.herokuapp.com/auth/verification',
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            if (data.type === "phoneNumber") {
                $('#phoneNumber').css("margin-bottom", "0px")
                emailp.css("display", "block")
                emailp.html(`${data.error}`)
            }
            if (data.type === "user") {
                $('#form-div').css("display", "none")
                $('#user-info').css("display", "block")
                $('#print').css("display", "block")
                $('#slip').css("display", "block")
                $('#img').css("display", "block")
                $('#payment').css("display", "none")
                $('#instruction').css("display", "none")
                $('#image-div').css("display", "none")
                name.html(`${data.user.full_name}`)
                emaild.html(`${data.user.email}`)
                number.html(`${data.user.phoneNumber}`)
                category.html(`${data.user.categoryOfSkill}`)
                $('#proof-img').attr('src', `${data.user.file_name}`)
            }
        }
    });
})

$('#reprint-form').submit(function (event) {
    event.preventDefault()

    $("input").focus(function () {
        emailp.css("display", "none")
        $('#phoneNumber').css("margin-bottom", "8px")
    })


    let phoneNumber = $('#phoneNumber').val()

    let emailp = $('#numberp')
    let name = $('#name')
    let emaild = $('#email-d')
    let number = $('#number')
    let category = $('#category')

    $.ajax('https://nvst2021server.herokuapp.com/auth/reprint',
        {
            data: JSON.stringify({
                "phoneNumber": phoneNumber
            }),
            processData: false,
            type: 'POST',
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
                if (data.type === "phoneNumber") {
                    $('#phoneNumber').css("margin-bottom", "0px")
                    emailp.css("display", "block")
                    emailp.html(`${data.error}`)
                }
                if (data.type === "user") {
                    $('#reprintSlip').css("display", "none")
                    $('#form-div').css("display", "none")
                    $('#user-info').css("display", "block")
                    $('#print').css("display", "block")
                    $('#slip').css("display", "block")
                    $('#img').css("display", "block")
                    $('#payment').css("display", "none")
                    $('#instruction').css("display", "none")
                    $('#image-div').css("display", "none")
                    name.html(`${data.user.full_name}`)
                    emaild.html(`${data.user.email}`)
                    number.html(`${data.user.phoneNumber}`)
                    category.html(`${data.user.categoryOfSkill}`)
                    $('#proof-img').attr('src', `${data.user.file_name}`)
                }
            }
        })
})