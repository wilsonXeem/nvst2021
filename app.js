/**********************
 * Sign up form Handler *
 **********************/ 
 $('#myform').submit(function (event) {
    event.preventDefault()

    $("input").focus(function () {
        emailp.css("display", "none")
        $('#email').css("margin-bottom", "8px")
    })


    let full_name = $('#full_name').val()
    let email = $('#email').val()
    let phoneNumber = $('#phoneNumber').val()
    let dob = $('#dob').val()
    let gender = $('#gender').val()
    let maritalStatus = $('#maritalStatus').val()
    let categoryOfSkill = $('#categoryOfSkill').val()
    let occupation = $('#occupation').val()
    let contactAddress = $('#contactAddress').val()
    let stateOfResidence = $('#stateOfResidence').val()
    let stateOfOrigin = $('#stateOfOrigin').val()
    let localGovernmentOfOrigin = $('#localGovernmentOfOrigin').val()
    let nextOfKinName = $('#nextOfKinName').val()
    let nextOfKinPhoneNumber = $('#nextOfKinPhoneNumber').val()
    let levelOfEducation = $('#levelOfEducation').val()
    let otherOrganisations = $('#otherOrganisations').val()
    let otherYouthProgrammeParticipation = $('#otherYouthProgrammeParticipation').val()
    let moreAboutSelf = $('#moreAboutSelf').val()
    let hobbies = $('#hobbies').val()
    let methodOfHearing = $('#methodOfHearing').val()

    let emailp = $('#emailp')

    $.ajax('https://nvst2021server.herokuapp.com/auth/signup',
        {
            data: JSON.stringify({
                "full_name": full_name,
                "email": email,
                "phoneNumber": phoneNumber,
                "dob": dob,
                "gender": gender,
                "maritalStatus": maritalStatus,
                "categoryOfSkill": categoryOfSkill,
                "occupation": occupation,
                "contactAddress": contactAddress,
                "stateOfResidence": stateOfResidence,
                "stateOfOrigin": stateOfOrigin,
                "localGovernmentOfOrigin": localGovernmentOfOrigin,
                "nextOfKinName": nextOfKinName,
                "nextOfKinPhoneNumber": nextOfKinPhoneNumber,
                "levelOfEducation": levelOfEducation,
                "otherOrganisations": otherOrganisations,
                "otherYouthProgrammeParticipation": otherYouthProgrammeParticipation,
                "moreAboutSelf": moreAboutSelf,
                "hobbies": hobbies,
                "methodOfHearing": methodOfHearing,
            }),
            processData: false,
            type: 'POST',
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
                if (data.type === "phoneNumber") {
                    $('#email').css("margin-bottom", "0px")
                    emailp.css("display", "block")
                    emailp.html(`${data.error}`)
                }
                if (data.type === "user") {
                    $('.modal').modal('hide')
                    localStorage.setItem("nvst2021-userId", `${data.userId}`)
                    $('#myform').unbind('submit').submit()
                }
            }
        })
})

/**********************
 * Close form modal *
 **********************/ 
 function closeForm() {
    $('.modal').modal('hide')
}

 
/*********************************
 * Button click to initiate form *
 *********************************/

$('button').click(function () {
    const id = $(this).attr('id')
    if (id === 'hairstylist') {
        $("#category-button").click()

        $('#categoryOfSkill').val('tailor')
    }
    if (id === 'tailor') {
        $("#category-button").click()

        $('#categoryOfSkill').val('tailor')
    }
    if (id === 'carpentry') {
        $("#category-button").click()

        $('#categoryOfSkill').val('carpentry and woodwork')
    }
    if (id === 'welding') {
        $("#category-button").click()

        $('#categoryOfSkill').val('welding')
    }
    if (id === 'upholster') {
        $("#category-button").click()

        $('#categoryOfSkill').val('upholster')
    }
    if (id === 'fashiondesign') {
        $("#category-button").click()

        $('#categoryOfSkill').val('fashion design')
    }
    if (id === 'fabrication') {
        $("#category-button").click()

        $('#categoryOfSkill').val('fabrication')
    }
    if (id === 'photographer') {
        $("#category-button").click()

        $('#categoryOfSkill').val('photographer')
    }
    if (id === 'singers') {
        $("#category-button").click()

        $('#categoryOfSkill').val('singers')
    }
    if (id === 'bakers') {
        $("#category-button").click()

        $('#categoryOfSkill').val('cake baking')
    }
    if (id === 'comedy') {
        $("#category-button").click()

        $('#categoryOfSkill').val('comedy stars')
    }
    if (id === 'creativeartist') {
        $("#category-button").click()

        $('#categoryOfSkill').val('creative artist')
    }
    if (id === 'shoemakers') {
        $("#category-button").click()

        $('#categoryOfSkill').val('shoe making')
    }
    if (id === 'barbers') {
        $("#category-button").click()

        $('#categoryOfSkill').val('barbers')
    }
    if (id === 'beadmaking') {
        $("#category-button").click()

        $('#categoryOfSkill').val('bead making')
    }
})