//----------------Script start
jQuery.noConflict();
var m_warn_on_change = false;
var m_last_item = '';

jQuery(document).keydown(function(e) {
    
    if(m_warn_on_change==false){
        var groupName = jQuery('.pane-chat .chat-title .emojitext:first').text();
        
        if(e.which == 13) {
            if(confirm('Are you sure you want to send that message to ' + groupName + '?')==false){
                 e.preventDefault();
                 e.stopPropagation();
                 jQuery('.input-placeholder .input').text('');				 
                 return false;
            }
			m_warn_on_change = true;
        }
    }
    else{
        console.log('Not in group, confirm aborted!');
    }
    
});

jQuery(document).click(function(){
    var groupName = jQuery('.pane-chat .chat-title .emojitext:first').text();
    jQuery('.input-emoji .input-placeholder').html('Type a message to <b style="color:' + getRandomColor() + '">' + groupName.toUpperCase() + '</b>.');
	console.log(groupName);
	if(m_last_item!=groupName)
		m_warn_on_change = false;
	
	m_last_item = groupName;
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//--------------------Script End