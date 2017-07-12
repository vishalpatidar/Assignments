//Form validation class
function Validator(form) {
    //initializing objects
    this.form = form;

    this.emptyField = {
        name: "Please enter your name.",
        email: "Please enter your email.",
        file: "Please upload a file.",
        gender: "Please select your gender.",
        age: "Please enter your age.",
        dob: "Please enter your DOB.",
        country: "Please select your country.",
        mobile: "Please select your mobile no."
    }
    this.invalidField = {
        name: "Please enter valid name(alphabets and spaces only).",
        email: "Please enter valid email.",
        age: "Please enter valid age(above 17).",
        dob: "Please enter valid DOB(yyyy/mm/dd).",
        mobile: "Please enter valid mobile no.(10 digits number only)"
    }

    this.validate = function() {

        var falseCount = 0;
        var data  = {
            name: document.forms[this.form]["name"].value,
            email: document.forms[this.form]["email"].value,
            file: document.forms[this.form]["upload"].value,
            age: document.forms[this.form]["age"].value,
            gender: document.forms[this.form]["gender"].value,
            dob: document.forms[this.form]["dob"].value,
            country: document.forms[this.form]["country"].value,
            mobile: document.forms[this.form]["mobile"].value
        }

        for (var field in data) {
            if (data.hasOwnProperty(field)) {
                if (data[field] === ""){
                    document.getElementsByClassName('error-'+field)[0].innerHTML = this.emptyField[field];
                    falseCount += 1;
                } else {
                    var isValidField = this.checkFields( data[field], field );
                    if (!isValidField) {
                        document.getElementsByClassName('error-'+field)[0].innerHTML = this.invalidField[field];
                        falseCount += 1;
                    } else {
                         document.getElementsByClassName('error-'+field)[0].innerHTML = "";
                    }
                }
            }
        }

        return falseCount > 0 ? false : true;
    }

    this.checkFields = function(fieldValue, fieldName) {
        switch (fieldName) {
            case 'name':
                    var pattern = /^[a-zA-Z ]+$/;
                    var result = fieldValue.match(pattern);
                    return result ? true : false;
                break;

            case 'email':
                    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    var result = fieldValue.match(pattern);
                    return result ? true : false;
                break;

            case 'dob':
                    var pattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
                    var result = fieldValue.match(pattern);
                    return result ? true : false;
                break;

            case 'mobile':
                    var pattern = /^\d{10}$/;
                    var result = fieldValue.match(pattern);
                    return result ? true : false;
                break;

            case 'age':
                    var pattern = /\b(1[7-9]|[2-6][0-9]|70)\b/;
                    var result = fieldValue.match(pattern);
                    return result ? true : false;
                break;

            default:
                return true;

        }
    }
}

// To display preview of image on upload
function previewFile() {
    var preview = document.querySelector('img[id=preview]');
    var file    = document.querySelector('input[id=imgFile]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

//called on form submit
function checkValidations() {
    var validator = new Validator('customForm');
    var submitValue = validator.validate();
    return submitValue;
}
