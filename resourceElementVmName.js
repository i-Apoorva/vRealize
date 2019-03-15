var vm1= vm.getContentAsMimeAttachment().content;
var vms=Server.findAllForType("VC:VirtualMachine", vm1); 
//System.log(vms[0].name);
System.log("hostname is-->"+vms[0].hostName);
System.log("Bios id is--->"+vms[0].biosId);