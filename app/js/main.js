$(document).ready(function() {
  D.xbox.initialize();
});

var D = D || {};

D.xbox = {
  initialize: function() {
    this.formSubmit();
  },
  formSubmit: function() {
    var $form = $('#form-user-name'),
		$submitButton = $form.find('button');

    $submitButton.on('click', function(e) {
      e.preventDefault();

      D.xbox.render($form);
	})
  },
  getUserName: function($form) {
    // grab user name
    var userName = $form.find('input[name="gamer_tag"]').val();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://xboxapi.com/v2/accountxuid", false);
    xhr.send();
    
    console.log(xhr.status);
    console.log(xhr.statusText);

    var data = data || {};
    data.userName = userName;

	return data;
  },
  render: function($form) {
    var $userTemplate = $($('#user-template').html()),
        $userSection = $('#xbox-user');


    var data = D.xbox.getUserName($form);

	console.log('userTemplate: ', $userTemplate);

    $userTemplate.find('.user-name').text(data.userName);

    $userSection.append($userTemplate);
  }
};
