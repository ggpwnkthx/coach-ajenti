angular.module('coach').service('bootstrap', function($http, $q, tasks) {
	
	this.networkCalculate = (config) => {
		return $http.post("/api/coach/bootstrap/network/calculate", config).then(response => response.data)
	};
	this.getNetworking = () => {
        return $http.get("/api/network/config/get").then(response => response.data)
    };
	this.setNetworking = (config) => {
        return $http.post("/api/network/config/set", config).then(response => response.data)
    };
    this.setHostname = (hostname) => {
        return $http.post("/api/network/hostname/set", hostname).then(response => response.data)
    };
	
	this.start = (config) => {
		return $http.post("/api/coach/bootstrap", config).then(response => response.data)
	};
	this.prepNetwork = (iface) => {
		return $http.get("/api/coach/bootstrap/"+iface).then(response => response.data)
	}
	this.joinCluster = (config) => {
		return $http.post("/api/coach/bootstrap/join", config).then(response => response.data)
	}
	
	this.isCephInstalled = () => {
		return $http.get("/api/coach/isCephInstalled").then(response => response.data)
	};
	this.isCephFS = () => {
		return $http.get("/api/coach/isCephFS").then(response => response.data)
	};
	this.installCephFS = (config) => {
		return $http.post("/api/coach/storage/ceph/fs/add", config).then(response => response.data)
	};
	this.mountCephFS = (config) => {
		return $http.get("/api/coach/storage/ceph/fs/mount").then(response => response.data)
	};
	
	this.installNetworkServices = () => {
		return $http.get("/api/coach/installNetworkServices").then(response => response.data)
	};

	
    return this;
});