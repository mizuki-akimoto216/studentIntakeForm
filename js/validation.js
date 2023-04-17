$(document).ready(function(){

    //name
    let isCheckFirstName = false;
    let isCheckLastName = false;

    $('#firstName').keyup(function(){

        if(checkGreaterThanLength($(this).val(), 2)){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckFirstName = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckFirstName = false;
        }

        changeSignupButtonStatus($('#btnSignup'));

    })

    $('#lastName').keyup(function(){

        if(checkGreaterThanLength($(this).val(), 2)){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckLastName = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckLastName = false;
        }

        changeSignupButtonStatus($('#btnSignup'));

    })



    //Birthday
    let isCheckDate = false;
    let isCheckMonth = false;
    let isCheckYear = false;

    $('#date').change(function(){
        if(checkEmpty($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckDate = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckDate = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    $('#month').change(function(){
        if(checkEmpty($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckMonth = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckMonth = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    $('#year').keyup(function(){
        if(checkYear($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckYear = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckYear = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    function checkYear(year) {
        if(checkOnlyNumber(year) && checkLength(year, 4) && year >= 1993){
            return true;
        } else {
            return false;
        }
    }


    //Citizenship status
    //hide and show
    $('#nonCanadian').click(function(){
        if($(this).prop('checked')){
            $('#nonCanadian-form').removeClass('d-none').fadeOut(0).fadeIn();
            $('#canadianPR-form').fadeIn(0).fadeOut();
        }
    })

    $('#canadianPR').click(function(){
        if($(this).prop('checked')){
            $('#canadianPR-form').removeClass('d-none').fadeOut(0).fadeIn();
            $('#nonCanadian-form').fadeIn(0).fadeOut();
        }
    })

    //canadianPR
    let isCheckSinNumber = false
    $('#sinNumber').keyup(function(){
        if(checkSinNumber($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckSinNumber = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckSinNumber = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    function checkSinNumber(sinNumber) {
        if(checkOnlyNumber(sinNumber) && checkLength(sinNumber, 9)){
            return true;
        } else {
            return false;
        }
    }

    let isCheckStreetName = false;
    let isCheckCity = false;
    let isCheckProvince = false;
    let isCheckPostal = false;
    $('#streetName').keyup(function(){
        if(checkGreaterThanLength($(this).val(), 3)){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckStreetName = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckStreetName = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    $('#city').keyup(function(){
        if(checkGreaterThanLength($(this).val(), 2)){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckCity = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckCity = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })
    
    $('#province').change(function(){
        if(checkEmpty($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckProvince = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckProvince = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })
    
    $('#postal').keyup(function(){
        if(checkPostal($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckPostal = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckPostal = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    function checkPostal(postal) {
        if(checkLength(postal, 7) && checkPostalFormat(postal)) {
            return true;
        } else {
            return false;
        }
    }
    
    //A1A 1A1
    function checkPostalFormat(postalvalue) {
        let postalChar = "";
        let postalNo = "";

        for(let i=0; i<=postalvalue.length; i++){
            if(i==0 || i==2 || i==5){
                postalChar += postalvalue.charAt(i);
            }
            if(i==1 || i==4 || i==6){
                postalNo += postalvalue.charAt(i);               
            }
        }
        
        if(checkOnlyUpperLatter(postalChar) && checkOnlyNumber(postalNo) && postalvalue.charAt(3) == ' '){
            return true;
        } else {
            return false;
        }
    }

    //nonCanadian
    let isCheckPassportNo = false;
    $('#passportNo').keyup(function(){
        if(checkPassportNo($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckPassportNo = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckPassportNo = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    function checkPassportNo(passportNo) {
        if(checkLength(passportNo, 10) && checkPassportNoFormat(passportNo)) {
            return true;
        } else {
            return false;
        }
    }
    
    //AAA12345AA
    function checkPassportNoFormat(passportValue) {
        let passportChar = "";
        let passportNum = "";

        for(let i=0; i<=passportValue.length; i++){
            if(i==0 || i==1 || i==2 || i==8 || i==9){
                passportChar += passportValue.charAt(i);
            }
            if(i==3 || i==4 || i==5 || i==6 || i==7){
                passportNum += passportValue.charAt(i);               
            }
        }
        
        if(checkOnlyUpperLatter(passportChar) && checkOnlyNumber(passportNum)){
            return true;
        } else {
            return false;
        }
    }

    //email
    let isCheckEmail = false;
    $('#email').keyup(function(){
        if(checkEmail($(this).val())){
            $(this).removeClass('is-invalid').addClass('is-valid');
            isCheckEmail = true;
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            isCheckEmail = false;
        }

        changeSignupButtonStatus($('#btnSignup'));
    })

    function checkEmail(email) {
        let emailArray = email.split('@');

        //contain only 1 '@'
        let lengthofAt = emailArray.length -1;

        //left of @, at least 1 character
        let leftOfAt = emailArray[0];
        
        //right of @, at least 1 period and before and after period at least 1 character
        let rightOfAt = emailArray[1];
        let beforePeriod = "";
        let afterPeriod = "";

        if(rightOfAt != undefined){
            beforePeriod = rightOfAt.split('.')[0];
            afterPeriod = rightOfAt.split('.')[1];   
        }

        if(lengthofAt == 1 && leftOfAt.length >= 1 && rightOfAt.indexOf('.') != -1 && beforePeriod.length >= 1 && afterPeriod.length >=1){
            return true;
        } else{
            return false;
        }
    }





    //Check greater than length
    function checkGreaterThanLength(input, length){
        if(input.length >= length){
            return true;
        } else {
            return false;
        }
    }

    //Check length
    function checkLength(input, length){
        if(input.length == length){
            return true;
        } else {
            return false;
        }
    }

    //Check Number or Not
    function checkOnlyNumber(number) {
        if(number.match(/[^0-9]/)){
            return false;
        } else {
            return true;
        }
    }

    //check upperLatter or not
    function checkOnlyUpperLatter(alphabet) {
        if(alphabet.match(/[^A-Z]/)){
            return false;
        } else {
            return true;
        }
    }

    //Check Empty
    function checkEmpty(input) {
        if(input){
            return true;
        } else {
            return false;
        }
    }

    function checkFormValid(){
        if(isCheckFirstName && isCheckLastName && isCheckDate && isCheckMonth && isCheckYear &&
            ((isCheckSinNumber && isCheckStreetName && isCheckCity && isCheckProvince && isCheckPostal) || isCheckPassportNo) && isCheckEmail){
            return true;
        } else {
            return false;           
        }
    }


    function changeSignupButtonStatus(btnSignup){
        if(checkFormValid()){
            $(btnSignup).removeAttr('disabled');
        } else {
            $(btnSignup).attr('disabled', true);
        }
    }

    $('#btnSignup').click(function(){

        let dateSelect = document.querySelector('[name="date"]')
        let monthSelect = document.querySelector('[name="month"]')
        let provinceSelect = document.querySelector('[name="province"]')

        let signupObj = {
            firstName: $('#firstName').val(),
            middleName: $('#middleName').val(),
            lastName: $('#lastName').val(),
            birthday: {
                date: dateSelect.value,
                month: monthSelect.value,
                year:$('#year').val(),
            },
            citizenStatus: {
                status: $('.citizenshipStatus[name="citizenStatus"]:checked').val(),
                sinNumber: $('#sinNumber').val(),
                address: {
                    streetName: $('#streetName').val(),
                    city: $('#city').val(),
                    province: provinceSelect.value,             
                    postal: $('#postal').val()     
                },
                passportNo: $('#passportNo').val(),
            },
            email: $('#email').val()
        }

        console.log('Final form object', signupObj);

        
        alert("Thank you for applying");
    })

})