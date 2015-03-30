function Parent(){
	this.p = true;
}

Parent.prototype.getParentValue = function(){
	return this.p;
};

function Child(){
	this.c = false;
}

Child.prototype = new Parent();

Child.prototype.getChildValue = function(){
	return this.c;
};

var instance = new Child();
alert (instance.getParentValue);