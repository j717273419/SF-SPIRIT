chrome.storage.sync.get('reputationChart', function(d) {
	if(+d.reputationChart) return false;
	if(location.pathname.substr(0, 3) === "/u/") {
		var chart = new sfISO();
		chart.render();
	}
})