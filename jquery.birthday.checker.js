// Date Validation Function
    function validateDate(that, error) {
        var error_msg,
            num_regex = /\D/;

        var birth_day = that.find('[name="birth_day"]');
        var birth_month = that.find('[name="birth_month"]');
        var birth_year = that.find('[name="birth_year"]');
        if (birth_day.val() == null || birth_day.val().match(num_regex)) {
            error = true;
            error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
            birth_day.addClass('has-error');
            birth_day.parent().parent().addClass('has-error');
            birth_day.parent().find('form-error').remove();
            birth_day.parent().parent().append(error_msg);
        }

        if (birth_month.val() == null || birth_month.val().match(num_regex) || birth_month.val() < 1 || birth_month.val() > 12) {
            error = true;
            error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
            birth_day.addClass('has-error');
            birth_day.parent().parent().addClass('has-error');
            birth_day.parent().find('form-error').remove();
            birth_day.parent().parent().append(error_msg);
        }

        var month30 = [4, 6, 9, 11];
        if (birth_year.val() == null || birth_year.val().match(num_regex)) {
            error = true;
            error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
            birth_day.addClass('has-error');
            birth_day.parent().parent().addClass('has-error');
            birth_day.parent().find('form-error').remove();
            birth_day.parent().parent().append(error_msg);
        } else if (birth_year.val() < (new Date().getFullYear() - 100) || birth_year.val() > (new Date().getFullYear() - 18)) {
            error = true;
            error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
            birth_day.addClass('has-error');
            birth_day.parent().parent().addClass('has-error');
            birth_day.parent().find('form-error').remove();
            birth_day.parent().parent().append(error_msg);
        } else if (birth_year.val() % 4 == 0 && birth_month.val() == 2 && birth_day.val() > 29) {
            error = true;
            error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
            birth_day.addClass('has-error');
            birth_day.parent().parent().addClass('has-error');
            birth_day.parent().find('form-error').remove();
            birth_day.parent().parent().append(error_msg);
        } else if (birth_year.val() % 4 != 0 && birth_month.val() == 2 && birth_day.val() > 28) {
            error = true;
            error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
            birth_day.addClass('has-error');
            birth_day.parent().parent().addClass('has-error');
            birth_day.parent().find('form-error').remove();
            birth_day.parent().parent().append(error_msg);
        } else {
            for (var i = 0; i < month30.length; i++) {
                if (birth_month.val() == month30[i] && birth_day.val() > 30) {
                    error = true;
                    error_msg = '<span class="help-block form-error">' + birth_day.data('err-msg') + '</span>'
                    birth_day.addClass('has-error');
                    birth_day.parent().parent().addClass('has-error');
                    birth_day.parent().find('form-error').remove();
                    birth_day.parent().parent().append(error_msg);
                }
            }
        }
    }