$(document).on('click','.playlist-list__folder',function() {
	$(this).children('.playlist-list-tree').slideToggle('300');
	$(this).next('.playlist-list-tree').slideToggle('300');
});
/*$(document).on('click','.playlist-list-tree__item._folder',function() {
	$(this).children('.playlist-list-tree').slideToggle('300');
});*/
